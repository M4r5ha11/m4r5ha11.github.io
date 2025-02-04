class Asnk {
  constructor(version) {
    this.version = version;
  }

  async encrypt({ text, salt }) {
    if (!salt) throw new Error('No `salt` provided!');
    if (!text) throw new Error('No `text` provided!');

    // in case when new version will come out
    if (!this.version) throw new Error('No `version` provided (in class constructor)!');

    let outputText = '';
    const splittedText = text.split('');

    let fails = 0;
    let failedChars = [];

    splittedText.forEach(token => {
      let tableChar = token.charCodeAt(0);

      if (tableChar) {
        outputText += (tableChar * Number(salt)).toString() + ' '; // add a space to separate numbers
      } else {
        outputText += '? ';
        fails++;
        failedChars.push(token);
      }
    });

    if (fails > 0) {
      console.warn(`[asnk:${this.version}]: fails: ${fails}, failed to encrypt characters: ${failedChars.join(', ')}`);
    }

    return outputText.trim();
  }

  async decrypt({ text, salt }) {
    if (!salt) throw new Error('No `salt` provided!');
    if (!text) throw new Error('No `text` provided!');
    if (!this.version) throw new Error('No `version` provided (in class constructor)!');

    let outputText = '';
    const splittedText = text.split(' ');

    let fails = 0;
    let failedChars = [];

    splittedText.forEach(token => {
      const num = parseFloat(token);
      let originalChar;

      if (!isNaN(num)) {
        // divide by the salt
        const charCode = Math.round(num / Number(salt));

        // find the character
        originalChar = String.fromCharCode(charCode);
        outputText += originalChar;
      } else {
        outputText += '?';
        fails++;
        failedChars.push(token);
      }
    });

    if (fails > 0) {
      console.warn(`[asnk:${this.version}]: fails: ${fails}, failed to decrypt characters: ${failedChars.join(', ')}`);
    }

    return outputText;
  }
}

export default Asnk;

async function cryptoRandomNumber() {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);

    return array[0];
}

function $(sel) {
    return document.querySelector(sel);
}

const asnk = new Asnk('vas-1');

const text = 'hello, world! Lorem ipsum dolor sit amet.... га, Стім Дек!? так, це буде мій 1-й. їі єуі サンプル, 見本, 試料 p[}].// ({}) #@; 1234 => 15:43';
$('#input-text').innerText = text;

const salt = await cryptoRandomNumber();
$('#salt').innerText = salt;

const encryptedText = await asnk.encrypt({ text, salt });
$('#encrypted-output').innerText = encryptedText;

const decryptedText = await asnk.decrypt({ text: encryptedText, salt });

$('#output').innerText = decryptedText;

async function performanceTest() {
    // Measure encryption time
    const startEncrypt = performance.now(); // Start time
    await asnk.encrypt({ text, salt });
    
    const endEncrypt = performance.now(); // End time
    const encryptTime = endEncrypt - startEncrypt; // Calculate elapsed time for encryption

    $('#perf-encrypt').innerText = `${encryptTime.toFixed(2)} ms`;

    // Measure decryption time
    const startDecrypt = performance.now(); // Start time for decryption
    await asnk.decrypt({ text: encryptedText, salt });

    const endDecrypt = performance.now(); // End time for decryption
    const decryptTime = endDecrypt - startDecrypt; // Calculate elapsed time for decryption

    $('#perf-decrypt').innerText = `${decryptTime.toFixed(2)} ms`;
}

performanceTest();




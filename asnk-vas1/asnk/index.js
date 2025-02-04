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
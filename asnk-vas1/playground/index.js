class Asnk {
    constructor(version) {
        this.version = version;
    }

    async encrypt({ text, salt }) {
        if (!salt) throw new Error('No `salt` provided!');

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

async function cryptoRandomNumber() {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);

    return array[0];
}

async function unsafeSalt() {
    return Math.random().toString().slice(2);
}

function $(sel) {
    return document.querySelector(sel);
}

const asnk = new Asnk('vas-1');

const textInput = $('#input-text');
const selector = $('#salt-variant_selector');

async function getDefaultSalt() {
    if (selector.value === 'cryptoRandomNumber')
        return cryptoRandomNumber();
    else if (selector.value === 'unsafeSalt')
        return unsafeSalt();
}

const salt = await getDefaultSalt();

$('#salt').innerText = salt;

selector.onchange = async () => {
    $('#encrypted-output').innerText = '';
    textInput.innerText = '';
}

$('#encrypt-btn').onclick = async () => {
    $('#salt').innerText = salt;

    if (!textInput.value) {
        $('#encrypted-output').innerText = '';
    }

    $('#encrypted-output').innerText = await asnk.encrypt({ text: textInput.value, salt });
}


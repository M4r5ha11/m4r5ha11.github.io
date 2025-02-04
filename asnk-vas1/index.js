import Asnk from './asnk/index.js';
import { cryptoRandomNumber } from "./utils/salt/cryptoRandomNumber.js";

import { $ } from '../utils/querySel.js';


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




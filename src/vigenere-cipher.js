const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if ((message === undefined) || (key === undefined)) {
      throw new Error(`Incorrect arguments!`)
    }
    if (!message || !key) {
      throw new Error('Both message and key are required');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    const encryptedChars = [];
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const keyChar = key.charCodeAt(j % key.length) - 65;
        const messageChar = charCode - 65;
        const encryptedChar = String.fromCharCode(((messageChar + keyChar) % 26) + 65);
        encryptedChars.push(encryptedChar);
        j++;
      } else {
        encryptedChars.push(message.charAt(i));
      }
    }

    return this.direct ? encryptedChars.join('') : encryptedChars.reverse().join('');
  }

  decrypt(message, key) {
    if ((message === undefined) || (key === undefined)) {
      throw new Error(`Incorrect arguments!`)
    }
    if (!message || !key) {
      throw new Error('Both message and key are required');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    const decryptedChars = [];
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const keyChar = key.charCodeAt(j % key.length) - 65;
        const messageChar = charCode - 65;
        const decryptedChar = String.fromCharCode(((messageChar - keyChar + 26) % 26) + 65);
        decryptedChars.push(decryptedChar);
        j++;
      } else {
        decryptedChars.push(message.charAt(i));
      }
    }

    return this.direct ? decryptedChars.join('') : decryptedChars.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

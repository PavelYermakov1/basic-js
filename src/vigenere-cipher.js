class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
    }


    encrypt(word, keyword) {
        if (!word || !keyword) throw new Error();
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let encriptWord = '';
        word = word.toUpperCase();
        keyword = keyword.toUpperCase();
        let other = 0;
        for (let i = 0; i < word.length; i++) {
            if(alphabet.indexOf(word[i]) < 0) {
                encriptWord += word[i];
                other++;
            } else {
                encriptWord += alphabet.charAt((alphabet.indexOf(word[i]) + alphabet.indexOf(keyword[(i - other) % keyword.length])) % alphabet.length);
            }
        }
        if(!this.mode) return encriptWord.split('').reverse().join('');
        return encriptWord;
      }

    decrypt(encriptWord, keyword) {
        if (!encriptWord || !keyword) throw new Error();
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let message = '';
        keyword = keyword.toUpperCase();
        let other = 0;
        for (let i = 0; i < encriptWord.length; i++) {
            if(alphabet.indexOf(encriptWord[i]) < 0) {
                message += encriptWord[i];
                other++;
            } else {
                message += alphabet.charAt(((alphabet.indexOf(encriptWord[i]) + alphabet.length) - alphabet.indexOf(keyword[(i - other) % keyword.length])) % alphabet.length);
            }
        }
        if(!this.mode) return message.split('').reverse().join('');
        return message;
      }
        
}

module.exports = VigenereCipheringMachine;

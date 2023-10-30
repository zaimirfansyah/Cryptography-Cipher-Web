// Fungsi untuk mengenkripsi teks menggunakan Vigenere Cipher
function vigenereEncrypt(text, key) {
    // Inisialisasi alfabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        if (alphabet.includes(char)) {
            const textIndex = alphabet.indexOf(char);
            const keyChar = key[keyIndex % key.length].toUpperCase();
            const keyIndexChar = alphabet.indexOf(keyChar);

            const newIndex = (textIndex + keyIndexChar) % alphabet.length;
            result += alphabet[newIndex];

            keyIndex++;
        } else {
            result += char;
        }
    }

    return result;
}

// Fungsi untuk mendekripsi teks menggunakan Vigenere Cipher
function vigenereDecrypt(text, key) {
    // Inisialisasi alfabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        if (alphabet.includes(char)) {
            const textIndex = alphabet.indexOf(char);
            const keyChar = key[keyIndex % key.length].toUpperCase();
            const keyIndexChar = alphabet.indexOf(keyChar);

            let newIndex = (textIndex - keyIndexChar);
            if (newIndex < 0) {
                newIndex = (newIndex + alphabet.length) % alphabet.length;
            }
            result += alphabet[newIndex];

            keyIndex++;
        } else {
            result += char;
        }
    }

    return result;
}

// Fungsi untuk menangani tombol "Execute"
function process() {
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;
    const action = document.getElementById("action").value;

    let result;
    if (action === 'encrypt') {
        result = vigenereEncrypt(message, key);
    } else {
        result = vigenereDecrypt(message, key);
    }

    document.getElementById("result").textContent = result;
}

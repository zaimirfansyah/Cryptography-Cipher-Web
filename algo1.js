// Fungsi untuk mengenkripsi atau mendekripsi teks menggunakan Caesar Cipher
function caesarCipher(text, shift, action) {
    if (action !== 'encrypt' && action !== 'decrypt') {
        return 'Invalid action';
    }

    // Menginisialisasi alfabet besar dan kecil
    const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';

    // Inisialisasi teks hasil
    let result = '';

    // Lakukan operasi enkripsi atau dekripsi pada setiap karakter teks
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (uppercaseAlphabet.includes(char)) {
            const alphabet = uppercaseAlphabet;
            const index = alphabet.indexOf(char);
            let newIndex;

            if (action === 'encrypt') {
                newIndex = (index + shift) % 26;
            } else {
                newIndex = (index - shift + 26) % 26;
            }

            result += alphabet[newIndex];
        } else if (lowercaseAlphabet.includes(char)) {
            const alphabet = lowercaseAlphabet;
            const index = alphabet.indexOf(char);
            let newIndex;

            if (action === 'encrypt') {
                newIndex = (index + shift) % 26;
            } else {
                newIndex = (index - shift + 26) % 26;
            }

            result += alphabet[newIndex];
        } else {
            // Karakter selain huruf akan tetap tidak berubah
            result += char;
        }
    }

    return result;
}

// Fungsi untuk menangani tombol "Execute"
function process() {
    const message = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);
    const action = document.getElementById("action").value;
    const result = caesarCipher(message, shift, action);
    document.getElementById("result").textContent = result;
}

// Fungsi untuk mengenkripsi atau mendekripsi teks menggunakan Reverse Cipher
function reverseCipher(text) {
    // Membalik urutan karakter dalam teks
    return text.split('').reverse().join('');
}

// Fungsi untuk menangani tombol "Execute"
function process() {
    const message = document.getElementById("message").value;
    const result = reverseCipher(message);
    document.getElementById("result").textContent = result;
}

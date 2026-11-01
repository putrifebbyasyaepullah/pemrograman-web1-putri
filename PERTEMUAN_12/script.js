// Praktik JavaScript Sederhana - Pertemuan 12

const inputNama = document.getElementById("nama");
const tombolSapa = document.getElementById("tombolSapa");
const hasil = document.getElementById("hasil");

tombolSapa.addEventListener("click", function () {
    const nama = inputNama.value.trim();

    if (nama === "") {
        alert("Silakan masukkan nama terlebih dahulu.");
        inputNama.focus();
        return;
    }

    // Menampilkan nama melalui alert()
    alert("Halo, " + nama + "!");

    // Menampilkan nama di Console browser
    console.log("Nama yang dimasukkan: " + nama);

    // Menampilkan sapaan pada halaman
    hasil.textContent = "Selamat belajar JavaScript, " + nama + "!";

    // Mempraktikkan prompt() untuk meminta konfirmasi nama
    const namaPrompt = prompt("Masukkan nama Anda sekali lagi:", nama);
    if (namaPrompt !== null && namaPrompt.trim() !== "") {
        console.log("Nama dari prompt(): " + namaPrompt.trim());
    }
});

let sudahDitekan = localStorage.getItem("sudahDitekan");
        let nilai = parseInt(localStorage.getItem("nilai")) || 0;

        const tombolTambah = document.getElementById("tombolTambah");
        const tombolReset = document.getElementById("tombolReset");
        const tampilNilai = document.getElementById("nilai");

        // Menampilkan nilai yang tersimpan
        tampilNilai.textContent = nilai;

        // Fungsi untuk menangani klik tombol "Tambah"
        function tambahNilai() {
            nilai += 1;
            tampilNilai.textContent = nilai;

            // Simpan nilai yang baru dan tanda bahwa tombol sudah ditekan
            localStorage.setItem("nilai", nilai);
            localStorage.setItem("sudahDitekan", "true")

            // Hapus event listener setelah tombol ditekan
            tombolTambah.removeEventListener("click", tambahNilai);
        }

        // Jika tombol sudah ditekan sebelumnya, beri alert dan nonaktifkan fungsi tambah
        if (sudahDitekan) {
            tombolTambah.addEventListener("click", function() {
            });
        } else {
            // Menambahkan event listener untuk tombol "Tambah"
            tombolTambah.addEventListener("click", tambahNilai);
        }

        // Fungsi untuk mereset status dan nilai
        tombolReset.addEventListener("click", function() {
            // Menghapus data dari localStorage
            localStorage.removeItem("nilai");
            localStorage.removeItem("sudahDitekan");

            // Mengatur ulang nilai dan memperbolehkan tombol ditekan lagi
            nilai = 0;
            tampilNilai.textContent = nilai;

            // Menambahkan kembali event listener untuk tombol 'Tambah'
            tombolTambah.addEventListener("click", tambahNilai);
        });
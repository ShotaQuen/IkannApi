// Fungsi untuk menambah visitor count
    function updateVisitorCount() {
      // Mengecek apakah user sudah pernah mengunjungi (berdasarkan localStorage)
      if (!localStorage.getItem('hasVisited')) {
        // Jika belum, tambahkan visitor count
        let visitorCount = localStorage.getItem('visitorCount');
        
        // Jika tidak ada count sebelumnya, inisialisasi ke 0
        if (!visitorCount) {
          visitorCount = 0;
        }
        
        // Tambahkan 1
        visitorCount++;
        
        // Simpan kembali ke localStorage
        localStorage.setItem('visitorCount', visitorCount);
        
        // Tandai bahwa user sudah mengunjungi
        localStorage.setItem('hasVisited', 'true');
      }

      // Tampilkan jumlah visitor
      document.getElementById('visitorCount').textContent = localStorage.getItem('visitorCount') || 0;
    }

    // Jalankan fungsi
    updateVisitorCount();
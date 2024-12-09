fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                // Menampilkan IP address
                document.getElementById('ip-address').textContent = `${data.ip}`;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('ip-address').textContent = 'Gagal mendapatkan IP address.';
            });
async function getLocalIP() {
            const pc = new RTCPeerConnection();
            pc.createDataChannel('');
            pc.createOffer().then(offer => pc.setLocalDescription(offer));

            pc.onicecandidate = event => {
                if (!event.candidate) return;
                const ip = /([0-9]{1,3}\.){3}[0-9]{1,3}/.exec(event.candidate.candidate);
                if (ip) {
                    document.getElementById('ip-address-lokal').textContent = `${ip[0]}`;
                }
                pc.close();
            };
        }

        getLocalIP().catch(error => {
            console.error('Error:', error);
            document.getElementById('ip-address').textContent = 'Gagal mendapatkan IP lokal.';
        });
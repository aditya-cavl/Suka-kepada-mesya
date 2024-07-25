document.getElementById('showMessageBtn').addEventListener('click', function() {
    document.getElementById('message').classList.toggle('hidden');
});

document.getElementById('doYouLikeMeBtn').addEventListener('click', function() {
    document.getElementById('response').classList.toggle('hidden');
});

document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'https://wa.me/6281313293689?text=akujugamenyukaimu💞💞'; // Ganti 'nomor_anda' dengan nomor WhatsApp Anda, misal '6281234567890'
});

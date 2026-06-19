// 1. Efek Animasi Loading Screen Kubus
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
    }, 1500); // Tampil selama 1.5 detik
});

// 2. Fitur Dark / Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// 3. Interaktivitas FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Menutup item FAQ lain yang sedang terbuka (opsional)
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle item yang diklik
        item.classList.toggle('active');
    });
});

// 4. Proteksi Ekstra Pencegahan Download Logo
const logo = document.getElementById('siteLogo');

// Mencegah Klik Kanan khusus pada area elemen Logo
logo.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Mencegah aksi pintasan keyboard (seperti Inspect Element / Save As) ketika kursor diarahkan ke logo
logo.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 's' || e.key === 'u')) {
        e.preventDefault();
    }
});

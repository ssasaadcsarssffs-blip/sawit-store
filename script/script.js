// 1. Loading Screen Animasi Kubus
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
        }, 1200); // Layar loading menutup mulus setelah 1.2 detik
    }
});

// 2. Kontrol Navigasi Geser Slider Jualan (Tombol Kanan-Kiri)
const slider = document.getElementById('productSlider');
const nextBtn = document.getElementById('slideNext');
const prevBtn = document.getElementById('slidePrev');

if (slider && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        // Menggeser ke kanan sebesar lebar elemen item produk
        slider.scrollLeft += slider.offsetWidth * 0.85;
    });
    prevBtn.addEventListener('click', () => {
        // Menggeser ke kiri sebesar lebar elemen item produk
        slider.scrollLeft -= slider.offsetWidth * 0.85;
    });
}

// 3. Sistem Pengubah Tema (Dark / Light Mode)
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            themeIcon.className = 'fas fa-moon'; // Berubah jadi ikon bulan saat mode terang aktif
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            themeIcon.className = 'fas fa-sun'; // Berubah jadi ikon matahari saat mode gelap aktif
        }
    });
}

// 4. Interaktivitas Akordion FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', () => {
            // Tutup FAQ lain yang sedang terbuka agar rapi (opsional)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Aktifkan / nonaktifkan FAQ yang dipilih
            item.classList.toggle('active');
        });
    }
});

// 5. Proteksi Tingkat Tinggi Logo furry.png dari Download
const logo = document.getElementById('siteLogo');

if (logo) {
    // Mematikan menu klik kanan khusus pada elemen logo (mencegah "Save Image As")
    logo.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    
    // Mencegah gambar diseret / di-drag oleh user ke tab baru atau ke desktop
    logo.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
}

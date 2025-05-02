// fungsi sidebar pada layar kecil
const hamburger = document.getElementById("hamburger-button");
const menu = document.getElementById('menu');
const closebutton = document.getElementById('close-button');
const penutup = document.getElementById('penutupnav');

hamburger.addEventListener('click', function() {
    menu.classList.remove('translate-x-56', 'md:translate-x-64');
    penutup.classList.remove('hidden');
});

closebutton.addEventListener('click', function() {
    menu.classList.add('translate-x-56', 'md:translate-x-64');
    
    setTimeout (function() {
        penutup.classList.add('hidden');
    }, 600);
});

penutup.addEventListener('click', function() {
    menu.classList.add('translate-x-56', 'md:translate-x-64');
    
    setTimeout (function() {
        penutup.classList.add('hidden');
    }, 600);
});

/* fungsi tombol lingam */
function showInfo(id) {
    const headings = [
        "KAVACA SHAKTI", "AVICI SHAKTI", "BHAUDARA SHAKTI", "PASHA SHAKTI",
        "VASU SHAKTI", "NETRA SHAKTI", "VATA SHAKTI", "HESA SHAKTI"
    ];
    const paragraphs = [
        "Memberikan perisai yang beregenerasi setelah durasi tertentu setelah pengurangan.", "Menambahkan pengubah serangan Ksatriya yang menerapkan efek pembakaran pada setiap pukulan.", "Memberikan aura yang meningkatkan kecepatan gerakan dan regen Prana penggunanya dan 2 unit sekutu terdekat.",
        "Memberikan Ksatriya kemampuan untuk memperlambat pergerakan dan kecepatan serangan musuh.", "Menyembuhkan unit diri dan sekutu di area sekitar.", "Membuka visibilitas peta dan memperlihatkan semua musuh yang tersembunyi.",
        "Memindahkan Anda ke tempat yang ditunjuk.", "Mengatur ulang masa pendinginan semua mantra."
    ];
    
    document.getElementById('heading1').innerText = headings[id - 1];
    document.getElementById('paragraph1').innerText = paragraphs[id - 1];

    // Atur ulang opacity semua gambar
    const imgButtons = document.querySelectorAll('.img-button');
    imgButtons.forEach(img => {
        img.classList.remove('opacity-100');
        img.classList.add('opacity-45');
    });
    const shaButtons = document.querySelectorAll('.btn-shadow');
    shaButtons.forEach(img => {
        img.classList.remove('shadow-[0_0_20px_rgba(0,0,0,0.45)]');
    });
    
    // Set opacity gambar yang ditekan menjadi 100
    imgButtons[id - 1].classList.remove('opacity-45');
    imgButtons[id - 1].classList.add('opacity-100');
    shaButtons[id - 1].classList.add('shadow-[0_0_20px_rgba(0,0,0,0.45)]');
}

/* fungsi tombol mantra */
function showMantra(id) {
    const headings = [
        "EBULLIENCE", "FLANEUR", "FORTRESS", "ORENDA", "VAMOOSE", "INFERNAL", "OCULAR", "IMPRINT", "FLUMMOXED", "RETRIEVE"
    ];
    const paragraphs = [
        "Mendapatkan bonus Kecepatan Serangan dan Kerusakan Serangan untuk Ksatriya.", "Memberikan kerusakan pada Minion/Monster Rimba. Setelah Minion/Monster Rimba dilenyapkan, HP Ksatriya dipulihkan dari HP maksimum Minion/Monster Rimba.", "Mendapatkan perisai yang memblokir kerusakan pada Ksatriya dan satu sekutu di dekatnya.", "Mengembalikan HP dan Prana ke Ksatriya dan semua sekutu di dekatnya.", "Teleportasi ke jarak yang dekat dari Ksatriya--tidak perlu berjalan.", "Memberikan Magic Damage dan efek stun ke seluruh Ksatriya dan Minion musuh di sekitar dari jarak tertentu.", "Menempatkan radar untuk mengintai area sekitar. Memiliki kemampuan untuk melihat musuh (termasuk yang tak terlihat) dan/atau radar musuh yang ditempatkan dalam jangkauan.", "Melacak musuh dan membuatnya terlihat. Jika musuh yang dilacak berhasil dieliminasi, pemain akan memberikan bonus Emas kepada masing-masing eksekutor dan perapal mantra.", "Membungkam musuh, menonaktifkan penggunaan Keterampilan dan Mantra.", "Berteleportasi kembali ke Svaka setelah melakukan penyaluran selama beberapa detik. Penyaluran dibatalkan jika Ksatriya terluka atau dipindahkan."
    ];
    
    document.getElementById('heading2').innerText = headings[id - 1];
    document.getElementById('paragraph2').innerText = paragraphs[id - 1];

    // Atur ulang opacity semua gambar
    const imgButtons = document.querySelectorAll('.img-buttonMan');
    imgButtons.forEach(img => {
        img.classList.remove('opacity-100');
        img.classList.add('opacity-45');
    });
    const shaButtons = document.querySelectorAll('.btn-shadow2');
    shaButtons.forEach(img => {
        img.classList.remove('shadow-[0_0_20px_rgba(0,0,0,0.45)]');
    });
    
    // Set opacity gambar yang ditekan menjadi 100
    imgButtons[id - 1].classList.remove('opacity-45');
    imgButtons[id - 1].classList.add('opacity-100');
    shaButtons[id - 1].classList.add('shadow-[0_0_20px_rgba(0,0,0,0.45)]');
}

/* fungsi history web */
const version = document.querySelectorAll('.version[data-target]');

version.forEach(versi => {
    versi.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const paragraphs = document.querySelectorAll(`#${targetId} p`);

        document.getElementById(targetId).classList.toggle('h-0');
        document.getElementById(targetId).classList.toggle('pt-2');

        paragraphs.forEach(paragraph => {
            paragraph.classList.toggle('-translate-y-full');
        });

        const svgs = this.querySelectorAll(`svg`);
        svgs.forEach(svg => {
            svg.classList.toggle('rotate-180');
        });
    });
});

/* delay sebelum user dilempar */
let delays = document.querySelectorAll('.delayed-link');

delays.forEach(delay => {
    delay.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah aksi default tautan
        const link = this.getAttribute('href');
        setTimeout(function() {
            window.location.href = link;
        }, 800); // 800 ms = 0,8 detik
    });
});
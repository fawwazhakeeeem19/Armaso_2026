window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const awan = document.getElementById("awan");
  const pohonBelakangKiri = document.getElementById("pohonBelakangKiri");
  const pohonBelakangKanan = document.getElementById("pohonBelakangKanan");
  const pohonDepanKiri = document.getElementById("pohonDepanKiri");
  const pohonDepanKanan = document.getElementById("pohonDepanKanan");
  const daunKiri = document.getElementById("daunKiri");
  const daunKanan = document.getElementById("daunKanan");
  const batuKiri = document.getElementById("batuKiri");
  const batuKanan = document.getElementById("batuKanan");
  const teks = document.getElementById("teks");

  // Parallax sederhana
  if (awan) awan.style.transform = `translateY(${-scrollY * 0.3}px)`;
  if (pohonBelakangKiri) pohonBelakangKiri.style.transform = `translateX(${-scrollY * 0.15}px)`;
  if (pohonBelakangKanan) pohonBelakangKanan.style.transform = `translateX(${scrollY * 0.15}px)`;
  if (pohonDepanKiri) pohonDepanKiri.style.transform = `translateX(${-scrollY * 0.25}px)`;
  if (pohonDepanKanan) pohonDepanKanan.style.transform = `translateX(${scrollY * 0.25}px)`;
  if (daunKiri) daunKiri.style.transform = `translateX(${-scrollY * 0.35}px)`;
  if (daunKanan) daunKanan.style.transform = `translateX(${scrollY * 0.35}px)`;

  // Batu kiri-kanan ikut turun
  if (batuKiri) batuKiri.style.transform = `translateY(${scrollY * 0.4}px)`;
  if (batuKanan) batuKanan.style.transform = `translateY(${scrollY * 0.4}px)`;

  // Tulisan ARMASO mengecil dan sedikit turun
  if (teks) {
    const scale = Math.max(0.6, 1 - scrollY / 800); // semakin scroll, semakin kecil
    const moveDown = Math.min(scrollY * 0.2, 100); // turun sedikit (max 100px)
    teks.style.transform = `translate(-50%, calc(-50% + ${moveDown}px)) scale(${scale})`;
  }

// Efek Tulisan ARMASO Mengecil dan Menghilang Saat Scroll
if (teks) {
  const scale = Math.max(1 - scrollY / 800, 0.5); // mengecil pelan
  const opacity = Math.max(1 - scrollY / 400, 0); // makin scroll, makin transparan
  const moveDown = scrollY * 0.2; // sedikit turun biar natural

  teks.style.transform = `translate(-50%, calc(-50% + ${moveDown}px)) scale(${scale})`;
  teks.style.opacity = opacity;
}
 
// Efek Tulisan ARMASO Mengecil dan Menghilang Saat Scroll
// Efek Tulisan ARMASO Menghilang Saat Scroll
if (teks) {
  const opacity = Math.max(1 - scrollY / 400, 0); // semakin scroll, semakin transparan
  const moveDown = scrollY * 0.2; // turun sedikit agar terasa natural

  teks.style.transform = `translate(-50%, calc(-50% + ${moveDown}px))`;
  teks.style.opacity = opacity;
}

window.addEventListener('scroll', () => {
  const teks = document.getElementById('teks-armaso');
  const scrollY = window.scrollY;
  const fade = Math.max(0, 1 - scrollY / 400); // Semakin di-scroll, semakin transparan
  teks.style.opacity = fade;
});



});

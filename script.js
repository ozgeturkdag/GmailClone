// from HTML
const hamburgerMenu = document.querySelector('.menu');
const navigation = document.querySelector('nav');

// Olay İzleyicileri
hamburgerMenu.addEventListener('click', handleMenu);

// Navigasyonu açıp kapamaya yarayan fonksiyon
// Hamburger menüsüne tıklanınca çalışır
function handleMenu() {
  /*
     classList.toggle():
     * ona parametre olarak verdiğimiz class
     * yoksa ekler varsa çıkarır
    */
  navigation.classList.toggle('hide');
}

function topla(a, b) {
  const toplam = a + b;

  let cıkarma = a - b - a;

  let metin2 = 'asdasd';
  // eğer fonksiyonun sonucunu farklı
  // bir yerde kullanmak istiyorsak
  // o zaman return satırı ile sonucu göndermemiz gerekir
  return toplam;
}

const metin = `Bugün 2 farklı vardiyada toplam ${topla(
  10,
  5
)} saat çalıştım`;

console.log(metin);

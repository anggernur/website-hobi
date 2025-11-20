# 🎯 INFORMASI LENGKAP WEBSITE HOBI SKATEBOARD

## 📋 Ringkasan Proyek

Ini adalah website hobi bermain **Skateboard** yang dibuat sebagai tugas **UTS Pemrograman Web Mobile**. Website menampilkan:

✅ Informasi tentang hobi skateboarding  
✅ Trik-trik favorit  
✅ Galeri foto  
✅ Form kontak dengan validasi  
✅ Design modern dan responsive  
✅ Animasi dan interaksi yang menarik  

---

## 🚀 Cara Menjalankan Website

### Method 1: XAMPP (Recommended)
```
1. Pastikan XAMPP terinstall
2. Letakkan folder 'website-hobi' di C:\xampp\htdocs\
3. Buka XAMPP Control Panel
4. Klik "Start" untuk Apache
5. Buka browser: http://localhost/website-hobi
```

### Method 2: VS Code Live Server
```
1. Install extension "Live Server" (5M+ downloads)
2. Buka folder workspace website-hobi
3. Klik kanan index.html → "Open with Live Server"
4. Browser otomatis terbuka
```

### Method 3: Direct File
```
1. Double-click index.html
2. Browser akan membuka file secara langsung
```

---

## 📁 Struktur Folder

```
website-hobi/
├── index.html                 # File HTML utama
├── css/
│   └── style.css             # Styling custom
├── js/
│   └── script.js             # Interaksi JavaScript
├── images/                   # Folder gambar
│   ├── README.md            # Panduan menambah gambar
│   ├── photo1.jpg           # Contoh foto
│   └── skate-night.jpg      # Contoh foto
├── .htaccess                # Konfigurasi Apache
├── README.md                # Dokumentasi lengkap
└── SETUP.md                 # File ini
```

---

## 🎨 Fitur Website

### 1. **Navigation Bar** 🧭
- Logo dengan icon skateboard
- Menu responsif dengan collapse mobile
- Smooth scroll ke section
- Active indicator saat scroll

### 2. **Hero Section** 🏄
- Background gradient yang eye-catching
- Animasi text yang smooth
- Call-to-action button
- Pattern subtle di background

### 3. **About Section** 👤
- Foto profil dengan hover effects
- Bio singkat tentang passion skateboarding
- Skill badges yang interactive
- Gradient text effects

### 4. **Hobby Cards** 💡
- 4 kartu alasan suka skateboard:
  1. **Kebebasan** - Express diri
  2. **Kesehatan** - Olahraga bagus
  3. **Komunitas** - Social bonding
  4. **Mental Strength** - Build confidence
- Animated icons
- Hover effects premium

### 5. **Tricks Section** 🎯
- 6 trik skateboard populer:
  - Kickflip
  - Ollie Backflip
  - Manual
  - Heelflip
  - Grind
  - Varial
- Skill level badges (Beginner, Intermediate, Advanced)
- Deskripsi detail setiap trik

### 6. **Gallery Section** 📸
- 6 foto galeri skateboarding
- Overlay effect saat hover
- Zoom & brightness effect
- Responsive grid layout
- Placeholder generator jika foto belum ada

### 7. **Contact Section** 📧
- Form kontak dengan validasi:
  - Validasi field kosong
  - Validasi format email
  - Success feedback
- Informasi kontak (alamat, telepon, email)
- Social media links (Instagram, Facebook, YouTube, TikTok)

### 8. **Footer** 📝
- Copyright information
- Design credit

### 9. **Bonus Features** ⭐
- **Scroll-to-Top Button** - Muncul setelah scroll
- **Intersection Observer** - Fade-in animation
- **Form Validation** - Client-side validation
- **Smooth Navigation** - Smooth scroll
- **Image Fallback** - Auto placeholder SVG
- **Responsive Design** - Mobile-first approach

---

## 🛠️ Teknologi yang Digunakan

### Frontend Stack
```
HTML5 → Struktur semantic
CSS3  → Styling custom dengan gradient & animation
JS    → Vanilla JavaScript (No Framework)
Bootstrap 5 → Responsive grid & components
Font Awesome 6 → Icon library (6000+ icons)
```

### External Libraries
- **Bootstrap 5.3.0** - CDN untuk grid & components
- **Font Awesome 6.4.0** - CDN untuk icons
- **Google Fonts** - Optional untuk custom fonts

### Tanpa Dependency External
- ✅ Vanilla JavaScript (tidak perlu jQuery)
- ✅ Custom CSS (tidak perlu CSS framework lain)
- ✅ No build tools diperlukan
- ✅ Langsung bisa di-host

---

## 📱 Responsive Breakpoints

Website responsive di semua ukuran:

| Device | Ukuran | Status |
|--------|--------|--------|
| Mobile Kecil | < 576px | ✅ Optimized |
| Mobile | 576px - 767px | ✅ Optimized |
| Tablet | 768px - 1199px | ✅ Optimized |
| Desktop | 1200px+ | ✅ Optimized |

---

## 🎨 Color Palette

Website menggunakan 4 warna utama:

```
Primary Color:    #FFD60A (Gold/Yellow) - Accent utama
Secondary Color:  #FFC300 (Orange-Yellow) - Complement
Dark Color:       #1a1a1a (Dark Black) - Text & bg
Light Color:      #f8f9f9 (Off-white) - Background
```

**Alasan Warna:**
- Yellow/Gold = Energetic & Active (skateboarding vibes)
- Dark = Professional & Modern
- Combination = High contrast & accessibility

---

## ✨ Animasi & Interaksi

### Animasi CSS
- `slideInDown` - Hero title fade in
- `slideInUp` - Hero description fade in
- `float` - Background pattern floating
- `bounce` - Button bouncing effect
- `fadeInUp` - Cards fade in on scroll

### Interaksi JavaScript
- **Smooth Scroll** - Smooth scroll saat klik nav
- **Form Validation** - Validasi input sebelum submit
- **Scroll Animation** - Fade-in cards saat masuk viewport
- **Active Nav Link** - Update nav saat scroll
- **Mobile Menu Toggle** - Auto close saat klik link
- **Scroll-to-Top** - Button muncul & smooth scroll
- **Image Fallback** - SVG placeholder jika error

---

## 📝 Cara Customize

### 1. Ubah Nama/Biodata
Edit di `index.html` section `#tentang`:
```html
<h3>Nama Anda</h3>
<p>Biodata Anda...</p>
```

### 2. Tambah Gambar
1. Letakkan gambar di folder `images/`
2. Update `src` di HTML:
```html
<img src="images/nama-gambar.jpg" alt="Deskripsi">
```

### 3. Ubah Warna
Edit di `css/style.css` bagian `:root`:
```css
:root {
    --primary-color: #FFD60A;      /* Ubah warna utama */
    --secondary-color: #FFC300;    /* Ubah warna kedua */
    --dark-color: #1a1a1a;         /* Ubah warna gelap */
    --light-color: #f8f9fa;        /* Ubah warna terang */
}
```

### 4. Ubah Trik
Edit section `#trik` untuk menambah/mengubah trik

### 5. Ubah Kontak
Edit section `#kontak` dengan info Anda:
- Nomor telepon
- Email
- Lokasi
- Social media

---

## ✅ Testing Checklist

Sebelum submit, pastikan:

- [ ] Website buka tanpa error
- [ ] Semua link bekerja (navbar, buttons)
- [ ] Form validasi berfungsi
- [ ] Responsive di mobile, tablet, desktop
- [ ] Animasi smooth di semua browser
- [ ] Gambar load dengan baik (atau placeholder terlihat)
- [ ] Contact form bisa submit
- [ ] Scroll-to-top button muncul & berfungsi
- [ ] Tidak ada console error (buka DevTools F12)
- [ ] Social media links bisa diklik

---

## 🐛 Troubleshooting

### Website tidak buka di http://localhost/website-hobi
**Solusi:**
1. Cek Apache running di XAMPP
2. Cek folder berada di `C:\xampp\htdocs\website-hobi\`
3. Cek file `index.html` ada di root folder

### Gambar tidak muncul
**Solusi:**
1. Cek file ada di folder `images/`
2. Cek nama file sesuai di HTML
3. Refresh browser (Ctrl+F5)
4. Akan muncul placeholder SVG sebagai fallback

### Form tidak bisa submit
**Solusi:**
1. Cek console (F12) ada error
2. Cek input ada isi semua
3. Cek format email valid
4. File `js/script.js` harus loaded

### Navbar tidak responsive di mobile
**Solusi:**
1. Cek viewport meta tag ada di `<head>`
2. Cek Bootstrap CSS terimport
3. Cek file `js/script.js` terimport
4. Clear cache browser (Ctrl+Shift+Delete)

### Animasi tidak smooth
**Solusi:**
1. Cek browser support CSS3
2. Cek file `css/style.css` terimport
3. Cek console ada error
4. Update browser ke versi terbaru

---

## 📊 File Sizes

| File | Ukuran | Notes |
|------|--------|-------|
| index.html | ~15 KB | HTML utama |
| css/style.css | ~20 KB | Styling lengkap |
| js/script.js | ~8 KB | Interaksi |
| **Total** | **~43 KB** | Very lightweight! |

**Catatan:** File super lightweight, cocok untuk performa optimal!

---

## 🌐 Browser Support

Website kompatibel dengan:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android)

---

## 📚 Resources Referensi

### Dokumentasi
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/) - Browser compatibility

### Tools Berguna
- [VS Code](https://code.visualstudio.com/) - Code editor
- [TinyPNG](https://tinypng.com/) - Compress gambar
- [Unsplash](https://unsplash.com/) - Free images
- [Canva](https://canva.com/) - Design tool

---

## 📝 Checklist Tugas UTS

Sesuai dengan requirements tugas:

- ✅ **Menggunakan AI** - Dibuat dengan bantuan AI
- ✅ **Hobi Skateboard** - Content relevan skateboard
- ✅ **Bootstrap** - Responsive grid & components
- ✅ **Foto & Deskripsi** - Gallery + about section
- ✅ **File Lengkap** - HTML, CSS, JS included
- ✅ **Responsive** - Mobile-first design
- ✅ **Animasi** - Multiple CSS & JS animations
- ✅ **Form Kontak** - Dengan validasi
- ✅ **Deployment Ready** - Siap upload ke hosting

---

## 🎓 Kesimpulan

Website ini adalah contoh implementasi modern untuk tugas UTS dengan:

✨ **Design** - Modern & attractive  
🚀 **Performance** - Lightweight & fast  
📱 **Responsive** - Works on all devices  
✅ **Functionality** - Form validation, smooth navigation  
🎨 **Animation** - Smooth & polished  
📝 **Code** - Clean & well-organized  

**Siap untuk di-submit dan di-deploy!** 🎉

---

**Need Help?**
- Cek README.md untuk dokumentasi lengkap
- Cek console (F12) untuk debugging
- Cek folder images/README.md untuk gambar tips

Happy Coding! 🛹💻✨

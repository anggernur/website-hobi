# 🛹 Skateboard Hobby Website

Website hobi bermain skateboard yang menarik dan responsif untuk tugas UTS Pemrograman Web Mobile.

## ✨ Fitur Utama

### 1. **Navigasi & Header**
   - Navbar yang sticky dan responsive
   - Logo dengan icon skateboard
   - Menu navigasi yang smooth scroll
   - Mobile-friendly toggle menu

### 2. **Hero Section**
   - Background gradient yang eye-catching
   - Animasi text yang menarik
   - Call-to-action button dengan hover effects
   - Pattern background yang subtle

### 3. **About Section**
   - Foto profil dengan shadow & hover effects
   - Deskripsi detail tentang passion skateboarding
   - Skill badges yang interaktif
   - Layout yang responsif

### 4. **Hobby Cards**
   - 4 kartu dengan alasan suka skateboard:
     - 🌪️ Kebebasan (Freedom)
     - 💪 Kesehatan (Health)
     - 👥 Komunitas (Community)
     - 🧠 Mental Strength
   - Hover animations dan icon gradient
   - Shadow effects yang premium

### 5. **Tricks Section**
   - 6 trik skateboard favorit dengan deskripsi:
     - Kickflip
     - Ollie Backflip
     - Manual
     - Heelflip
     - Grind
     - Varial
   - Skill level badges (Beginner, Intermediate, Advanced)
   - Styling dengan accent colors

### 6. **Gallery Section**
   - 6 foto galeri dengan overlay effect
   - Hover zoom & brightness effects
   - Caption yang muncul saat di-hover
   - Placeholder generator jika gambar tidak tersedia
   - Responsif di semua ukuran layar

### 7. **Contact Section**
   - Form kontak dengan validasi:
     - Validasi field kosong
     - Validasi email format
     - Success message
   - Informasi kontak (Lokasi, Telepon, Email)
   - Social media links:
     - Instagram
     - Facebook
     - YouTube
     - TikTok

### 8. **Footer**
   - Copyright information
   - Design credit

## 🎨 Desain & Styling

### Color Scheme
- **Primary Color**: #FFD60A (Yellow/Gold)
- **Secondary Color**: #FFC300 (Orange-Yellow)
- **Dark Color**: #1a1a1a (Dark Black)
- **Light Color**: #f8f9fa (Off-white)

### Typography
- Font: Segoe UI, Tahoma, Geneva, Verdana, Sans-serif
- Responsive font sizes
- Proper line-height untuk readability

### Animations & Effects
- Smooth scroll behavior
- Fade-in animations saat scroll
- Hover effects pada cards & buttons
- Gradient backgrounds
- Box shadows yang dynamic
- Transform animations

## 📱 Responsive Design

Website fully responsive di:
- 🖥️ Desktop (1200px+)
- 💻 Tablet (768px - 1199px)
- 📱 Mobile (576px - 767px)
- 📲 Small Mobile (< 576px)

## 🛠️ Teknologi yang Digunakan

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling dengan gradients, animations, dan responsive design
- **JavaScript (Vanilla)** - Interaksi tanpa dependency
- **Bootstrap 5** - Responsive grid & components
- **Font Awesome 6** - Icon library

### Libraries
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## 📁 Struktur File

```
website-hobi/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom CSS styling
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Folder untuk menyimpan gambar
│   ├── skater.jpg      # Foto profil
│   ├── skate1.jpg      # Gallery images
│   ├── skate2.jpg
│   ├── skate3.jpg
│   ├── skate4.jpg
│   ├── skate5.jpg
│   └── skate6.jpg
└── README.md           # Dokumentasi ini
```

## 🚀 Cara Menjalankan

### Option 1: Menggunakan XAMPP
1. Letakkan folder `website-hobi` di dalam folder `htdocs` XAMPP
2. Buka XAMPP Control Panel dan start Apache
3. Buka browser dan akses: `http://localhost/website-hobi`

### Option 2: Menggunakan Live Server (VS Code)
1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Browser akan otomatis membuka website

### Option 3: Direct File
1. Double-click pada file `index.html`
2. Browser akan membuka file secara langsung

## ✅ Fitur JavaScript

### 1. Form Validation
- Validasi field kosong
- Validasi format email
- Success message dengan nama user

### 2. Smooth Navigation
- Smooth scroll saat klik nav link
- Active link indicator saat scroll
- Auto-collapse mobile menu saat klik link

### 3. Scroll Animations
- Fade-in effect saat cards masuk viewport
- Intersection Observer API
- Progressive animations

### 4. Scroll-to-Top Button
- Muncul setelah scroll 300px
- Smooth scroll ke atas
- Hover animations

### 5. Image Fallback
- SVG placeholder jika image tidak load
- Dynamic color berdasarkan index
- Graceful degradation

## 📝 Customization

### Mengubah Nama/Biodata
Edit di section `#tentang`:
```html
<h3 class="fw-bold mb-3">Ganti dengan nama Anda</h3>
<p class="mb-3">Ganti dengan biodata Anda...</p>
```

### Menambah Foto
1. Taruh foto di folder `images/`
2. Update `src` attribute di HTML:
```html
<img src="images/nama-foto.jpg" alt="Deskripsi">
```

### Mengubah Warna
Ubah CSS variables di `css/style.css`:
```css
:root {
    --primary-color: #FFD60A;      /* Ubah warna primary */
    --secondary-color: #FFC300;    /* Ubah warna secondary */
    --dark-color: #1a1a1a;         /* Ubah warna dark */
}
```

### Mengubah Trik
Edit section `#trik` untuk menambah atau mengubah trik skateboard

## 🎯 Checklist Tugas UTS

- ✅ Menggunakan AI (sebagaimana diminta)
- ✅ Web berbasis HOBI (Skateboarding)
- ✅ Menggunakan Bootstrap untuk styling responsif
- ✅ Foto-foto dan deskripsi related dengan hobi
- ✅ File lengkap: HTML, CSS, JS
- ✅ Responsive design untuk semua device
- ✅ Animasi dan interaksi yang menarik
- ✅ Form kontak dengan validasi
- ✅ Deployment ready (bisa langsung upload ke hosting)

## 📸 Screenshot Features

Berikut fitur-fitur visual:
- **Gradient Background** di hero section
- **Card Hover Effects** dengan transform & shadow
- **Smooth Transitions** di semua interaksi
- **Responsive Layout** yang beautiful di semua ukuran
- **Icon Animations** dengan Font Awesome
- **Form Validation** dengan user feedback

## 🐛 Browser Compatibility

Website kompatibel dengan:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips untuk Pengembangan Lebih Lanjut

1. **Tambah Backend**
   - Gunakan PHP/Node.js untuk handle form submission
   - Simpan data ke database

2. **Tambah Blog Section**
   - Share pengalaman dan tips skateboarding

3. **Tambah Video Gallery**
   - Embed video tricks dari YouTube

4. **Tambah Blog/Article**
   - Tips & tricks, equipment reviews, event coverage

5. **Dark Mode Toggle**
   - Tambah dark/light mode switcher

6. **Admin Panel**
   - Manage content, upload photos, etc.

## 📞 Kontak Support

Jika ada pertanyaan atau butuh bantuan:
- Email: skateboard@example.com
- Instagram: @skateboardlover
- YouTube: Skateboard Channel

## 📄 License

Free to use untuk keperluan tugas/pendidikan.

---

**Created with ❤️ for Skateboarding Enthusiasts**

Happy Skating! 🛹✨

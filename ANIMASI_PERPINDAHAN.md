# 🎬 Fitur Animasi Perpindahan Website

## Penjelasan Animasi Perpindahan

Website Skateboard Hobby Anda sekarang dilengkapi dengan sistem animasi perpindahan halaman yang sophisticated dan menarik!

### 📋 Jenis-Jenis Animasi

Setiap kali Anda mengklik tautan navigasi, website akan menampilkan salah satu dari **6 animasi perpindahan berbeda**:

#### 1. **Page Slide In Up** (Slide Naik)
- Section masuk dari bawah ke atas
- Efek: Smooth sliding dengan scale effect
- Timing: 0.7s dengan cubic-bezier animation

#### 2. **Page Slide In Down** (Slide Turun)
- Section masuk dari atas ke bawah
- Efek: Reverse dari slide up
- Timing: 0.7s smooth ease

#### 3. **Page Slide In Left** (Slide dari Kiri)
- Section masuk dari sisi kiri dengan rotasi 3D
- Efek: `rotateY(45deg)` untuk perspektif
- Timing: 0.7s dengan easing curve

#### 4. **Page Slide In Right** (Slide dari Kanan)
- Section masuk dari sisi kanan dengan rotasi 3D
- Efek: `rotateY(-45deg)` untuk kedalaman
- Timing: 0.7s smooth

#### 5. **Zoom In Page** (Zoom Masuk)
- Section membesar dari kecil ke ukuran normal
- Efek: Scale dari 0.9 ke 1 dengan rotasi
- Timing: 0.7s dengan smooth easing

#### 6. **Blur In Page** (Blur Masuk)
- Section muncul dengan efek blur yang hilang
- Efek: Dari blur(10px) menjadi blur(0)
- Timing: 0.7s untuk transisi halus

### 🎯 Cara Kerja

#### Transisi Perpindahan:
1. **Exit Animation** - Section sebelumnya fadeOut ke bawah (0.4s)
2. **Overlay Flash** - Golden gradient overlay muncul sebentar (0.2s)
3. **Smooth Scroll** - Halaman scroll smoothly ke section baru
4. **Entrance Animation** - Section baru masuk dengan salah satu dari 6 animasi (0.7s)
5. **Content Fade In** - Setiap elemen dalam section fade in secara bertahap

#### Progress Bar:
- Scroll progress bar berwarna gradient muncul di atas halaman
- Menunjukkan posisi scroll Anda saat ini
- Berwarna: Yellow → Gold → Blue dengan glow effect

### 💻 Fitur Teknis

```javascript
// 6 animasi yang berrotasi setiap perpindahan
const transitionAnimations = [
    'pageSlideInUp',
    'pageSlideInDown',
    'pageSlideInLeft',
    'pageSlideInRight',
    'zoomInPage',
    'blurInPage'
];
```

#### Staggered Content Animation:
- Setiap elemen konten di dalam section animate dengan delay
- Formula: `delay = index * 0.05s`
- Menciptakan efek cascade yang profesional

### 🎨 Visual Effects

**Transition Overlay:**
- Gradient linear dari #FFD60A ke #FFC300
- Opacity: 0 → 0.2 → 0 (flash effect)
- Z-index: 1000 (di atas semua konten)

**Inner Element Animation:**
- Setiap `<h2>`, `<p>`, `.hobby-card`, `.trick-card`, `.gallery-item` animate
- Animation: `fadeInUp 0.5s ease-out`
- Dengan staggered delays untuk efek cascade

### 📱 Responsive Behavior

- Mobile Menu otomatis close saat navigasi
- Semua animasi work smoothly di semua ukuran layar
- No animation lag atau jank

### ⚡ Performance

- GPU-accelerated transforms (translateY, scale, rotateY)
- Efficient opacity transitions
- Pointer events management untuk prevent click spam
- Smooth cubic-bezier easing curves

### 🎬 CSS Animations Definitions

Semua animasi didefinisikan dalam `css/style.css` di section:
```
/* ============= Page Transition Animations ============= */
```

Termasuk:
- `@keyframes fadeOutDown`
- `@keyframes pageSlideInUp`
- `@keyframes pageSlideInDown`
- `@keyframes pageSlideInLeft`
- `@keyframes pageSlideInRight`
- `@keyframes zoomInPage`
- `@keyframes blurInPage`

### 🔧 Customization

Untuk mengubah animasi, edit di `js/script.js`:

```javascript
// Ubah daftar animasi
const transitionAnimations = [
    'namaAnimasiBaru',
    // ... tambah atau kurangi sesuai kebutuhan
];

// Ubah durasi (default: 0.7s)
targetSection.style.animation = `${nextAnimation} 0.7s cubic-bezier(...) forwards`;

// Ubah timing function
// cubic-bezier(0.34, 1.56, 0.64, 1) = bouncy
// ease-out = smooth
// ease-in-out = balanced
```

### 🎓 Demo Animasi

Coba klik tautan navigasi berikut untuk melihat berbagai animasi:

1. **Beranda** → Klik "Tentang" = Page Slide Up
2. **Tentang** → Klik "Hobi Saya" = Page Slide Down
3. **Hobi Saya** → Klik "Galeri" = Page Slide Left
4. **Galeri** → Klik "Kontak" = Page Slide Right
5. **Kontak** → Klik "Beranda" = Zoom In atau Blur In

Setiap klik akan menampilkan animasi yang berbeda!

---

**Created:** November 2025
**Technology:** Vanilla JavaScript + CSS3 Animations
**Browser Support:** Semua browser modern (Chrome, Firefox, Safari, Edge)

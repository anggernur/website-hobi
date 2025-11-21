# 🎬 PANDUAN TESTING ANIMASI PERPINDAHAN

## Cara Testing Animasi Perpindahan Website

### 📱 Buka Website

**Option 1: Via XAMPP (Recommended)**
```
URL: http://localhost/website-hobi
```

**Option 2: Direct File**
```
File: C:\xampp\htdocs\website-hobi\index.html
Buka dengan browser (Chrome/Firefox/Safari/Edge)
```

**Option 3: Live Server**
```
Install extension Live Server di VS Code
Right-click index.html → Open with Live Server
```

---

## 🎯 Testing Sequence

### Test 1: Animasi Berbeda Setiap Klik
```
1. Buka website → Lihat Hero Section
2. Klik "Tentang" → Amati animasi MASUK (slide up)
3. Klik "Hobi Saya" → Amati animasi MASUK berbeda (slide down)
4. Klik "Galeri" → Amati animasi MASUK berbeda (slide left)
5. Klik "Kontak" → Amati animasi MASUK berbeda (slide right)
6. Klik "Beranda" → Amati animasi MASUK berbeda (zoom/blur)

✅ SUKSES: Setiap klik menampilkan animasi BERBEDA
```

### Test 2: Exit Animation
```
1. Buka website di section manapun
2. Klik link navigasi
3. Perhatikan section sebelumnya FadeOut ke bawah (0.4s)
4. Overlay golden muncul sebentar

✅ SUKSES: Exit animation terlihat smooth
```

### Test 3: Progress Bar
```
1. Buka website
2. Scroll halaman naik-turun
3. Amati scroll progress bar di atas halaman
4. Bar akan terisi sesuai posisi scroll

✅ SUKSES: Progress bar bergerak mengikuti scroll
```

### Test 4: Content Cascade Animation
```
1. Klik navigasi ke section baru
2. Lihat elemen-elemen masuk satu per satu:
   - Heading masuk dulu
   - Subtitle masuk kedua
   - Cards/content masuk dengan delay
3. Efek seperti domino yang indah

✅ SUKSES: Content fade in cascade dengan timing tepat
```

### Test 5: 3D Rotation Effects
```
1. Klik link yang menghasilkan "Slide In Left"
   → Section akan masuk dari kiri dengan perspektif 3D
   
2. Klik link yang menghasilkan "Slide In Right"
   → Section akan masuk dari kanan dengan perspektif 3D

✅ SUKSES: 3D rotation effects terlihat
```

### Test 6: Zoom & Blur Effects
```
1. Navigasi hingga animasi "Zoom In Page" muncul
   → Section akan membesar dengan rotasi
   
2. Navigasi hingga animasi "Blur In Page" muncul
   → Section akan muncul dari blur menghilang

✅ SUKSES: Zoom dan Blur effects berjalan
```

### Test 7: Responsive pada Mobile
```
1. Buka website di browser mobile (atau DevTools mobile mode)
2. Klik navigasi
3. Amati animasi berjalan smooth di layar kecil
4. Progress bar tampil dengan baik
5. Mobile menu auto-close saat navigasi

✅ SUKSES: Semua animasi responsive dan smooth
```

### Test 8: Browser Compatibility
```
Buka website di browser berbeda:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile Safari (iOS)
- ✅ Mobile Chrome (Android)

Setiap browser harus menampilkan animasi smooth!
```

---

## 🎨 Checklist Animasi Visual

Saat Anda klik navigasi, perhatikan hal-hal berikut:

### ✅ Exit Phase (Section Lama)
```
□ Section yang sedang ditampilkan FadeOut
□ Text/content menghilang bersamaan
□ Smooth translation ke bawah
□ Durasi: ±0.4 detik
```

### ✅ Transition Phase (Golden Flash)
```
□ Golden gradient (#FFD60A → #FFC300) muncul sebentar
□ Opacity: transparent → 20% → transparent
□ Sangat cepat (±0.2 detik)
□ Halus dan tidak mengganggu
```

### ✅ Scroll Phase
```
□ Page scroll smoothly ke section tujuan
□ Behavior: smooth scroll (bukan instant)
□ Tidak ada jerky movement
```

### ✅ Entrance Phase (Section Baru)
```
□ Section masuk dengan salah satu animasi:
  • Slide dari bawah (slideInUp)
  • Slide dari atas (slideInDown)
  • Slide dari kiri dengan 3D (slideInLeft)
  • Slide dari kanan dengan 3D (slideInRight)
  • Zoom membesar (zoomInPage)
  • Blur menghilang (blurInPage)
□ Durasi: ±0.7 detik
□ Smooth cubic-bezier easing
```

### ✅ Content Phase (Cascade Effect)
```
□ Heading (h2) fade in dulu
□ Subtitle/paragraph fade in berikutnya
□ Cards (.hobby-card, .trick-card) fade in bertahap
□ Gallery items fade in dengan delay
□ Efek: Smooth domino cascade
□ Total durasi: ±0.5 detik
```

---

## 🔍 Debugging (Jika Ada Masalah)

### Jika animasi tidak terlihat:
```javascript
// Cek di browser console (F12)
// 1. Buka Developer Tools (F12)
// 2. Pilih tab Console
// 3. Tidak boleh ada error merah
// 4. Ketik: document.getElementById('scrollProgress')
//    Harusnya muncul: <div id="scrollProgress" ...>
```

### Jika animasi terlihat jerky/lag:
```
1. Tutup tab/aplikasi lain yang berat
2. Refresh halaman (Ctrl+F5 untuk hard refresh)
3. Coba di browser lain
4. Cek GPU acceleration di browser settings
```

### Jika section tidak masuk dengan animasi:
```
Kemungkinan penyebab:
1. Cache browser - Clear cache (Ctrl+Shift+Delete)
2. CSS tidak loaded - Cek di DevTools → Network tab
3. JavaScript error - Cek Console tab di DevTools
```

---

## 📊 Animasi yang Diharapkan (Rotasi)

Setiap kali Anda klik navigasi, animasi akan berubah sesuai urutan ini:

```
Klik 1: pageSlideInUp        (Slide dari bawah)
Klik 2: pageSlideInDown      (Slide dari atas)
Klik 3: pageSlideInLeft      (Slide dari kiri 3D)
Klik 4: pageSlideInRight     (Slide dari kanan 3D)
Klik 5: zoomInPage           (Zoom membesar)
Klik 6: blurInPage           (Blur menghilang)
Klik 7: pageSlideInUp        (Kembali ke awal - cycle!)
... dan seterusnya berulang
```

**Perhatian:** Animasi akan berputar otomatis, jadi setiap 6 klik akan ke-reset!

---

## 🎁 Testing Fun Facts

1. **Fastest Way to See All Animations**
   ```
   Buka website, kemudian klik navigasi 6 kali berturut-turut dengan cepat!
   Anda akan melihat semua 6 animasi dalam waktu singkat.
   ```

2. **Scroll While Animating**
   ```
   Saat animasi section entrance, coba scroll up/down
   Anda akan lihat smooth interaction antara scroll dan animation
   ```

3. **Mobile Experience**
   ```
   Buka di mobile, animasi 3D (slide left/right) terlihat lebih spektakuler
   karena perspektif viewport yang lebih kecil
   ```

4. **Developer Mode**
   ```
   Buka DevTools (F12) → Performance tab
   Klik navigasi dan record performance
   Anda akan lihat animasi dipercepat GPU tanpa jank!
   ```

---

## ✨ Success Criteria

Animasi perpindahan dianggap **BERHASIL** jika:

- [✅] Setiap klik navigasi menampilkan animasi
- [✅] Animasi berbeda-beda setiap kalinya (6 jenis)
- [✅] Transisi smooth tanpa jerky movement
- [✅] Progress bar terlihat saat scroll
- [✅] Exit animation halus (fadeOutDown)
- [✅] Golden flash muncul sebentar
- [✅] Entrance animation sesuai
- [✅] Content fade in cascade
- [✅] Mobile menu auto close
- [✅] Work di semua browser modern
- [✅] Responsive di mobile/tablet/desktop
- [✅] No console errors

Jika semua ✅ terpenuhi, maka **SEMPURNA!** 🎉

---

**Tips Terbaik:** Gunakan Chrome atau Firefox untuk pengalaman terbaik!
**Catatan:** Durasi animasi bisa disesuaikan di `js/script.js` jika diperlukan.

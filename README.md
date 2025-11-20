# Website Hobi — Skate & Night Riding

Panduan singkat untuk tugas UTS: halaman ini menampilkan desain berbasis Bootstrap tentang hobi skate dan night riding.

Files created:

- `index.html` — halaman utama
- `css/style.css` — styling kustom
- `js/main.js` — script ringan (lightbox & smooth scroll)

Menjalankan secara lokal (XAMPP Windows):

1. Pastikan folder ini berada di `C:\xampp\htdocs\website-hobi` (sudah sesuai jika Anda membuka workspace ini).
2. Foto: halaman ini sudah menggunakan gambar dinamis dari Unsplash (via `source.unsplash.com`). Jika ingin menggunakan gambar lokal, buat folder `images/` dan letakkan file dengan nama yang relevan.
   - Contoh nama lokal: `photo1.jpg`, `photo1-thumb.jpg` (thumbnail kecil), dst.
   - Untuk menggunakan gambar lokal, buka `index.html` dan ganti nilai `data-bs-img` dan `src` pada elemen galeri dengan path lokal, mis. `images/photo1.jpg`.
3. Buka XAMPP Control Panel dan jalankan `Apache`.
4. Akses situs di browser: `http://localhost/website-hobi/index.html`.

Download gambar contoh otomatis:

Jika ingin menyimpan gambar Unsplash secara lokal (agar tidak bergantung ke koneksi saat presentasi), jalankan skrip PowerShell berikut dari folder proyek:

```powershell
cd C:\xampp\htdocs\website-hobi
.\download-images.ps1
```

Skrip akan membuat folder `images/` (jika belum ada) dan mengunduh beberapa gambar contoh beserta thumbnail ke folder itu. Setelah selesai, buka `index.html` dan ganti URL gambar (jika perlu) dari `https://source.unsplash.com/...` menjadi `images/photo1.jpg` atau `images/photo1-thumb.jpg`.

Catatan & kustomisasi:
- Ganti `youremail@example.com` di form kontak dengan email Anda.
- Ganti atau tambahkan foto di `images/` dan update nama file di `index.html` jika perlu.
- Jika ingin hosting publik, upload seluruh folder ke hosting (public_html atau www) atau gunakan GitHub Pages / Netlify.

Butuh bantuan menambahkan gambar contoh atau mengubah teks? Beri tahu saya, saya bantu sesuaikan.

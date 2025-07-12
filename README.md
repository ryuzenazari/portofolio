# Portfolio Nio - Frontend Only

Portfolio website untuk Diha Anfeu Nio Julaynda menggunakan Next.js dengan App Router, TypeScript, Tailwind CSS v4, dan Framer Motion.

## Tech Stack

- **Next.js 15.3.5** (App Router)
- **TypeScript**
- **Tailwind CSS v4.1.11**
- **Framer Motion** (untuk animasi)

## Fitur

- 📱 Desain responsif dengan pendekatan mobile-first
- 🎨 UI modern dengan tema warna biru (#2563EB) dan oranye (#F97316)
- ⚡ Performa optimal dengan Next.js App Router
- 🔍 SEO-friendly dengan metadata yang lengkap
- ♿ Aksesibilitas yang baik dengan struktur heading yang tepat
- 🌙 Dukungan mode gelap (dark mode)

## Struktur Proyek

```
portfolio-nio/
├── public/           # Aset statis (gambar, favicon, dll)
├── src/
│   ├── app/          # Halaman aplikasi (Next.js App Router)
│   │   ├── about/    # Halaman About
│   │   ├── contact/  # Halaman Contact
│   │   ├── experience/ # Halaman Experience
│   │   ├── projects/ # Halaman Projects (placeholder)
│   │   ├── skills/   # Halaman Skills
│   │   ├── layout.tsx # Layout utama aplikasi
│   │   └── page.tsx  # Halaman Home
│   ├── components/   # Komponen yang dapat digunakan kembali
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilitas dan fungsi helper
│   ├── sections/     # Bagian-bagian halaman yang lebih besar
│   ├── types/        # Type definitions TypeScript
│   └── utils/        # Fungsi utilitas
├── tailwind.config.js # Konfigurasi Tailwind CSS
├── next.config.ts    # Konfigurasi Next.js TypeScript
├── next.config.js    # Konfigurasi Next.js JavaScript
└── package.json      # Dependensi dan scripts
```

## Halaman

- **Home (/)**: Hero section, tagline, dan CTA ke Contact
- **About (/about)**: Profil singkat dan latar belakang
- **Experience (/experience)**: Ringkasan aktivitas organisasi
- **Skills (/skills)**: Tech stack dengan logo/ikon
- **Projects (/projects)**: Placeholder untuk proyek (akan diisi sendiri)
- **Contact (/contact)**: Form kontak dengan validasi dan tombol copy email

## Instalasi dan Penggunaan

### Prasyarat

- Node.js versi 18.17.0 atau lebih tinggi
- pnpm (direkomendasikan) atau npm

### Langkah Instalasi

1. Clone repositori ini

```bash
git clone <repository-url>
cd portfolio-nio
```

2. Install dependensi

```bash
pnpm install
# atau
npm install
```

3. Jalankan server pengembangan

```bash
pnpm dev
# atau
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya

### Build untuk Production

```bash
pnpm build
# atau
npm run build
```

## Dependensi Utama

- **next**: Framework React untuk produksi
- **react**: Library UI
- **react-dom**: React renderer untuk DOM
- **framer-motion**: Library animasi untuk React
- **tailwindcss**: Framework CSS utility-first
- **typescript**: Superset JavaScript dengan tipe statis
- **eslint**: Linter untuk JavaScript/TypeScript

## Kustomisasi

Untuk mengubah tema warna, edit file `tailwind.config.js` dan ubah nilai di bagian `theme.extend.colors`.

## Lisensi

Dibuat untuk Diha Anfeu Nio Julaynda.

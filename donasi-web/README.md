# Ruang Peduli — Web Open Donasi

Prototype Next.js responsive dan siap deploy ke Vercel. Foto utama campaign berada di `public/rafy-hero.png`.

## Menjalankan lokal
```bash
npm install
npm run dev
```
Buka `http://localhost:3000`.

## Build production
```bash
npm run build
npm start
```

## Deploy ke Vercel
### Via GitHub
1. Extract project dan push ke repository GitHub.
2. Di Vercel pilih **Add New > Project**.
3. Import repository tersebut.
4. Vercel akan mendeteksi Next.js otomatis.
5. Klik **Deploy**.

### Via Vercel CLI
```bash
npm i -g vercel
vercel
vercel --prod
```

## Sebelum menerima donasi nyata
UI pembayaran masih demo. Untuk production perlu payment gateway (mis. Midtrans/Xendit), database transaksi, webhook pembayaran, autentikasi/admin, verifikasi campaign/rekening, kebijakan privasi, syarat penggunaan, dan mekanisme audit/refund yang sesuai.

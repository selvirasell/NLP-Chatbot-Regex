# 🏠 NLP Chatbot Kosan (Telegram)

hatbot sederhana berbasis **Node.js** untuk membantu penghuni kos dengan aturan, jadwal, dan informasi fasilitas.  
Bot ini bisa dijalankan via **CLI** dan terintegrasi dengan **Telegram Bot API**.   

---

## 📦 Setup

### 1. Clone Repository
```bash
git clone https://github.com/selvirasell/NLP-Chatbot-Regex.git
cd NLP-Chatbot-Regex
```

### 2. Install Dependencies
Gunakan Node.js (v16+).
```bash
npm install
```

### 3. Konfigurasi Environment
Buat file `.env` di root proyek berdasarkan `.env.example`.  
**Jangan commit token asli ke GitHub!**

`.env.example`
```env
TELEGRAM_BOT_TOKEN=your-telegram-bot-token-here
```

---

## ▶️ Cara Menjalankan

### CLI (untuk uji coba cepat)
```bash
node src/cli.js
```
Contoh:
```
> halo
Halo! Saya Bot Penjaga Kos 🏠. Ketik 'help' untuk lihat aturan kos.
```

### Telegram
1. Buat bot via **@BotFather** di Telegram.
2. Dapatkan API token, isi ke `.env`.
3. Jalankan bot:
   ```bash
   node src/telegram-kosan.js
   ```
4. Buka Telegram → cari username bot → mulai chat.

---

## 🧪 Testing

Proyek ini menggunakan bawaan **Node.js test runner** (`node:test`).  

### Jalankan test
```bash
node --test
```

### Contoh hasil
```
✔ menyapa dengan halo
✔ menampilkan daftar help
✔ jam gerbang
✔ aturan tamu
✔ biaya kos
✔ wifi kos
✔ listrik kos
✔ aturan umum kos
✔ pertanyaan tidak dikenal

Test 9 passed
```



---

## 📑 Contoh Log
`logs/bot.log`
```
[2025-09-10 15:22:01] User: halo
[2025-09-10 15:22:01] Bot : Halo! Saya Bot Penjaga Kos 🏠. Ketik 'help' untuk lihat aturan kos.
[2025-09-10 15:23:14] User: biaya
[2025-09-10 15:23:14] Bot : Biaya kos per bulan adalah Rp750.000 (sudah termasuk listrik & air).
[2025-09-10 15:24:07] User: wifi
[2025-09-10 15:24:07] Bot : WiFi kos tersedia. SSID: KosanIndah, Password: rahasia123
```

---

## 📸 Demo
- CLI Demo:
  ```
  > help
  Daftar pertanyaan yang bisa kamu coba:
  - halo
  - jam gerbang
  - biaya kos
  - aturan kos
  ```
- Telegram Demo: *(tambahkan screenshot chat bot di Telegram)*  

---

## 👩‍💻 Kontributor
- **Nama**: Aisa Selvira Quraata A’yunni  
- **NIM**: 22/498561/TK/54690  
- **Program Studi**: Teknologi Informasi  

---

import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';

// Ambil token dari .env
const token = process.env.TELEGRAM_TOKEN;
if (!token) {
    console.error("❌ TELEGRAM_TOKEN tidak ditemukan di .env");
    process.exit(1);
}

// Rules chatbot
export const rules = [
    // Sapaan
    { pattern: /^(hi|halo|hello|hey|ass?alamualaikum)$/i, reply: "Halo! Saya Bot Penjaga Kos 🏠. Ketik 'help' untuk lihat aturan kos." },

    // Menu bantuan
    {
        pattern: /^help$/i, reply:
            `📋 Daftar pertanyaan yang bisa kamu coba:
- jam gerbang
- boleh bawa tamu
- biaya bulanan
- wifi
- listrik
- aturan umum
- dapur
- parkir
- sampah
- laundry
- denda telat
- kontak penjaga`
    },

    // Aturan utama
    { pattern: /jam (gerbang|tutup|malam)/i, reply: "Gerbang kos ditutup pukul 23:00 WIB dan dibuka kembali pukul 05:00 WIB. 🚪" },
    { pattern: /tamu/i, reply: "Tamu hanya boleh berkunjung sampai pukul 21:00 WIB, tidak boleh menginap 🙅‍♂️. Tamu lawan jenis tidak boleh masuk kamar." },
    { pattern: /(biaya|bayar|tagihan|harga)/i, reply: "Biaya kos bulan ini Rp750.000 (sudah termasuk listrik & air). Bayar sebelum tanggal 10 tiap bulan. 💰" },
    { pattern: /wifi/i, reply: "Wifi kos: SSID = KOS_FREE_WIFI, Password = kosan123 🔑. Harap jangan ganti password!" },
    { pattern: /listrik/i, reply: "Token listrik sudah termasuk biaya kos. Jika mati, hubungi penjaga kos. ⚡" },

    // Tambahan detail
    {
        pattern: /aturan/i, reply:
            `📌 Aturan umum kos:
1. Tidak boleh merokok di dalam kamar 🚭
2. Jaga kebersihan kamar & fasilitas bersama 🙌
3. Hargai teman sekosan 🤝
4. Tidak boleh memelihara hewan peliharaan 🐶🐱
5. Jam tenang mulai pukul 22:00 WIB 🌙` },

    { pattern: /dapur/i, reply: "Dapur bersama boleh digunakan dari pukul 05:00–22:00 WIB. Harap mencuci peralatan setelah dipakai 🍳." },
    { pattern: /parkir/i, reply: "Parkir motor gratis 🏍️. Parkir mobil terbatas, biaya tambahan Rp200.000/bulan 🚗." },
    { pattern: /sampah/i, reply: "Sampah dikumpulkan di depan kamar setiap pukul 07:00 pagi. Harap dipisahkan organik & non-organik 🗑️." },
    { pattern: /laundry/i, reply: "Laundry tersedia di dekat kos dengan tarif Rp7.000/kg 👕." },
    { pattern: /(telat|denda)/i, reply: "Jika pembayaran telat lebih dari tanggal 10, dikenakan denda Rp50.000. ⏰" },
    { pattern: /(kontak|penjaga)/i, reply: "Hubungi Pak Budi (Penjaga Kos) di nomor: 08xx-xxxx-xxxx 📱." }
];

// Fungsi respon
export function respond(input) {
    for (const rule of rules) {
        if (rule.pattern.test(input)) {
            return rule.reply;
        }
    }
    return "Hmm... saya tidak mengerti. Ketik 'help' untuk daftar aturan kos.";
}

// Inisialisasi bot
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    console.log("📩 Pesan diterima:", msg.text);
    const chatId = msg.chat.id;
    const text = msg.text?.trim().toLowerCase() || '';
    const reply = respond(text);
    bot.sendMessage(chatId, reply);
});

console.log("🤖 Bot Penjaga Kos aktif di Telegram!");

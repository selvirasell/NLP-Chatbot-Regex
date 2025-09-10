import { strict as assert } from 'assert';
import test from 'node:test';
import { respond } from '../src/telegram-kosan.js';

test('menyapa dengan halo', () => {
    assert.equal(respond('halo'), "Halo! Saya Bot Penjaga Kos 🏠. Ketik 'help' untuk lihat aturan kos.");
});

test('menampilkan daftar help', () => {
    assert.match(respond('help'), /Daftar pertanyaan/);
});

test('jam gerbang', () => {
    assert.match(respond('jam gerbang'), /23:00/);
});

test('aturan tamu', () => {
    assert.match(respond('tamu'), /tidak boleh menginap/);
});

test('biaya kos', () => {
    assert.match(respond('biaya'), /Rp750.000/);
});

test('wifi kos', () => {
    assert.match(respond('wifi'), /SSID/i);
});

test('listrik kos', () => {
    assert.match(respond('listrik'), /Token listrik/);
});

test('aturan umum kos', () => {
    const reply = respond('aturan');
    assert.match(reply, /Tidak boleh merokok/);
    assert.match(reply, /Jaga kebersihan/);
    assert.match(reply, /Hargai teman/);
});

test('pertanyaan tidak dikenal', () => {
    assert.match(respond('abcxyz'), /tidak mengerti/);
});

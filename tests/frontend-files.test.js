const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const frontendDir = path.join(__dirname, '..', 'frontend');

test('index page exists', () => {
  assert.equal(fs.existsSync(path.join(frontendDir, 'index.html')), true);
});

test('booking page exists', () => {
  assert.equal(fs.existsSync(path.join(frontendDir, 'booking.html')), true);
});

test('admin page exists', () => {
  assert.equal(fs.existsSync(path.join(frontendDir, 'admin.html')), true);
});

test('booking JavaScript exists', () => {
  assert.equal(fs.existsSync(path.join(frontendDir, 'script.js')), true);
});

test('booking stylesheet exists', () => {
  assert.equal(fs.existsSync(path.join(frontendDir, 'style.css')), true);
});

test('index page contains Campus Room Booking', () => {
  const content = fs.readFileSync(
    path.join(frontendDir, 'index.html'),
    'utf8'
  );

  assert.match(content, /Campus Room Booking/i);
});
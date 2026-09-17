const test = require('node:test');
const assert = require('node:assert/strict');

const {
  getDurationInMinutes,
  formatStatus
} = require('../frontend/script.js');

test('calculates a 2-hour booking correctly', () => {
  assert.equal(getDurationInMinutes('10:00', '12:00'), 120);
});

test('calculates a 3-hour booking correctly', () => {
  assert.equal(getDurationInMinutes('09:00', '12:00'), 180);
});

test('calculates a 90-minute duration correctly', () => {
  assert.equal(getDurationInMinutes('14:30', '16:00'), 90);
});

test('formats pending status correctly', () => {
  assert.equal(formatStatus('pending'), 'Pending');
});

test('formats approved status correctly', () => {
  assert.equal(formatStatus('approved'), 'Approved');
});

test('formats rejected status correctly', () => {
  assert.equal(formatStatus('rejected'), 'Rejected');
});
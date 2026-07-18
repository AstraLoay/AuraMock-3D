const test = require('node:test');
const assert = require('node:assert/strict');
const { escapeHTML, isBackupShape, sanitizeFilename } = require('../core-utils.js');

test('escapeHTML neutralizes markup and attributes', () => {
    assert.equal(
        escapeHTML('<img src=x onerror="alert(1)">'),
        '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;'
    );
});

test('backup validation accepts stores containing object records', () => {
    assert.equal(isBackupShape({ projects: [{ id: 'one' }], meta: [] }), true);
    assert.equal(isBackupShape({ projects: 'invalid' }), false);
    assert.equal(isBackupShape([]), false);
    assert.equal(isBackupShape({ projects: [null] }), false);
});

test('sanitizeFilename removes reserved filesystem characters', () => {
    assert.equal(sanitizeFilename(' My: Project / EN '), 'My- Project - EN');
    assert.equal(sanitizeFilename('...'), 'export');
});

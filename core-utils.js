(function exposeAuraMockCore(global) {
    function escapeHTML(value) {
        return String(value ?? '')
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
    }

    function isBackupShape(value) {
        if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
        return Object.values(value).every(records =>
            Array.isArray(records) &&
            records.every(record => record && typeof record === 'object' && !Array.isArray(record))
        );
    }

    function sanitizeFilename(value, fallback = 'export') {
        const clean = String(value ?? '')
            .replace(/[<>:"/\\|?*\u0000-\u001F]/g, '-')
            .replace(/\s+/g, ' ')
            .replace(/[. ]+$/g, '')
            .trim()
            .slice(0, 120);
        return clean || fallback;
    }

    const api = { escapeHTML, isBackupShape, sanitizeFilename };
    global.AuraMockCore = api;
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(globalThis);

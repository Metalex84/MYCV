function _0x4a7c(_0x5df99d, _0xd555d6) { var _0x20f737 = _0x20f7(); return _0x4a7c = function (_0x4a7c69, _0x322beb) { _0x4a7c69 = _0x4a7c69 - 0xd6; var _0x7297b4 = _0x20f737[_0x4a7c69]; return _0x7297b4; }, _0x4a7c(_0x5df99d, _0xd555d6); } function _0x20f7() { var _0x324f16 = ['.tooltip', '77BpRhau', '166689SazKnt', '875236oIGtVH', '569484qVuzPL', '4777333VvTZxF', '15KwXtBc', 'tooltip', 'hide', '408656JdfEpG', '3cMqACk', '[data-toggle=\x22tooltip\x22]', '130UXKmOM', '910737iwNXRD', '1904634unuIst']; _0x20f7 = function () { return _0x324f16; }; return _0x20f7(); } (function (_0x276adc, _0x4acaba) { var _0x4d9571 = _0x4a7c, _0x2b3ece = _0x276adc(); while (!![]) { try { var _0x1fa49b = -parseInt(_0x4d9571(0xdb)) / 0x1 + parseInt(_0x4d9571(0xe1)) / 0x2 * (parseInt(_0x4d9571(0xd8)) / 0x3) + -parseInt(_0x4d9571(0xe0)) / 0x4 * (-parseInt(_0x4d9571(0xe3)) / 0x5) + -parseInt(_0x4d9571(0xdc)) / 0x6 + -parseInt(_0x4d9571(0xde)) / 0x7 * (-parseInt(_0x4d9571(0xd7)) / 0x8) + parseInt(_0x4d9571(0xdf)) / 0x9 * (-parseInt(_0x4d9571(0xda)) / 0xa) + parseInt(_0x4d9571(0xe2)) / 0xb; if (_0x1fa49b === _0x4acaba) break; else _0x2b3ece['push'](_0x2b3ece['shift']()); } catch (_0xa0fb33) { _0x2b3ece['push'](_0x2b3ece['shift']()); } } }(_0x20f7, 0x725c9), $(document)['ready'](function () { var _0x3f6ee6 = _0x4a7c; $(_0x3f6ee6(0xd9))['tooltip'](); })); function toolTipReset() { var _0x4dcb0d = _0x4a7c; $(_0x4dcb0d(0xdd))[_0x4dcb0d(0xe4)](_0x4dcb0d(0xd6)); }

const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

// Añade un evento de clic al botón
toggleButton.addEventListener('click', function() {
    // Alterna la clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');

    // Cambia el botón dependiendo del modo actual
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="toggle-dark-mode" checked><label class="form-check-label" for="toggle-dark-mode"><p class="page-subtitle">Modo oscuro</p></label></div>';
    } else {
        toggleButton.innerHTML = '<div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="toggle-dark-mode"><label class="form-check-label" for="toggle-dark-mode"><p class="page-subtitle.dark-mode">Modo claro</p></label></div>';
    }

    const pageTitle = document.querySelector('.page-title');
    pageTitle.classList.toggle('dark-mode');
    
    const pageSubtitle = document.querySelectorAll('.page-subtitle');
    pageSubtitle.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    const bioBlock = document.querySelectorAll('.bio-block');
    bioBlock.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    const sectionHeading = document.querySelectorAll('.section-heading');
    sectionHeading.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    const cardTitle = document.querySelectorAll('.card-title');
    cardTitle.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    const cardText = document.querySelectorAll('.card-text');
    cardText.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    const keywordMagnet = document.querySelectorAll('.keyword-magnet');
    keywordMagnet.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    const li = document.querySelectorAll('li');
    li.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    const sectionSubheading = document.querySelectorAll('.section-subheading');
    sectionSubheading.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    const sectionSmallHeading = document.querySelectorAll('.section-small-heading');
    sectionSmallHeading.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    const copyrightText = document.querySelector('.copyright-text');
    copyrightText.classList.toggle('dark-mode');

    const link = document.querySelectorAll('.link');
    link.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    const hrSeparator = document.querySelectorAll('.hr-separator');
    hrSeparator.forEach(element => {
        element.classList.toggle('dark-mode');
    });

});

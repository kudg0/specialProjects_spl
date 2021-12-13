//= include '_base.js'

if (document.readyState === 'loading') {
  configOfEventListeners(false, {
    target: window,
    type: 'load',
    func: initJs,
  });
} else {
  initJs();
}

function initJs() {
  // Тут начинается твой js-код
}

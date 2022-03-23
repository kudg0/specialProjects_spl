// Код для работы контроля анимации, если элемент не находится во вьюпорте, ему анимация ставится на паузу

(function() {
  let animationItems = [...document.querySelectorAll('[data-animation]')];

  /*
    Собираем все элементы, выделенные data attribute 'data-animation', и проверяем их вхождение в viewport с помощью IntersectionObserver API
    С помощью класса inView добавляем поведение описанное в css свойствах элемента, в дефолтном кейсе – запуск/остановка анимации
  */

  if (window['IntersectionObserver']) {
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05,
    };
    var callback = function(entries, observer) {
      entries.forEach((item) => {
        if (
          item.isIntersecting &&
          !item.target.classList.contains('inView') &&
          !body.classList.contains('popupOpen')
        ) {
          item.target.classList.add('inView');

          item.target.style.animationPlayState = 'running';
        } else {
          item.target.classList.remove('inView');
          item.target.style.animationPlayState = 'paused';
        }
      });
    };
    var observer = new IntersectionObserver(callback, options);

    animationItems.forEach((animationItem) => {
      observer.observe(animationItem);
    });
  } else {
    // Если браузер не поддерживаем IntersectionObserver API, то просто включаем анимацию на всех элементах

    animationItems.forEach((animationItem) => {
      animationItem.classList.add('inView');

      animationItem.style.animationPlayState = 'playing';
    });
  }
})();

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    'phone': 'Phone',
    'message': 'Message',
    'email': 'E-mail'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    'phone': 'Телефон',
    'message': 'Сообщение',
    'email': 'Электронная почта'
  }
};

function toggleMenu() {
  navList.classList.toggle('open');
  hamburger.classList.toggle('openBurger');
  spanLine.forEach((item) => item.classList.toggle('open-line'));
};

function closeMenu() {
  navList.classList.remove('open');
  hamburger.classList.remove('openBurger');
  spanLine.forEach((item) => item.classList.remove('open-line'));
};

const hamburger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
hamburger.addEventListener('click', toggleMenu);

const itemSkills = document.querySelector('.nav-item-skills');
itemSkills.addEventListener('click', closeMenu);

const itemPortfolio = document.querySelector('.nav-item-portfolio');
itemPortfolio.addEventListener('click', closeMenu);

const itemVideo = document.querySelector('.nav-item-video');
itemVideo.addEventListener('click', closeMenu);

const itemPrice = document.querySelector('.nav-item-price');
itemPrice.addEventListener('click', closeMenu);

const itemContacts = document.querySelector('.nav-item-contacts');
itemContacts.addEventListener('click', closeMenu);
//------------------------------------------------------------------------------------//
const portfolioBtns = document.querySelector('.weather-container');
const portfolioImages = document.querySelectorAll('.portfolio-img');
const portfolioBtnsArray = document.querySelectorAll('.portfolio-btn');

portfolioBtns.addEventListener('click', (event) => {
  if (event.target.classList.contains('portfolio-btn')) {
      changeActive(portfolioBtnsArray, 'active', event)
      portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    }
});

function changeActive(listButtons, active, event) {
  listButtons.forEach((btn) => btn.classList.remove(active));
  event.target.classList.add(active);
}
//------------------------------------------------------------------------------------//
const languages = document.querySelector('.language-container');
const languagesArray = document.querySelectorAll('.span-lang');

languages.addEventListener('click', (event) => {
  if (event.target.classList.contains('span-lang')) {
      langStorage = event.target.innerHTML;
      changeActive(languagesArray, 'active-lang', event);
      getTranslate(langStorage);
    }
});

function getTranslate(lang) {
  const textBase = document.querySelectorAll('[data-i18]');
  textBase.forEach((elementText) => {
      if (elementText.placeholder) {
          elementText.placeholder = i18Obj[lang][elementText.dataset.i18];
          elementText.textContent = ''
        }
      elementText.textContent = i18Obj[lang][elementText.dataset.i18];
  })
}

//------------------------------------------------------------------------------------//
function toggleTheme() {
changeTheme.classList.toggle('light-sun');
lineTitleArray.forEach((item) => item.classList.toggle('light-line'));
changeThemesArray.forEach((item) => item.classList.toggle('light-theme'));
navList.classList.toggle('white');
navLink.classList.toggle('white');
spanLine.forEach((item) => item.classList.toggle('white'));
if (navLink.classList.contains('white')) {
  themeStorage = 'light';
} else themeStorage = 'dark';
};

const changeThemesArray = document.querySelectorAll('.change-theme, .black-buttons');
const lineTitleArray = document.querySelectorAll('.section-container-title');
const changeTheme = document.querySelector('.theme-container');
const navLink = document.querySelector('.nav-link');
const spanLine = document.querySelectorAll('.span-line1, .span-line3');
changeTheme.addEventListener('click', toggleTheme);
//------------------------------------------------------------------------------------//

let langStorage = 'en';
let themeStorage = 'dark';

function setLocalStorage() {
localStorage.setItem('langStorage', langStorage);
localStorage.setItem('themeStorage', themeStorage);
};
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
if(localStorage.getItem('langStorage')) {
  langStorage = localStorage.getItem('langStorage');
  getTranslate(langStorage);
}
if(localStorage.getItem('themeStorage')) {
  themeStorage = localStorage.getItem('themeStorage');
  if (themeStorage === 'light') {
    toggleTheme();
  }
}
}
window.addEventListener('load', getLocalStorage)


function preloadWeatherImages(portfolioBtnsArray, portfolioImages) {
  portfolioBtnsArray.forEach((btn) => {
      for (let i = 1; i <= portfolioImages.length; i++) {
          const img = new Image();
          img.src = `./assets/img/${btn.dataset.season}/${i}.jpg`;
        }
  })
}

preloadWeatherImages(portfolioBtnsArray, portfolioImages);



// video functional!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// elements
const controls = document.querySelector('.controls')
const videoContainer = document.querySelector('.video-player');
const video = document.querySelector('.video-view');
const videoPlayerBtn = document.querySelector('.video-player-button');
const playBtn = document.querySelector('.play-button');
const imgVideoPlayerButton = document.querySelector('.img-video-player-button');
const ranges = document.querySelector('.volume-range');
const progressBar = document.querySelector('.progress');
const volumeBtn = document.querySelector('.volume-button');
const circle = document.querySelector('.circle');
const body = document.querySelector('body');

video.volume = ranges.value;
let volumeLoud = video.volume;

// functions
function togglePlay() {
  controls.classList.add('controls-play');
  videoPlayerBtn.classList.add('video-player-button-play');
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateBtn() {
  if (!video.paused) {
      playBtn.style.backgroundImage = 'url(assets/svg/pause.svg)';
      imgVideoPlayerButton.style.display = 'none';
  } else {
      playBtn.style.backgroundImage = 'url(assets/svg/play.svg)';
      imgVideoPlayerButton.style.display = 'block';
  }
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  volumeLoud = this.value;
  video.volume === 0 ? volumeBtn.classList.add('offVolume') : volumeBtn.classList.remove('offVolume');
}

function handleProgress() {
  let percent = (video.currentTime / video.duration) * 100;
  progressBar.value = percent;
  circle.style.left = `${progressBar.offsetWidth * percent / 100 - 10}px`

}

function scrub(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  circle.style.left = `${e.offsetX-10}px`;
}

function updateVolumeBtn() {
  volumeBtn.classList.toggle('offVolume');
  if (volumeBtn.classList.contains('offVolume')) {
      video.volume = 0;
      ranges.value = 0;
  } else {
      video.volume = volumeLoud;
      ranges.value = volumeLoud;
  } 
}

// listener
videoPlayerBtn.addEventListener('click', togglePlay);
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
ranges.addEventListener('change', handleRangeUpdate);
ranges.addEventListener('mousemove', handleRangeUpdate);
video.addEventListener('timeupdate', handleProgress);

let mouseDown = false;
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progressBar.addEventListener('mousedown', () => mouseDown = true);

circle.addEventListener('mousedown', () => mouseDown = true);
body.addEventListener('mouseup', () => mouseDown = false);

volumeBtn.addEventListener('click', updateVolumeBtn)

console.log('1. Смена изображений в секции portfolio +25 \n 2. Перевод страницы на два языка +25 \n 3. Переключение светлой и тёмной темы +25 \n 4. Дополнительный функционал - выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5');
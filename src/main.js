// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const phoneInput = document.getElementById('phone-mask');
const maskOptions = {
  mask: '+7 (000) 000-00-00',
  lazy: true,
  placeholderChar: '_'
};
const mask = IMask(phoneInput, maskOptions);

const form = document.getElementById('form');

const PHONE_FULL = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(fieldName, message) {
  const wrapper = form.querySelector(`[data-field="${fieldName}"]`);
  if (!wrapper) return;
  const input = wrapper.querySelector('.input__el, [type="checkbox"]');
  const errorEl = wrapper.querySelector('.input__error');
  if (input) input.setAttribute('aria-invalid', 'true');
  if (errorEl) errorEl.textContent = message;
  wrapper.classList.add('input--invalid');
}

function clearError(fieldName) {
  const wrapper = form.querySelector(`[data-field="${fieldName}"]`);
  if (!wrapper) return;
  const input = wrapper.querySelector('.input__el, [type="checkbox"]');
  const errorEl = wrapper.querySelector('.input__error');
  if (input) input.removeAttribute('aria-invalid');
  if (errorEl) errorEl.textContent = '';
  wrapper.classList.remove('input--invalid');
}

function validateForm() {
  let valid = true;
  const phone = (mask.unmaskedValue || '').trim();
  const name = (form.name?.value || '').trim();
  const email = (form.email?.value || '').trim();
  const policy = form.policy?.checked ?? false;

  clearError('phone');
  clearError('name');
  clearError('email');
  clearError('policy');

  if (!phone || phone.length < 10 || !PHONE_FULL.test(mask.value)) {
    showError('phone', 'Введите корректный номер телефона');
    valid = false;
  }

  if (!name) {
    showError('name', 'Укажите ваше имя');
    valid = false;
  }

  if (!email) {
    showError('email', 'Укажите e-mail');
    valid = false;
  } else if (!EMAIL.test(email)) {
    showError('email', 'Введите корректный e-mail');
    valid = false;
  }

  if (!policy) {
    showError('policy', 'Необходимо согласие с политикой');
    valid = false;
  }

  return valid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  // Здесь можно отправить данные на сервер
  console.log('Форма валидна:', {
    phone: mask.value,
    name: form.name?.value,
    email: form.email?.value,
    company: form.company?.value,
    policy: form.policy?.checked
  });
});

// Сбрасывать ошибку при вводе
form.querySelectorAll('.input__el, [name="policy"]').forEach((el) => {
  el.addEventListener('input', () => clearError(el.closest('[data-field]')?.dataset?.field || ''));
  el.addEventListener('change', () => clearError(el.closest('[data-field]')?.dataset?.field || ''));
});


if(window.innerWidth <= 991) {
  const swiper = new Swiper('.tarif__content', {
    slidesPerView: 1.5,
    spaceBetween: 10,
  });
}

if(window.innerWidth < 1024) {
  const tarifsSlider = new Swiper('.tarif__content', {
    spaceBetween: 10,
    breakpoints: {
     320: {
       slidesPerView: 1.5,
     },
     768: {
       slidesPerView: 2.2,
     }
    }
 })

 const slider = new Swiper('.rang__slider', {
  slidesPerView: 1.2,
 })
}

// const
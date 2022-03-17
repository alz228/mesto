const bodyClass = document.querySelector('.page');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formSubmit = document.querySelector('.edit-form');
const profileInfoButton = document.querySelector('.profile__info-button');
const popupMain = document.querySelector('.popup_theme_profile');
const closeButton = document.querySelector('.popup__close');
const closeButtonAddCard = document.querySelector('.popup__close_theme_add-card');
const name = document.querySelector('.edit-form__input_textvalue_name');
const description = document.querySelector('.edit-form__input_textvalue_description');
const addButton = document.querySelector('.profile__add-button');
const popupMesto = document.querySelector('.popup_theme_add');
const AddButtonSubmit = document.querySelector('.edit-form__button-save_theme_add');
const placeValue = document.querySelector('.edit-form__input_textvalue_place');
const imageValue = document.querySelector('.edit-form__input_textvalue_image');
const createElement = document.querySelector('#create-element').content;
const userElement = createElement.querySelector('.create-element').cloneNode(true);
const sectionElements = document.querySelector('.elements'); // СЕКЦИЯ ДЛЯ ЭЛЕМЕНТОВ

const initialCards = [
   {
      placeName: 'Архыз',
      placeLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   {
      placeName: 'Челябинская область',
      placeLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   {
      placeName: 'Иваново',
      placeLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },
   {
      placeName: 'Камчатка',
      placeLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },
   {
      placeName: 'Холмогорский район',
      placeLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },
   {
      placeName: 'Байкал',
      placeLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   }
];

initialCards.forEach(addcard);

function popupOpen() {
   popupMain.classList.remove('popup_hide');
   name.value = profileName.textContent;
   description.value = profileDescription.textContent;
}

profileInfoButton.addEventListener('click', popupOpen);

function popupClose() {
   popupMain.classList.add('popup_hide');
}

closeButton.addEventListener('click', popupClose);

function popupOpenAddCard() {
   popupMesto.classList.remove('popup_hide');
   name.value = profileName.textContent;
   description.value = profileDescription.textContent;
}

addButton.addEventListener('click', popupOpenAddCard);

function popupCloseAddCard() {
   popupMesto.classList.add('popup_hide');
}

closeButtonAddCard.addEventListener('click', popupCloseAddCard);

function changeName(evt) {
   evt.preventDefault();
   profileName.textContent = name.value;
   profileDescription.textContent = description.value;
   popupClose();
}

formSubmit.addEventListener('submit', changeName);

// добавление карточки
function addcard(element) {
   const createElement = document.querySelector('#create-element').content;
   const userElement = createElement.querySelector('.create-element').cloneNode(true);
   userElement.querySelector('.element__title').textContent = element.placeName;
   userElement.querySelector('.element__image').src = element.placeLink;
   sectionElements.prepend(userElement);

   // лайк
   document.querySelector('.element__like').addEventListener('click', function (evt) { // like 
      evt.target.classList.toggle('element__like_active');
   });

   // удаление
   document.querySelector('.element__delete').addEventListener('click', function (evt) {
      const d = evt.target.parentElement;
      d.remove();
   });

   // обработчик попапа с картирнкой
   document.querySelector(".element__button").addEventListener('click', function (evt) {
      const imagePopup = document.querySelector('#element-popup').content;
      const cardElement = imagePopup.querySelector('.popup-element').cloneNode(true);
      const imageChild = evt.target.parentElement.parentElement;
      cardElement.querySelector('.popup-element__title').textContent = imageChild.querySelector('.element__title').textContent;
      cardElement.querySelector('.popup-element__image').src = imageChild.querySelector('.element__image').src;
      bodyClass.append(cardElement);

      document.querySelector('.popup__close_theme_element').addEventListener('click', function (evt) {
         const d = evt.target.parentElement.parentElement;
         d.remove();
      });

   });
}

//функция добавления новой карточки
function addPlace(evt) {
   evt.preventDefault();
   if (placeValue.value === '' || imageValue.value === '') {
      popupCloseAddCard();
   }
   else {
      const createElement = document.querySelector('#create-element').content;
      const userElement = createElement.querySelector('.create-element').cloneNode(true);
      const a = placeValue.value;
      const b = imageValue.value;
      const c = {
         placeName: a,
         placeLink: b,
      }
      initialCards.unshift(c);
      addcard(initialCards[0]);
      placeValue.value = '';
      imageValue.value = '';
      popupCloseAddCard();
   }
}

// кнопка добавить карточку
AddButtonSubmit.addEventListener('click', addPlace); 
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formSubmit = document.querySelector('.edit-form');
let profileInfoButton = document.querySelector('.profile__info-button');
let popupMain = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let name = document.querySelector('.edit-form__input_textvalue_name');
let description = document.querySelector('.edit-form__input_textvalue_description');

function popupOpen() {
   popupMain.classList.remove('popup_hide')
   name.value = profileName.textContent;
   description.value = profileDescription.textContent;
}

function popupClose() {
   popupMain.classList.add('popup_hide');
}

function changeName(evt) {
   evt.preventDefault();
   profileName.textContent = name.value;
   profileDescription.textContent = description.value;
   popupClose();
}

profileInfoButton.addEventListener('click', popupOpen);
formSubmit.addEventListener('submit', changeName);
closeButton.addEventListener('click', popupClose);
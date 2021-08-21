let mainContainer = document.querySelector('.maincontainer');

let formButton = document.querySelector('.form__button-save');

let profileContainer = document.querySelector('.profile__info');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let formSubmit = document.querySelector('.form'); // заменить по бэму

let profileInfoButton = document.querySelector('.profile__info-button');
let popupMain  = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');

let likeButton = document.querySelector('.element__like');



function popupOpenClose(){
   
console.log('opening');
popupMain.classList.toggle('popup__hide');

   
}


profileInfoButton.addEventListener('click', popupOpenClose);


 function changeName(evt){
   evt.preventDefault();


   let name = document.querySelector('.form__name');
   let description = document.querySelector('.form__description');
   
profileName.textContent= name.value;
profileDescription.textContent= description.value;


popupOpenClose();
 }

 formSubmit.addEventListener('submit', changeName);
 
 closeButton.addEventListener('click', popupOpenClose);

/*let form = document.querySelector('.edit__form');
// let formName = edit__form.querySelector('.form__name');
// let formDescription = edit__form.querySelector('.form__description');

let profileInfo = document.querySelector('.profile__info');



let formButton = document.querySelector('.form__button');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');


let a='';
let b='';


function addInfo() {
    let authorName = document.querySelector('.form__name');
    let authorDescription = document.querySelector('.form__description');

    console.log(authorName.value);
    console.log(authorDescription.value);

    profileInfo.insertAdjacentHTML('beforeend', `
    <div class="song">
   <h4 class="song__artist">${authorName.value}</h4>
  <p class="song__title">${authorDescription.value}</p>
     <button class="song__like"></button>
    </div>
 `);
}

formButton.addEventListener('click', addInfo);

// formButton.onclick = function(){
//     let authorName = document.querySelector('.form__name');
//     let authorDescription = document.querySelector('.form__description');

//     console.log(authorName.value);
//     console.log(authorDescription.value);
// }*/
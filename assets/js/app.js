const btn = document.querySelector('#SignUp');
const modal = document.querySelector('.modals');
const pop = document.querySelector('.modal__container');
const close = document.querySelector('#cancel');
const ok = document.querySelector('#ok');

btn.addEventListener('click', function (e) {
  // console.log('Привет');
  if (e.target.closest('#SignUp')) {
    modal.classList.toggle('active');
    pop.classList.toggle('popup__block');
  }

});

close.addEventListener('click', function (e) {
  if (e.target.closest('#cancel')) {
    pop.classList.remove('popup__block');
    modal.classList.remove('active');

  }
});
// ok.addEventListener('click', function (e) {
//   if (e.target.closest('#ok')) {
//     modal.classList.remove('active');
//     pop.classList.remove('popup__block');

//   }

// });
modal.addEventListener('click', function (e) {
  console.log(e.target)
  if (!e.target.classList.contains('modal') && !e.target.closest('.modal')) {
    modal.classList.remove('active');
    pop.classList.remove('popup__block');

  }

});
"use strict"
const ratings = document.querySelectorAll('.card__star');
if (ratings.length > 0) {

  initRatings();

}
// Основная функция 
function initRatings() {
  let ratingActive, ratingValue;
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    initRating(rating);

  }
  //Иницифлизируем конкретный рейтинг
  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();

    if (rating.classList.contains('rating_set')) {
      setRating(rating);
    }
  }
  //Инициализация преременных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.card__active');
    ratingValue = rating.querySelector('.card__value');

  }
  //Изменяем ширину активных звезд
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;

  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.card__item');
    for (let i = 0; i < ratingItems.length; i++) {
      const ratingItem = ratingItems[i];
      ratingItem.addEventListener('mouseenter', function (e) {

        initRatingVars(rating);
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', function (e) {
        setRatingActiveWidth()
      });
      ratingItem.addEventListener('click', function (e) {
        initRatingVars(rating);

        if (rating.dataset.ajax) {
          setRatingValue(ratingItem.value, rating);
        } else {
          ratingValue.innerHTML = i + 1;
          setRatingActiveWidth();
        }

      });

    }
  }
}

var xhr = new XMLHttpRequest();
var url = "get.json";
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var json = JSON.parse(xhr.responseText);
    console.log(json.email + ", " + json.password);
  }
};
var data = JSON.stringify({ "email": "", "password": "" });
console.log(data);
xhr.send(data);
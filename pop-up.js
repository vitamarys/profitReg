$('.regisration-form__submit__btn').click(function(){
 $('.overlay-reg').addClass('active');

})

$('.overlay-reg').click(function(){
  $('.overlay-reg').removeClass('active')
})

$('.tabs__block__add-btn').click(function(){
  $('.overlay-add').addClass('active');
 

}) 
$('.popup-add__close-btn').click(function(){
  $('.overlay-add').removeClass('active');
})

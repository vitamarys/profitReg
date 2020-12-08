const subTitle = $('.tabs__block__item__subtitle');
const openBtn = $('.tabs__block__item__open');
const descr = $('.tabs__block__item__desc');
const file = $('.tabs__block__item__file');
const item = $('.tabs__block__item');
const addFile = $('.tabs__block__item__add');
item.click(function(){
   
    item.removeClass('active');
   $(this).addClass('active');
    if ( $(this).hasClass('active')){
        $(this).find(subTitle).addClass('active');
        $(this).find(descr).addClass('active');
        $(this).find(file).addClass('active');
        $(this).find( addFile).addClass('active');
        $(this).find(openBtn).addClass('active');
        
    }
   
})
openBtn.click(function(){
    subTitle.removeClass('active');
    descr.removeClass('active');
    file.removeClass('active');
     addFile.removeClass('active');
    openBtn.removeClass('active');
    
    
})
'use strict';
let date = new Date();
document.write(addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + addZero(date.getFullYear()));
function addZero(num) {
if (num >= 0 && num <= 9) {
     return '0' + num;
} else {
   return num;
    }
}


$(document).ready(function(){
		$('.table th, .table td').click(function(){
			$('.table td').removeClass('active');
			$(this).addClass('active');
		});

		$(".btn").on('mouseover', function() {
			$(this).children(".info").text($(this).attr("data-clipboard-text"));
		});

		$(".btn").on('mouseout', function() {
			$(this).children(".info").text("");
		});
	});

  var cb = new Clipboard('.btn'); // класс кнопки
	cb.on('success', function(e){
		window.setTimeout(function(){
			console.log(true);
			e.clearSelection();
		}, 1500);
	});






//В ранее разработаном сайте с помощью JS:

//1. В шапке или футере разместить элемент, в который после загрузки документа будет записана текущая дата в формате дд.мм.гггг.

//2. В текстовом поле формы будет показан (по наведению мышки) текст подсказки и убран по уходу курсора мыши с него.

//3. Проверить корректность работы этого поля при вводе данных.

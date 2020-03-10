

$(document).ready(function() {
	
	$("p:contains('Лайн-арт')").text("Line-art");
	$("p:contains('Плоский Цвет')").text("Plain Color");
	$("p:contains('Полный рендер')").text("Full render");	
	$(".onecharacter:contains('Один персонаж')").text("One character");
	$(".simpleback:contains('Простой фон')").text("Simple background");
	$(".hardback:contains('Сложный фон')").text("Difficult background");
	$(".person:contains('Дополнительный персонаж')").text("Additional character");
	$(".htext").text("Please, be so kind as to read this proposal with full attention.")
	$("li:contains('Если Вы хотите')").html('The best way to contact me: <a class="links" href="https://www.instagram.com/mazikart/">Instagram</a>, <a href="https://twitter.com/mazikart" class="links">Twitter</a> or my <a class="links" href="mailto:egorkamazik@gmail.com?=About art.">e-mail</a>. Commission must not violate neither your countrys or USAs law.');
	$("li:contains('Проверьте, открыта ли комиссия')").html('Please, be so kind as to ensure whether the commission is visible in the header of the website,\
															 then contact me and we will discuss all the details as well as the price.<br> You will be charged a\
															 deposit fee in advance. Once I verify the deposit payment, I will proceed with the project\
															 creation.')
	$("li:contains('Не присылайте')").text('Do not send less amount of money than we discussed.')
	$("li:contains('Я не занимаюсь')").text('No refunds are avaliable.')
	$("li:contains('Все Ваши данные')").text('All of your data as well as the payment will never be disclosed for reasons of confidentiality.')
	$("li:contains('Арт будет готов')").text('The art project will be ready within 2-7 days, depending on complexity.')
	$('.htext1').text('Making your order, be so kind as to provide me with')
	$('.htext2').text('complete information, including the following:')
	$("li:contains('Тип комиссии:')").text('Commission Type: Line, Flat color / Flat shadow / Full Render.')
	$("li:contains('Рейтинг комиссии:')").text('Commission rating: NSFW / SFW.')
	$("li:contains('Референсы вашего персонажа.')").text('References of your character.')
	$("li:contains('Поза, выражение лица')").text('Pose, facial expression, etc.')
	$("li:contains('Фон:')").text('Background: Transparent / Flat / Simple / Complex.')
	$("li:contains('Другое:')").text('Other: Additional characters, details, etc.')				
	$("li:contains('Формат файла:')").text('File format: jpeg, gif, png, psd, sai2.')	
	$("h6:contains('Все персонажи')").text('All characters older than 18.')
	let language = 'en';
	$('.langRU').hover(function() {						// [1]
		$(this).css('text-decoration', 'underline');
	}, function(){
		$(this).css('text-decoration', 'none');
	});
	$('.langEN').hover(function() {
		$(this).css('text-decoration', 'underline');
	}, function(){
		$(this).css('text-decoration', 'none');			// [1]
	});

	$('.langEN').click(function() {
		if (language == 'rus') {
		$("p:contains('Лайн-арт')").text("Line-art");
		$("p:contains('Плоский Цвет')").text("Plain Color");
		$("p:contains('Полный рендер')").text("Full render");	
		$(".onecharacter:contains('Один персонаж')").text("One character");
		$(".simpleback:contains('Простой фон')").text("Simple background");
		$(".hardback:contains('Сложный фон')").text("Difficult background");
		$(".person:contains('Дополнительный персонаж')").text("Additional character");
		$(".htext").text("Please, be so kind as to read this proposal with full attention.")
		$("li:contains('Если Вы хотите')").html('The best way to contact me: <a class="links" href="https://www.instagram.com/mazikart/">Instagram</a>, <a href="https://twitter.com/mazikart" class="links">Twitter</a> or my <a class="links" href="mailto:egorkamazik@gmail.com?=About art.">e-mail</a>. Commission must not violate neither your countrys or USAs law.');
		$("li:contains('Проверьте, открыта ли комиссия')").html('Please, be so kind as to ensure whether the commission is visible in the header of the website,\
																 then contact me and we will discuss all the details as well as the price.<br> You will be charged a\
																 deposit fee in advance. Once I verify the deposit payment, I will proceed with the project\
																 creation.')
		$("li:contains('Не присылайте')").text('Do not send less amount of money than we discussed.')
		$("li:contains('Я не занимаюсь')").text('No refunds are avaliable.')
		$("li:contains('Все Ваши данные')").text('All of your data as well as the payment will never be disclosed for reasons of confidentiality.')
		$("li:contains('Арт будет готов')").text('The art project will be ready within 2-7 days, depending on complexity.')
		$('.htext1').text('Making your order, be so kind as to provide me with')
		$('.htext2').text('complete information, including the following:')
		$("li:contains('Тип комиссии:')").text('Commission Type: Line, Flat color / Flat shadow / Full Render.')
		$("li:contains('Рейтинг комиссии:')").text('Commission rating: NSFW / SFW.')
		$("li:contains('Референсы вашего персонажа.')").text('References of your character.')
		$("li:contains('Поза, выражение лица')").text('Pose, facial expression, etc.')
		$("li:contains('Фон:')").text('Background: Transparent / Flat / Simple / Complex.')
		$("li:contains('Другое:')").text('Other: Additional characters, details, etc.')				
		$("li:contains('Формат файла:')").text('File format: jpeg, gif, png, psd, sai2.')	
		$("h6:contains('Все персонажи')").text('All characters older than 18.')
		language = 'en';
		}
	});
		
	$('.langRU').click(function() {
	if (language == 'en') {
		$("p:contains('Line-art')").text("Лайн-арт");
		$("p:contains('Plain Color')").text("Плоский Цвет");
		$("p:contains('Full render')").text("Полный рендер");	
		$(".onecharacter:contains('One character')").text("Один персонаж");
		$(".simpleback:contains('Simple background')").text("Простой фон");
		$(".hardback:contains('Difficult background')").text("Сложный фон");
		$(".person:contains('Additional character')").text("Дополнительный персонаж");
		$(".htext").text("Пожалуйста, прочитайте это внимательно!")
		$("li:contains('The best way to contact me')").html('Если Вы хотите со мной связаться то лучше всего написать мне в <a class="links" href="https://www.instagram.com/mazikart/">Instagram</a>, <a href="https://twitter.com/mazikart" class="links">Twitter</a>, или на <a class="links" href="mailto:egorkamazik@gmail.com?=По поводу арта.">почту</a>. Комиссия не должна нарушать закон Вашей страны.');
		$("li:contains('Please, be so kind as to ensure whether')").text('Проверьте, открыта ли комиссия в заголовке этого веб-сайта, после чего свяжитесь со мной и мы обсудим все детали и цену. С Вас взимается предоплата. Я проверяю оплату и начинаю работать.')
		$("li:contains('Do not send less amount')").text('Не присылайте cумму меньше той, о которой мы договаривались.')
		$("li:contains('No refunds are avaliable.')").text('Я не занимаюсь возвратом средств.')
		$("li:contains('All of your data as well')").text('Все Ваши данные и сумма никогда не будут раскрыты по соображениям конфиденциальности.')
		$("li:contains('The art project will be ready within')").text('Арт будет готов в течение 2-7 дней, всё зависит от сложности.')
		$('.htext1').text('При обращении с комиссией дайте мне полную информацию, ')
		$('.htext2').text('желательно, чтобы она включала в себя:')
		$("li:contains('Commission Type:')").text('Тип комиссии: Line, Flat color / Flat shadow / Full Render.')
		$("li:contains('Commission rating:')").text('Рейтинг комиссии: NSFW / SFW.')
		$("li:contains('References of your character.')").text('Референсы вашего персонажа.')
		$("li:contains('Pose, facial expression, etc.')").text('Поза, выражение лица и другое.')
		$("li:contains('Background:')").text('Фон: Прозрачный / Плоский / Простой / Сложный.')
		$("li:contains('Other:')").text('Другое: Дополнительные персонажи, реквизиты и другое.')				
		$("li:contains('File format:')").text('Формат файла: jpeg, gif, png, psd, sai2.')	
		$("h6:contains('All characters older')").text('Все персонажи старше 18 лет.')
		language = 'rus';
		}
	}); 
});


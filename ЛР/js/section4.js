//Раздел 4 Функции
//нумерация скриптов соответствующая нумерации заданий

function script1(){
	var str = prompt("Введите строку");
	var fontSize = 1*prompt("Введите размер шрифта");
	
	script1_1(str,fontSize);//вызов функции с введеными параметрами

}
function script1_1(str, fontSize){//в js можно написать функцию после ее вызова(выше в коде)
	document.write('<a style="font-size:' + fontSize + ';">' + str+'</a><br>');
	document.write('<a style="font-size: 28;">' + "Чтобы вернуться к списку заданий необходимо перезагрузить страницу"+'</a>');//
}
	

function script2(){	

	var arr = [];//создание массива строк
	for(i = 0; i <4;i++){
		arr[i] = prompt("Введите " + 1*(i+1) +"ю строку");//я пытался подставить номер строки через ${i+1}, но это не работает
	}
	document.write('<table border="1" width = "100%" cols = "1" >');//создание таблицы с 100% шириной и отображаемыми границами, а так же 1 столбцом		
		document.write('<tr>' );//тег начала первой строки 
		
		for(i=0;i <4;i++){
			document.write('<td>' + arr[i] + '</td>');//создание ячейки со значением из массива строк
			document.write('</tr> <tr>' );//завершить текущую строку таблицы и начать новую
		}
	
		document.write('</tr>' );//тег конца последней строки 

	
document.write('</table>');//конец таблицы
document.write('<a style="font-size: 28;">' + "Чтобы вернуться к списку заданий необходимо перезагрузить страницу"+'</a>');
}


//кнопки для простого запуска заданий

const Button_4_1 = document.getElementById('task_4.1');
Button_4_1.addEventListener('click', script1);

const Button_4_2 = document.getElementById('task_4.2');
Button_4_2.addEventListener('click', script2);
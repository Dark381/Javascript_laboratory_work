//Раздел 6 Объект Window
function script1(){//нумерация скриптов соответствующая нумерации заданий	
	let size = 20;//испотльзуется для изменения ширины изображения
	var min = 0;//минимальное значение в %
	var max = 100-size;//максимальное значение уменьшено на размер, чтобы изображение не появилось за пределами экрана
	document.write('<img id = "myimg" src = "img/dvd.png" width='+size+'%>');//создание изображение с заданной шириной
	var myimg=document.getElementById("myimg");//создание переменной и получение элемента по id
	function img_random(){
		top1 = Math.floor(Math.random() * (max - min) + min);//случайные значения top и left 
		left1 = Math.floor(Math.random() * (max - min) + min);
		newstyle = "position: absolute; left:"+left1+"%;"+"top:"+top1+"%"; //top и left работают только при абсолютном позиционировании
		myimg.setAttribute("style", newstyle);//добавление созданного значения к элементу
	}	
	setInterval(img_random, 1000);//вызов функции изменения положения каждую секунду
}   

function script2(){		
	
	let class1 = [];
	class1[0] = "odd"; //нечетные
	class1[1] = "even";//четные
	//изменение высоты всех ячеек, по-умолчанию четные ячейки имеют черный цвет
	document.write('<style> td{height:100px;} .even{background-color: black;}</style>');
	//таблица шириной во весь экран, с границами
	document.write('<table border="1" width = "100%" cols = "9">');
	
	document.write('<tr>');//начало первой строки
	for(i=0;i<81;i++){	
	if(i%9 == 0 && i>1){
		document.write('</tr><tr>');//каждые 9 ячеек новая строка
	}
		document.write('<td class = "'+class1[i%2]+'"></td> ');//создание ячеек с классами, зависящие от четности интерации цикла
	}
	document.write('</tr>');//конец последней
	
	document.write('</table>');//конец таблицы
	

	function change_color(bool1){//функция смены цвета ячеек, с параметром логического типа
	even_arr = document.getElementsByClassName("even");//создание массива нечетных и четных ячеек соответственно
	odd_arr = document.getElementsByClassName("odd");
	//циклы с количеством интерация, зависящих от количества элементов с указанным классом
		for(i = 0; i< even_arr.length; i++){
			//2 варианта при которых ячейки меняют цвет на черный либо белый
			if(!bool1){
				even_arr[i].style.backgroundColor = "black";
			}
			else{
				even_arr[i].style.backgroundColor = "white";
			}
		}
		for(j = 0; j< odd_arr.length; j++){
			if(bool1){
				odd_arr[j].style.backgroundColor = "black";
			}
			else{
				odd_arr[j].style.backgroundColor = "white";
			}
		}
	}
	//логическая переменная изначально true
	var bool1 = true;
	function change_color2(){//2я функция для вызова функции смены цвета, с передачей изменяемого параметра
		change_color(bool1);
		bool1 = !bool1;//изменение значения на противоположное с помощью логического отрицания		
	}
	
	setInterval(change_color2, 500);//вызов 2й функции каждые полсекунды
	
	//в задании говорилось про eval, но я даже не представляю его преимуществ в данной задачи, eval выполняет код, содержащийся в строке, но вызов функции делает тоже самое, возможно я не знаю всех возможностей данной функции. 
	
}
//кнопки для простого запуска заданий

const Button_6_1 = document.getElementById('task_6.1');
Button_6_1.addEventListener('click', script1);

const Button_6_2 = document.getElementById('task_6.2');
Button_6_2.addEventListener('click', script2);
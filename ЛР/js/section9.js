//Раздел 9 DOM
function script1(){
	//создание элемета div 
	div = document.createElement("div");
	//создание текста для элемета div 
	div_text = document.createTextNode("Привет, ");
	//создание дочернего элемета span  
	span = document.createElement("span");
	//установка значения font-size
	span.setAttribute("style", "font-size:150%");
	//текст для дочернего элемета span
	span_text = document.createTextNode("Лена");
	//добавление текста в элемет span
	span.appendChild(span_text);
		
	div.appendChild(div_text);	
	//добавление элемента span в элемет div
	div.appendChild(span);
	
document.body.appendChild(div);

}
 
function script2(){		
	//пример текста взят http://htmlbook.ru/html/b
	document.write('<p><b>Lorem ipsum dolor sit amet</b></p><p><b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat  volutpat. <b>Ut wisis</b> enim ad minim veniam, quis nostrud exercitution ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>');
	//создание массива элементов 
	b_arr = document.getElementsByTagName('b');
	//в задании сказано "Найти на странице все <b> и изменить их размер на 15px", наверное изменить размер шрифта
	for(i = 0; i < b_arr.length; i++){
		b_arr[i].setAttribute("style", "font-size:15px");
	}

	document.write('<p><a class = "link" href="index.html">список заданий</a></p>');
	
}
//кнопки для простого запуска заданий

const Button_9_1 = document.getElementById('task_9.1');
Button_9_1.addEventListener('click', script1);

const Button_9_2 = document.getElementById('task_9.2');
Button_9_2.addEventListener('click', script2);
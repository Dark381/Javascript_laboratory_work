//Раздел 5 Строки
function script1(){//нумерация скриптов соответствующая нумерации заданий
	document.write('<form>');
	document.write('<p>');
	document.write('<label>Your email:</label>');
	document.write('<input type="text" pattern ="[a-z0-9-\.]+@[a-z0-9-]+\.+[a-z]{2,6}" placeholder="mymail@mail.com"/>');
	//я просто написал регулярное выражение для почты, 1я группа символов - любая строчная латинская буква, цифры, а так же дефис или точка. Дальше следует коммерческий at. После группа символов - любая строчная латинская буква, цифра или дефис, после следует точка, перед точкой обратный слеш чтобы отделить точку как спец символ, после точки группа символов от 2 до 6, опять же, любая строчная латинская буква
	document.write('<input type="submit" value="Login">');
	document.write('</p>');
	document.write('</form>');
	
	document.write('<p><a class = "link" href="index.html">список заданий</a></p>');
}   

function script2(){	
	var arr = [];
	let n = prompt("Введите размер массива");
	let i = 0;
	for (i = 0; i < n; i++){
		arr[i] = prompt("Введите целое или дробное число"); 
	}
	
	arr.sort();

	document.write('<table border="1" width = "100%" cols = "10" style="text-align:right;" >');
	
	document.write('<tr>' );		
		for(i=0;i <n;i++){
			if(i%10==1 && i > 1){//каждые 10 ячеек создание новой строки, использована операция остатка от деления, дополнительное условие чтобы новая строка не создалась на первой же ячейке
				document.write('</tr> <tr>' );
			}
			document.write('<td >' +'<a >'+ arr[i] + '</a>' + '</td>');		
		}
	
	document.write('</tr>' );
	
	document.write('</table>');
	document.write('<p><a class = "link" href="index.html">список заданий</a></p>');
}

function script3(){
	//изменить всем td параметр через класс стилей, задается без точки
	document.write('<style> td{ text-align:right;}</style>');
	var str = '<table width = 40% border = 1 ><tr><td>0</td><td>1</td><td>2</td></tr>'+//добавил ширину 40% и видимые границы, без этих параметров не понятно применилось ли форматирование
        '<tr><td>3</td><td>4</td><td>5</td></tr>'+
        '<tr><td>6</td><td>7</td><td>8</td></tr></table>';
	document.write(str);
	
	document.write('<p><a class = "link" href="index.html">список заданий</a></p>');
}
//кнопки для простого запуска заданий

const Button_5_1 = document.getElementById('task_5.1');
Button_5_1.addEventListener('click', script1);

const Button_5_2 = document.getElementById('task_5.2');
Button_5_2.addEventListener('click', script2);

const Button_5_3 = document.getElementById('task_5.3');
Button_5_3.addEventListener('click', script3);
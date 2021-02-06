//Раздел 2 Управление потоком

function script1(){//нумерация скриптов соответствующая нумерации заданий
	var age = prompt("Введитте возраст");
	alert("Результат выведен в консоль");
	if(age >= 18 && age <=30){//двойной амперсент является конъюнкцией, логическим И 
		console.log("Для молодежи");	
		return;//я использовал return как аналог break, если выполнится условие, то дальнейший код не выполнится
	}
	
	if(age >= 1 && age <=17){
		console.log("Для детей");	
		return;		
	}
	
	console.log("Для всех возрастов");//если 2 условия не остановят функцию, то выведется это сообщение	
}

function script2(){
	alert("Результат выведен в консоль");
	var i = 0;
	console.log("Вывод циклом while");
	while(i<51){
		console.log(i);
		i++;
	}
	i = 0;
	console.log("Вывод циклом for");
	for(i=0;i<51;i++){
		console.log(i);
		i++;
	}
}

function script3(){
	var from;
	for (from in document)
	{
		console.log(from);
		//document.write(from,'<br>');
	}
	alert("Результат выведен в консоль");
}
//кнопки для простого запуска заданий

const Button_2_1 = document.getElementById('task_2.1');
Button_2_1.addEventListener('click', script1);

const Button_2_2 = document.getElementById('task_2.2');
Button_2_2.addEventListener('click', script2);

const Button_2_3 = document.getElementById('task_2.3');
Button_2_3.addEventListener('click', script3);
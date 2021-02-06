//Раздел 3 Массивы
function script1(){//нумерация скриптов соответствующая нумерации заданий
	let arr=[];
	let n = prompt("Введите размер массива");//поскольку массив динамический, то можно задать размер массива
	let min = Math.ceil(prompt("Введите минимальное значение массива"));//округление в до ближайшего меньшего числа
	let max = Math.floor(prompt("Введите максимальное значение массива")) + 1;
	let i = 0;
	let min_arr = max;
	let max_arr = min;
	let min_arr_id = 0;
	let max_arr_id = 0;
	let buf;
	console.log("Массив до замены");
	for(i = 0; i < n; i++){		
		arr[i] = Math.floor(Math.random() * (max - min) + min);		
		console.log(arr[i]);//вывод массива во время инициализации, чтобы лишний цикл не делать
		//поиск первого наименьшего и наибольшего, в задании нет уточнения
		if(arr[i] < min_arr){
			min_arr = arr[i];
			min_arr_id = i;
		}
		if(arr[i] > max_arr){
			max_arr = arr[i];
			min_arr_id = i;
		}	
	}	
	//простая замена значений через дополнительную переменную
	buf = arr[min_arr_id];
	arr[min_arr_id] = arr[max_arr_id];
	arr[max_arr_id] = buf;
	
	console.log("Массив после замены");
	for(i =0; i < n; i++){	
		console.log(arr[i]);	
	}
}

function script2(){	
	var arr = ([//массив, состоящий из массивов, нулевым элементом которого является автор, последующие - его книги
	['Пушкин', 'Капитанская дочка','Пиковая дама', 'Дубровский'],
	['Есенин','Анна Снегина','Черный человек', 'Письмо у женщине'],
	['Толстой', 'Война и мир','Анна Каренина', 'Дубровский']
	]);	

	let i = 0;
	for (i = 0; i < arr.length; i++){
		console.log('Автор: ' + arr[i][0]);	
		console.log('Книги: ' );	
		for (j = 1; j < arr[i].length; j++){			
			console.log(arr[i][j]);	
		}
	}
	alert("Результат выведен в консоль");
}

function script3(){
	//большая часть кода из 1го задания
	let arr=[];
	let n = prompt("Введите размер массива");
	let min = Math.ceil(prompt("Введите минимальное значение массива"));
	let max = Math.floor(prompt("Введите максимальное значение массива")) + 1;
	let i = 0;
	let sum = 0;
	for(i =0; i < n; i++){		
		arr[i] = Math.floor(Math.random() * (max - min) + min);		
		console.log(arr[i]);
		sum += arr[i];//увеличение значения суммы на инициализированный элемент массива
	}
	console.log("Сумма массива равна " + sum);
	alert("Результат выведен в консоль");
}
//кнопки для простого запуска заданий

const Button_3_1 = document.getElementById('task_3.1');
Button_3_1.addEventListener('click', script1);

const Button_3_2 = document.getElementById('task_3.2');
Button_3_2.addEventListener('click', script2);

const Button_3_3 = document.getElementById('task_3.3');
Button_3_3.addEventListener('click', script3);
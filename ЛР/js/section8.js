//Раздел 8 Cookie
//для работы куки нужен localhost, поэтому прилагается видеоотчет в соответствующей папке

//создание элемента размер шрифта которого будем менять
var el = document.getElementById("text1");
//функция записи в куки
function set_cookie ( name, value)
{
  var cookie_string = name + "=" + escape ( value );//escape возвращает новую строку, в которой определенные символы заменены шестнадцаричной управляющей последовательностью
  document.cookie = cookie_string;
}
//функция получения значения из куки
function get_cookie ( cookie_name )
{
	//древнее эльфийское заклинание для поиска ключа в "зашифрованном" куки, возвращает true при совпадении
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

  if ( results )
    return ( unescape ( results[2] ) );//если результат принял значение true, то функция вернет значение
  else
    return null;//иначе вернет null
}


if ( ! get_cookie ( "fontSize" ) )//если не найдено действительное значение, то устанавливается текущее значение размера шрифта текста элемента
{
	var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
	var fontSize = parseFloat(style);
	
    set_cookie ( "fontSize", fontSize);//запись в куки полученного значения
    document.location.reload();//перезагрузка страницы
}
else
{
	//если найдено значение, то получаем его из куки и устанавливаем в качестве стиля
	var fontSize = get_cookie ( "fontSize" );
	console.log(fontSize);	
	el.style.fontSize = (fontSize) + 'px';
}

function fontPlus(){
	//увеличивает шрифт на 1 и перезаписывет куки
	fontSize++;
	el.style.fontSize = (fontSize) + 'px';
	
	document.cookie = "fontSize="+fontSize+";";
	console.log(fontSize);
}   

function fontMinus(){
	fontSize--;
	el.style.fontSize = (fontSize) + 'px';
	
	document.cookie = "fontSize="+fontSize+";";
	console.log(fontSize);
}   
//кнопки для изменения шрифта
const Button_8_1 = document.getElementById('fontPlus');
Button_8_1.addEventListener('click', fontPlus);

const Button_8_2 = document.getElementById('fontMinus');
Button_8_2.addEventListener('click', fontMinus);
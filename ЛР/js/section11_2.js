//Раздел 11 Формы

color_form = document.getElementById('color_form');

block = document.getElementById('block');

color_form.onchange = function(){
	let color_style = this.color.value;
	console.log(color_style);
	newstyle = 'background-color:' + color_style +'; ';
	block.setAttribute("style", newstyle);;
	return false;
}
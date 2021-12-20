alert("Привет!")
let cost_type = 0;
let time_type = 0;
let type = prompt("Какой тип сайта вам нужен? Напишите цифру ответа: 1)Визитка; 2)Корпоративный сайт; 3)Лендинг;")

if(type == 1){
	cost_type = 1000;
	time_type = 7;
	console.log(cost_type);
	console.log(time_type);
}
if(type == 2){
	cost_type = 1500;
	time_type = 13;
	console.log(cost_type);
	console.log(time_type);
}
if(type == 3){
	cost_type = 2000;
	time_type = 16;
	console.log(cost_type);
	console.log(time_type);
}

let design = prompt("Какой дизайн сайта вы предпочтёте? Напишите цифру ответа: 1)Шаблонный дизайн; 2)Уникальный дизайн; 3)Wow-дизайн")
cost_design = 0;
time_design = 0;

if(design == 1){
	cost_design = 1500;
	time_design = 1;
	console.log(cost_design);
	console.log(time_design);
}

if(design == 2){
	cost_design = 3000;
	time_design = 3;	
	console.log(cost_design);
	console.log(time_design);
}

if(design == 3){
	cost_design = 3500;
	time_design = 3;
	console.log(cost_design);
	console.log(time_design);
}
let adapt = prompt("Вы хотите сделать ваш сайт адаптивным? (напишите Да или Нет)")
cost_adapt = 0;
time_adapt = 0;
if(adapt === "Да"){
	cost_adapt = 2000;
	time_adapt = 2;
	console.log(cost_adapt);
	console.log(time_adapt);
}
if(adapt === "Нет"){
	cost_adapt = 0;
	time_adapt = 0;
	console.log(cost_adapt);
	console.log(time_adapt);
}
let cost = cost_type + cost_design + cost_adapt;
let time = time_type + time_design + time_adapt;

let itog = alert("Это обойдётся в " + cost + " рублей");
let srok = alert("Я это сделаю за " + time + " дней"); 
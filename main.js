//Выбираем две кнопки
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

//Делаем функцию-конструктор
function Timer () {
  this.startTimer = 0;
  this.stopTimer = 0;
  this.interval = 0;
};
//Наследуем метод startTimer
Timer.prototype.start = function (count) {
  this.startTimer = count;  
  console.log('Start: '+  this.startTimer);
};

//Наследуем метод stopTimer и interval
Timer.prototype.stop = function (count) {
  this.stopTimer = count;
  this.interval = (this.stopTimer - this.startTimer); //отнимаем значения
  console.log('End: ' + this.stopTimer); // конец таймера
  console.log('Difference ' + this.interval); // разница милисек
};

//Создаем переменную, используя конструктор
let time = new Timer ();

//Функция старта таймера
const startTime = event => {  
  time.start(new Date());
};

//Функция остановки таймера
const stopTime = event => {
   time.stop(new Date());

};

//Событие клика по кнопкам
start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);


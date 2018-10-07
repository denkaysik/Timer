var decCache = [],
	decCases = [2, 0, 1, 1, 1, 2];

function decofNum(number, titles) {
	if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 :decCases[Math.min(number % 10, 5)];
	return titles[decCache[number]];
}

function timerLeft() {
	setInterval(function(){
		var hoursLeft = document.getElementById('hours'),
			hoursText = document.getElementById('hours-txt'),
			minutesLeft = document.getElementById('minutes'),
			minutesText = document.getElementById('minutes-txt'),
			secLeft = document.getElementById('seconds'),
			secText = document.getElementById('seconds-txt'),
			dateNow = new Date().getTime(),
			dateFinish = new Date(2018,9,10,18,20),
			sec = Math.floor((dateFinish - dateNow) / 1000),
			secToMinutes = sec % 3600,
			hoursNumber = Math.floor(sec / 3600),
			minutesNumber = Math.floor(secToMinutes / 60),
			secondsNumber = secToMinutes % 60;
			hoursText.innerHTML = decofNum(hoursNumber, ["час", "часа", "часов"]);
			minutesText.innerHTML = decofNum(minutesNumber, ["минута", "минуты", "минут"]);
			secText.innerHTML = decofNum(secondsNumber, ["секунда", "секунды", "секунд"]);
			hoursLeft.innerHTML = hoursNumber;
			minutesLeft.innerHTML = minutesNumber;
			secLeft.innerHTML = secondsNumber;
	},1000)

}
timerLeft();
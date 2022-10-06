let globalSeconds;
let timeoutVariable;
let alarmVariable;
let audioVariable;

const setAudio = () => {
    audioVariable = new Audio('alarmSound.mp3');
}

const playAudio = () => {
    audioVariable.currentTime = 0;
    audioVariable.play();
}

const getHour = () => {
    let current = new Date();
    return current.getHours();
}

const getMinute = () => {
    let current = new Date();
    return current.getMinutes();
}

const getSeconds = () => {
    let current = new Date();
    return current.getSeconds();
}

const getDate = () => {
    let current = new Date();
    return current.getDate();
}

const getMonth = () => {
    let current = new Date();
    return current.getMonth();
}

const getYear = () => {
    let current = new Date();
    return current.getFullYear();
}


const checkNumber = (number) => {
    if (isNaN(number)) {
        return true;
    }
    return number >= 0;
}

const checkOnZeros = (seconds, minutes, hours) => {
    return seconds === 0 && minutes === 0 && hours === 0;
}

const checkOnNaN = (seconds, minutes, hours) => {
    return isNaN(hours) && isNaN(minutes) && isNaN(seconds);
}

const resetButton = () => {
    document.getElementById("warning").innerHTML = "";
}

const showETA = (seconds) => {
    const date = new Date(getYear(), getMonth(), getDate(), getHour(), getMinute(), getSeconds() + seconds);
    //alert(date);
    let hoursETA   = date.getHours();
    let minutesETA = date.getMinutes();
    let secondsETA = date.getSeconds();
    if (hoursETA < 10) hoursETA = "0" + hoursETA;
    if (minutesETA < 10) minutesETA = "0" + minutesETA;
    if (secondsETA < 10) secondsETA = "0" + secondsETA;
    document.getElementById("eta").innerHTML =
        "<h6>ETA: " + date.getDate() +
        "." + (date.getMonth() + 1) +
        "." + date.getFullYear() +
        " " + hoursETA +
        ":" + minutesETA +
        ":" + secondsETA + "</h6>";
}

const refreshPage = () => {
    audioVariable.pause();
    audioVariable.currentTime = 0;
    window.clearTimeout(timeoutVariable);
    window.clearInterval(alarmVariable);
    globalSeconds = 0;
    document.querySelector(".main-content").style.display = 'flex';
    document.querySelector(".timer").style.display = 'none';
}

const checkOnNormal = (seconds, minutes, hours) => {
    if (isNaN(seconds)) seconds = 0;
    if (isNaN(minutes)) minutes = 0;
    if (isNaN(hours))   hours   = 0;
    console.log(seconds + " " + minutes + " " + hours);
    const time = 3600 * hours + 60 * minutes + seconds;
    console.log(seconds);
    return time < 1 || time > 3600000000000;
}


const emergencyStopTimer = () => {
    window.clearTimeout(timeoutVariable);
    let hours = Math.floor(globalSeconds / 3600);
    let minutes = Math.floor((globalSeconds - hours * 3600) / 60);
    let seconds = globalSeconds - hours * 3600 - minutes * 60;
    if (hours < 10) {
        document.getElementById("hours").innerHTML = "0" + hours.toString();
    } else {
        document.getElementById("hours").innerHTML = hours.toString();
    }
    if (minutes < 10) {
        document.getElementById("minutes").innerHTML = "0" + minutes.toString();
    } else {
        document.getElementById("minutes").innerHTML = minutes.toString();
    }
    if (seconds < 10) {
        document.getElementById("seconds").innerHTML = "0" + seconds.toString();
    } else {
        document.getElementById("seconds").innerHTML = seconds.toString();
    }
    document.getElementById("stopTimerButton").style.display = 'none';
    document.getElementById("refreshPageButton").style.display = 'inline-flex';
}

const endTimer = () => {
    window.clearTimeout(timeoutVariable);
    document.getElementById("stopTimerButton").style.display = 'none';
    document.getElementById("refreshPageButton").style.display = 'inline-flex';
    // document.getElementById("hours").style.display = 'none';
    // document.getElementById("minutes").style.display = 'none';
    // document.getElementById("seconds").style.display = 'none';
    document.querySelector("#numbers").style.display = 'none';
    document.getElementById("endMessage").style.display = 'inline-flex';
    playAudio();
    alarmVariable = window.setInterval(() => playAudio(), 15000);
}

const startTimer = (seconds, minutes, hours) => {
    document.getElementById('warning').innerText = '';
    document.getElementById("refreshPageButton").style.display = 'none';
    document.getElementById("stopTimerButton").style.display = 'inline-flex';
    globalSeconds = 3600 * hours + 60 * minutes + seconds;
    showETA(globalSeconds);
    globalSeconds--;
    hours = Math.floor(globalSeconds / 3600);
    minutes = Math.floor((globalSeconds - hours * 3600) / 60);
    seconds = globalSeconds - hours * 3600 - minutes * 60;      // it works!

    if (hours < 10) {
        document.getElementById("hours").innerHTML = "0" + hours.toString();
    } else {
        document.getElementById("hours").innerHTML = hours.toString();
    }
    if (minutes < 10) {
        document.getElementById("minutes").innerHTML = "0" + minutes.toString();
    } else {
        document.getElementById("minutes").innerHTML = minutes.toString();
    }
    if (seconds < 10) {
        document.getElementById("seconds").innerHTML = "0" + seconds.toString();
    } else {
        document.getElementById("seconds").innerHTML = seconds.toString();
    }
    timeoutVariable = window.setTimeout(() => startTimer(seconds, minutes, hours), 1000);
    if (globalSeconds === 0) {
        endTimer();
    }
    //console.log("Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds);
}

const configureTimer = (seconds, minutes, hours) => {
  document.querySelector(".main-content").style.display = 'none';
  document.querySelector(".timer").style.display = 'flex';
  document.querySelector("#numbers").style.display = 'flex';
    document.getElementById("endMessage").style.display = 'none';
  if (!isNaN(hours)) {
      document.getElementById("hours").innerHTML = hours.toString();
  } else {
      document.getElementById("hours").innerHTML = "00";
      hours = 0;
  }
  if (!isNaN(minutes)) {
      document.getElementById("minutes").innerHTML = minutes.toString();
  } else {
      document.getElementById("minutes").innerHTML = "00";
      minutes = 0;
  }
  if (!isNaN(seconds)) {
      document.getElementById("seconds").innerHTML = seconds.toString();
  } else {
      document.getElementById("seconds").innerHTML = "00";
      seconds = 0;
  }
  startTimer(seconds, minutes, hours);
}

const verify = () => {
    setAudio();
    let seconds = document.getElementById("timerSeconds").value;
    let minutes = document.getElementById("timerMinutes").value;
    let hours   = document.getElementById("timerHours").value;
    //alert(seconds + " " + minutes + " " + hours);
    seconds = parseInt(seconds);
    minutes = parseInt(minutes);
    hours   = parseInt(hours);
    if (checkOnNormal(seconds, minutes, hours)) {
        document.getElementById("warning").innerHTML = "<br>Maybe more than 0 seconds? (or less than 1000000000 hours)";
    } else {
        if (checkOnNaN(seconds, minutes, hours)) {
            document.getElementById("warning").innerHTML = "<br>Write at least one positive number";
        } else {
            if (checkOnZeros(seconds, minutes, hours)) {
                document.getElementById("warning").innerHTML = "<br>Please, write at least one positive number!";
            } else {
                if (checkNumber(seconds) && checkNumber(minutes) && checkNumber(hours)) {
                    configureTimer(seconds, minutes, hours);
                } else {
                    document.getElementById("warning").innerHTML = "<br>Please, write positive numbers!";
                }
            }
        }
    }
}


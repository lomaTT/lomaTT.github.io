function month(i) {
    if (i > 8) return Number(i) + Number(1);
    else return '0' + (Number(i) + Number(1));
}

function minutes(i) {
    if (i === undefined) return '00';
    if (i < 10) return '0' + Number(i);
}

var date = new Date()
var current_date = date.getDate() + '.' + month(date.getMonth()) + '.' + date.getUTCFullYear() + ' ' + date.getHours() + ':' + minutes(date.getUTCMinutes())

document.querySelector(".data").outerHTML = '<center style="background-color: black; color: white;">' + current_date + '</center>'
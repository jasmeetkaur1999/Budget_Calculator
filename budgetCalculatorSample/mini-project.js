
let date = new Date();
const month = document.getElementsByClassName("budget__title");
let a = ["jan", "feb", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
let b = a[date.getMonth()]
month.innerHTML = "available budget" + b + a[date.getFullYear];


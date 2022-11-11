var quoteArray = ["Добро пожаловать на официальную страницу Динары Гиндуллиной"]
var index = 0
var textPosition = 0
var flag = true;
var destination = document.getElementById("typedtext")

window.addEventListener('load',typewriter);

function typewriter(){
    if(flag){
        //loadQuote();
        quoteArray[index] += ' ';
        flag = false;
    }

    document.querySelector("#quote").innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>';

    if(textPosition++ != quoteArray[index].length){
        setTimeout('typewriter()',100);
    }
    else{
        //quoteArray[index] = ' ';
        setTimeout('typewriter', 3000);
        textPosition = 0;
        flag = true;

    }
}
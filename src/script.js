var quoteArray = ["Добро пожаловать на официальную страницу Динары Гиндуллиной"]
var index = 0
var textPosition = 0
var flag = true;
var destination = document.getElementById("typedtext")
var button = document.getElementById("Infobutton");

window.addEventListener('load',typewriter);
button.addEventListener('click',popup);
document.getElementById("greeting-text").textContent="Гиндуллина Динара Рафисовна"
function typewriter(){
    if(flag){
        quoteArray[index] += ' ';
        flag = false;
    }

    document.querySelector("#quote").innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>';

    if(textPosition++ != quoteArray[index].length){
        setTimeout('typewriter()',100);
    }
    else{
        console.log("!!!!!");
        
        textPosition = 0;
        flag = true;
        setTimeout('typewriter()', 10000);
    }
}

function popup(){
    $('.open-popup').on('click', function(){
        $('.popup-container').css('display','flex');
    });
    $('.close-button').on('click', function(){
        $('.popup-container').css('display','none');
    });
};

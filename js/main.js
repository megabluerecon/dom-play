
var juliet = document.getElementById('juliet-img');
juliet.style.opacity = "0.2";
var romeo = document.getElementById('romeo-img');
romeo.style.opacity = "0.2";

function highlight(el) {

    if(el.style.backgroundColor == 'white') { //if white, turn yellow
        el.style.backgroundColor='yellow';
    } else { //else turn white
        el.style.backgroundColor="white";
    }
}

function myAlert() {
    alert("I'm clicked!!");
}

function highlightActor(actor) {
    //alert(actor);
    
    let spans = document.querySelectorAll("#play span");
    for(const mySpan of spans) {
        if(actor == mySpan.dataset.actor) { //if white, turn yellow
            mySpan.style.backgroundColor='orange';
            if(mySpan.dataset.actor == "juliet") {
                juliet.style.opacity = "1";
                romeo.style.opacity = "0.2";
            } else {
                romeo.style.opacity = "1";
                juliet.style.opacity = "0.2";
            }
        } else { //else turn white
            mySpan.style.backgroundColor="white";
        }
    }
}

let spans = document.querySelectorAll("#play span");
 
console.log(spans);

for(const mySpan of spans) {
    //mySpan.addEventListener("click", myAlert);
    //alert(mySpan.dataset.actor);

    mySpan.addEventListener("click", function(ev){
        highlightActor(mySpan.dataset.actor);

    });
}



//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
      
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
 
 //set current year in span with id of this-year
 let d = new Date(); let thisYear = d.getFullYear();
 document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}   
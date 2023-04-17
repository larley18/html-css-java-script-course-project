
// var welcome_message=("this is a welcome message stored inside a variable");
// alert( welcome_message);
// console.log("this is a log")
// var myAge=28;
// if(myAge<1){console.log("you are baby")} else if (myAge < 10){console.log( "you are a big kid")} else if (myage<10) 
// {console.log("you're a big kid")}

var btn = document.getElementById("go-button");

function buttonclicked(){
    console.log("Button Clicked");
    btn.removeEventListener("click",buttonclicked);
    document.getElementById("text").innerHTML="Dont do it!";
}


btn.addEventListener("click",buttonclicked);


 

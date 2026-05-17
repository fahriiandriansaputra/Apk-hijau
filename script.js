let dark =
true;


document.getElementById(
"darkBtn"
)

.onclick = ()=>{


if(dark){

document.body.style.background=
"white";

document.body.style.color=
"black";

dark=false;

}

else{

document.body.style.background=
"#111";

document.body.style.color=
"white";

dark=true;

}


}



document.getElementById(
"search"
)

.addEventListener(
"keyup",

function(){

let cari =
this.value.toLowerCase();

let card =
document.querySelectorAll(
".apk-card"
);

card.forEach(
x=>{

x.style.display=

x.innerText
.toLowerCase()

.includes(cari)

?

"block"

:

"none";

});

});

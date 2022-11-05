let textarea = document.getElementById("textarea");
let l1 = document.getElementById("l1");
let l2 = document.getElementById("l2");
let l3 = document.getElementById("l3");
let l4 = document.getElementById("l4");
let l5 = document.getElementById("l5");
let l6 = document.getElementById("l6");
let l7 = document.getElementById("l7");
let l8 = document.getElementById("l8");
let l9 = document.getElementById("l9");
let l10 = document.getElementById("l10");
let l11 = document.getElementById("l11");
let l12 = document.getElementById("l12");
let l13 = document.getElementById("l13");
let l14 = document.getElementById("l14");
let l15 = document.getElementById("l15");
let ll1 = document.getElementById("ll1");
let ll2 = document.getElementById("ll2");
let ll3 = document.getElementById("ll3");
let ll4 = document.getElementById("ll4");
let ll5 = document.getElementById("ll5");
let ll6 = document.getElementById("ll6");
let ll7 = document.getElementById("ll7");
let ll8 = document.getElementById("ll8");
let ll9 = document.getElementById("ll9");
let ll10 = document.getElementById("ll10");
let ll11 = document.getElementById("ll11");
let ll12 = document.getElementById("ll12");
let ll13 = document.getElementById("ll13");
let ll14 = document.getElementById("ll14");
let lll1 = document.getElementById("lll1");
let lll2 = document.getElementById("lll2");
let lll3 = document.getElementById("lll3");
let lll4 = document.getElementById("lll4");
let lll5 = document.getElementById("lll5");
let lll6 = document.getElementById("lll6");
let lll7 = document.getElementById("lll7");
let lll8 = document.getElementById("lll8");
let lll9 = document.getElementById("lll9");
let lll10 = document.getElementById("lll10");
let lll11 = document.getElementById("lll11");
let lll12 = document.getElementById("lll12");
let lll13 = document.getElementById("lll13");
let llll1 = document.getElementById("llll1");
let llll2 = document.getElementById("llll2");
let llll3 = document.getElementById("llll3");
let llll4 = document.getElementById("llll4");
let llll5 = document.getElementById("llll5");
let llll6 = document.getElementById("llll6");
let llll7 = document.getElementById("llll7");
let llll8 = document.getElementById("llll8");
let llll9 = document.getElementById("llll9");
let llll10 = document.getElementById("llll10");
let llll11 = document.getElementById("llll11");
let llll12 = document.getElementById("llll12");
let lllll1 = document.getElementById("lllll1");
let lllll2 = document.getElementById("lllll2");
let lllll3 = document.getElementById("lllll3");
let lllll4 = document.getElementById("lllll4");
let lllll5 = document.getElementById("lllll5");
let lllll6 = document.getElementById("lllll6");
let lllll7 = document.getElementById("lllll7");
let lllll8 = document.getElementById("lllll8");
let lllll9 = document.getElementById("lllll9");
let lllll10 = document.getElementById("lllll10");
let lllll11 = document.getElementById("lllll11");

let x = 0;
let y = 0;


function sclear(){
    textarea.value='';
    textarea.focus();
}

llll1.addEventListener("click", function(){
    if(x == 0) {
    llll1.style.color="black";
    x = 1;
    }
    else {
        llll1.style.color="white";
        x = 0;
    }
    textarea.focus();
})

llll12.addEventListener("click", function(){
    if(x == 0) {
        llll12.style.color="black";
        
        x = 1;
        }
        else {
            llll12.style.color="white";
            x = 0;
        }
        textarea.focus();
})

lll1.addEventListener("click", function(){
    if(y == 0) {
        lll1.style.color="black";
        y = 1;
        }
        else {
            lll1.style.color="white";
            y = 0;
        }
    textarea.focus();
})

lllll5.addEventListener("click", function(){
    textarea.value += " ";
    textarea.focus();
})

l14.addEventListener("click", function(){
    let len = textarea.value.length-1;
    let val = textarea.value.slice(0,len);
    textarea.value = val; 
     textarea.focus();
 })
 
 ll1.addEventListener("click", function(){
     textarea.value += "    ";
     textarea.focus();
 }) 

l1.addEventListener("click", function(){
    let val="'";
    let val1="~";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

l2.addEventListener("click", function(){
    let val="1";
    let val1="!";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

l3.addEventListener("click", function(){
    let val="2";
    let val1="@";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

l4.addEventListener("click", function(){
    let val="3";
    let val1="#";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

l5.addEventListener("click", function(){
    let val="4";
    let val1="$";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

l6.addEventListener("click", function(){
    let val="5";
    let val1="%";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

l7.addEventListener("click", function(){
    let val="6";
    let val1="^";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

l8.addEventListener("click", function(){
    let val="7";
    let val1="&";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

l9.addEventListener("click", function(){
    let val="8";
    let val1="*";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

l10.addEventListener("click", function(){
    let val="9";
    let val1="(";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

l11.addEventListener("click", function(){
    let val="0";
    let val1=")";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

l12.addEventListener("click", function(){
    let val="-";
    let val1="_";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

l13.addEventListener("click", function(){
    let val="=";
    let val1="+";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll2.addEventListener("click", function(){
    let val="q";
    let val1="Q";
    if((x === 1 && y === 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll3.addEventListener("click", function(){
    let val="w";
    let val1="W";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll4.addEventListener("click", function(){
    let val="e";
    let val1="E";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll5.addEventListener("click", function(){
    let val="r";
    let val1="R";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll6.addEventListener("click", function(){
    let val="t";
    let val1="T";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll7.addEventListener("click", function(){
    let val="y";
    let val1="Y";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll8.addEventListener("click", function(){
    let val="u";
    let val1="U";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll9.addEventListener("click", function(){
    let val="i";
    let val1="I";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll10.addEventListener("click", function(){
    let val="o";
    let val1="O";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll11.addEventListener("click", function(){
    let val="p";
    let val1="P";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll12.addEventListener("click", function(){
    let val="[";
    let val1="{";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll13.addEventListener("click", function(){
    let val="]";
    let val1="}";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

ll14.addEventListener("click", function(){
    let val="\\";
    let val1="|";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lll2.addEventListener("click", function(){
    let val="a";
    let val1="A";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lll3.addEventListener("click", function(){
    let val="s";
    let val1="S";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lll4.addEventListener("click", function(){
    let val="d";
    let val1="D";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lll5.addEventListener("click", function(){
    let val="f";
    let val1="F";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lll6.addEventListener("click", function(){
    let val="g";
    let val1="G";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lll7.addEventListener("click", function(){
    let val="h";
    let val1="H";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lll8.addEventListener("click", function(){
    let val="j";
    let val1="J";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lll9.addEventListener("click", function(){
    let val="k";
    let val1="K";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lll10.addEventListener("click", function(){
    let val="l";
    let val1="L";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lll11.addEventListener("click", function(){
    let val=";";
    let val1=":";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lll12.addEventListener("click", function(){
    let val="'";
    let val1='"';
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lll13.addEventListener("click", function(){
    
    textarea.focus();
})

llll2.addEventListener("click", function(){
    let val="z";
    let val1="Z";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

llll3.addEventListener("click", function(){
    let val="x";
    let val1="X";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

llll4.addEventListener("click", function(){
    let val="c";
    let val1="C";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

llll5.addEventListener("click", function(){
    let val="v";
    let val1="V";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

llll6.addEventListener("click", function(){
    let val="b";
    let val1="B";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

llll7.addEventListener("click", function(){
    let val="n";
    let val1="N";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

llll8.addEventListener("click", function(){
    let val="m";
    let val1="M";
    if((x == 1 && y == 0) || (x == 0 && y == 1)) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

llll9.addEventListener("click", function(){
    let val=",";
    let val1="<";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

llll10.addEventListener("click", function(){
    let val=".";
    let val1=">";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

llll11.addEventListener("click", function(){
    let val="/";
    let val1="?";
    if(x == 1) {
        textarea.value += val1;
    }
    else {
        textarea.value += val;
    }
    textarea.focus();
})

lllll1.addEventListener("click", function(){
    
    textarea.focus();
})

lllll2.addEventListener("click", function(){
    
    textarea.focus();
})

lllll3.addEventListener("click", function(){
    
    textarea.focus();
})

lllll4.addEventListener("click", function(){
    
    textarea.focus();
})

lllll6.addEventListener("click", function(){
    
    textarea.focus();
})

lllll7.addEventListener("click", function(){
    
    textarea.focus();
})

lllll8.addEventListener("click", function(){
    
    textarea.focus();
})

lllll9.addEventListener("click", function(){
    
    textarea.focus();
})

lllll10.addEventListener("click", function(){
    
    textarea.focus();
})

lllll11.addEventListener("click", function(){
    
    textarea.focus();
})



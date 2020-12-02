
var smallImg = "./small.png";
var bigImg = "./big.png";
var display = 'block'

if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);  
    display ="none";
} else if (/(Android)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent); 
    display ="none";
}

function open_online()
{
 window.open(bigImg);
}

document.writeln("<div style=\" width:315px; height:485px; position:fixed; display: "+display+"; z-index: 99999; right:0; top:50px; background:url("+smallImg+") 100% 100%;background-repeat: no-repeat;background-size:contain;cursor:pointer;\" onclick=\"open_online();\"></div>");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h1=document.querySelector("h2");
    let randomColor = getRandomColor();
    h1.innerText = randomColor;

    let div= document.querySelector(".color");
    div.style.backgroundColor= randomColor;

    console.log("Color updated")
});

function getRandomColor(){
    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);

    let color =`rgb(${red},${green},${blue})`;
    return color;

}


// generate gradient color
function createHex() {
    var hexCode1 = "";
    var hexValues1 = "0123456789abcdef";
    
    for ( var i = 0; i < 6; i++ ) {
      hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
    }
    return hexCode1;
  }
  
  function generate() {
    
    var deg = Math.floor(Math.random() *360);
    
    var gradient = "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() +")";
    
    document.getElementById("output").innerHTML = gradient;
    document.getElementById("bg").style.background = gradient;
    
    console.log(hexCode1, hexCode2);
   
  }
  document.onload = generate();


//   Copy button to copy text


let copyText = document.querySelector(".copy-text");
copyText.querySelector(".btng").addEventListener("click", function () {
	let input = copyText.querySelector("input.text");
	input.select();
	Document.execCommand("copy");
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
});



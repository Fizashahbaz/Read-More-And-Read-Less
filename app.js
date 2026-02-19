

const hidetext= document.getElementById("hideText")

const textlink= document.getElementById("textLink")


textlink.onclick=()=>{
if(hidetext.style.display === "none"){
    hidetext.style.display="inline"
    textlink.textContent="Read Less"
}
else{
    hidetext.style.display="none"
    textlink.textContent="Read More"
}
}
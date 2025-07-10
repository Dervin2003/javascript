function myFn(){
    const headEl=document.getElementById("heading");
    headEl.innerHTML="New Java Script"
}

const myClsEl=document.getElementsByClassName("mycls");
for(let i=0;i<2;i++){
    console.log(myClsEl[i].innerText);
}
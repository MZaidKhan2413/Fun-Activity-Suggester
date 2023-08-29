let btn = document.getElementById("activityBtn");
let funBox = document.getElementById("funBox");
let url = "https://www.boredapi.com/api/activity";
async function getActivity(){
    let res = await fetch(url);
    let data = await res.json();
    let activity = await data.activity;
    funBox.innerText = activity;
}
btn.addEventListener("click",getActivity);


let explDiv = document.querySelector(".explainThis");
explDiv.hidden = true;
let btnDiv = document.querySelector(".whatIsThis");
btnDiv.addEventListener("click",function(){
    if(explDiv.hidden){
        explDiv.hidden = false;
    }
    else{
        explDiv.hidden = true;
    }
})
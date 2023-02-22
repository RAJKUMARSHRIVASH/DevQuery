

let askquesbutton= document.getElementById("askques");

askquesbutton.addEventListener("click",()=>{
    window.location.href="./ask.html"
})


getData()

async function getData()
{
    let data=await fetch("http://localhost:4500/questions/");
    let res=await data.json();
    console.log(res)
}

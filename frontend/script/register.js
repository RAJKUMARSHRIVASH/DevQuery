let registerForm = document.querySelector("form")
registerForm.addEventListener("submit",async (e)=>{
e.preventDefault()
let userObj = {}
let allInputTags = document.querySelectorAll("input")
for(let i=0;i<allInputTags.length;i++){
    userObj[allInputTags[i].id] = allInputTags[i].value
}
try{
        let register_request = await fetch("https://devquery.onrender.com/users/register",{
            method:"POST",
            headers:{
               "Content-Type": "application/json"
            },
            body:JSON.stringify(userObj)
        })
        const res = await register_request.json() 
        if(register_request.ok){
        alert(res.message)
        window.location.href ="./login.html"
        }else{
        
           alert(res.message)
        }
} catch (error) {
        console.log(error)
    }
    })



  


let loginForm = document.querySelector("form")
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        let allInputTags = document.querySelectorAll("input")
        try {
            let userObj = {}
            for (let i = 0; i < allInputTags.length; i++) {
                userObj[allInputTags[i].id] = allInputTags[i].value
            }
            let login_request = await fetch("https://devquery.onrender.com/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userObj)
            })
            const res = await login_request.json()
            console.log(res) 
            if(res.message == "login successfull"){
                alert(res.message)
                localStorage.setItem("token", res.token)
                localStorage.setItem("username", res.username)
            window.location.href = "./home.html"
            }else{
                alert("plz login again")
            }
            
        } catch (error) {
            console.log(error.message)
        }
    })


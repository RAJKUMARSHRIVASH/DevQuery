

document.getElementById("askques").addEventListener("click", () => {
    window.location.href = "ask.html"
})


let Maindiv = document.getElementById("renderhere");

let query = localStorage.getItem("query");



if (query) {
    console.log(query)
    callthisfun(query)

    async function callthisfun(query) {
        let data = await fetch(`https://devquery.onrender.com/questions/search/${query}`);
        let res = await data.json();
        console.log(res)
        // console.log(window.location.href)

        if (res.length == 0) {
            document.getElementById("ques").value = ""
            Maindiv.innerHTML = ""
            Maindiv.innerHTML = "<h3>Sorry, No questions are found</h3>"
        }

        else {
            document.getElementById("ques").value = ""
            Maindiv.innerHTML = ""
            renderData(res);
        }

        localStorage.removeItem("query");

    }

}
else {
    getData()
}



// all about fetching and rendering data
// getData()
async function getData() {
    let data = await fetch("https://devquery.onrender.com/questions/");
    let res = await data.json();
    console.log(res)
    renderData(res);
}

function renderData(array) {

    array.forEach((item, index) => {
        let div = document.createElement("div")
        div.setAttribute("class", "box")
        let ansdiv = document.createElement("div")
        ansdiv.setAttribute("class", "abox")
        let quesdiv = document.createElement("div")
        quesdiv.setAttribute("class", "qbox")

        let heading = document.createElement("p")
        heading.innerHTML = `<p style="display:inline;color:blue">${item.question.heading}</p>`;
        heading.setAttribute("id", item._id);
        heading.setAttribute("class", "heading");
        heading.setAttribute("onclick", "clickedQuestion(event)")

        let des = document.createElement("p")
        des.innerText = item.question.discreption;
        des.setAttribute("class", "des");

        let user = document.createElement("p")
        let time = document.createElement("p")
        let datetime = new Date(item.posted);
        // user.innerHTML = `<p style="display:inline;">Asked by</p> <p style="display:inline;color:blue">${item.name}</p> <p style="display:inline;">on</p> <p style="display:inline;color:blue">${datetime.getDate() + '-' + (datetime.getMonth() + 1) + '-' + datetime.getFullYear()}</p>`;
        user.innerHTML = `<p style="display:inline;">Asked by</p> <p style="display:inline;color:blue">${item.name}</p> <p style="display:inline;">on</p> <p style="display:inline;color:blue">${datetime.toLocaleString()}</p>`;

        let line = document.createElement("hr")

        let ans = document.createElement("p")
        ans.setAttribute("class", "answer");
        ans.innerHTML = `<p style="display:inline;">${item.answer.length}</p> <p style="display:inline;color:#006400"> Answers</p>`;
        ansdiv.append(ans)

        quesdiv.append(heading, des, user)

        div.append(ansdiv, quesdiv)

        document.getElementById("renderhere").append(div)
        document.getElementById("renderhere").append(line)
    })
}


// redirection to specific question
function clickedQuestion(event) {
    // console.log(event)
    console.log(event.target.parentElement.id)
    localStorage.setItem("question_id", event.target.parentElement.id)
    window.location.href = "questions.html"

}










// Sorting
let sortDesc = document.getElementById("latest");
let sortAsc = document.getElementById("old");
let mostAnswered = document.getElementById("hot");

sortDesc.addEventListener("click", async () => {
    let data = await fetch("https://devquery.onrender.com/questions/sortbydescending");
    let res = await data.json();
    console.log(res)
    Maindiv.innerHTML = ""
    renderData(res);
})


sortAsc.addEventListener("click", async () => {
    let data = await fetch("https://devquery.onrender.com/questions/sortbyascending");
    let res = await data.json();
    console.log(res)
    Maindiv.innerHTML = ""
    renderData(res);
})


mostAnswered.addEventListener("click", async () => {
    let data = await fetch("https://devquery.onrender.com/questions/sortbyanswercount");
    let res = await data.json();
    console.log(res)
    Maindiv.innerHTML = ""
    renderData(res);
})

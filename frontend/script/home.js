
getData()

async function getData() {
    let data = await fetch("http://localhost:8000/questions/");
    let res = await data.json();

    renderData(res);
}

function renderData(array) {
    console.log(array)

    array.forEach((item, index) => {
        let div = document.createElement("div")

        let heading = document.createElement("p")
        heading.innerText = item.question.heading;

        let des = document.createElement("p")
        des.innerText = item.question.discreption;

        let user = document.createElement("p")
        user.innerText = item.name;

        let time = document.createElement("p")
        let datetime = new Date(item.posted);
     
        time.innerText = datetime.getDate()+ '-' + (datetime.getMonth() + 1)+ '-' + datetime.getFullYear()  ;

        let line = document.createElement("hr")
        let ans = document.createElement("p")
        ans.innerText = "Answers"
        let anscount = document.createElement("p")
        anscount.innerText = item.answer.length

        div.append(heading, des, user, time, ans, anscount, line)

        document.getElementById("renderhere").append(div)
    })
}

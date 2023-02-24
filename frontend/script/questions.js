let question_div = document.getElementById("question");
let question_id = localStorage.getItem("question_id");

async function get_question(id){
    try {
        let question = await fetch(`http://localhost:8000/questions/${id}`);
        let res = await question.json();
        console.log(res)
        renderQuestion(res)
    } catch (error) {
        console.log(error)
    }
};

function renderQuestion(question){
    let temp = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = `Author: ${question.name}`;
    let h1 = document.createElement("h1");
    h1.innerText = question.question.heading;
    let p = document.createElement("p");
    p.setAttribute("id", "dis_que")
    p.innerHTML = question.question.innerhtml;
    let posted = document.createElement("p");
    let date = new Date(question.posted)
    posted.innerText = `Asked: ${date.toLocaleString()}`;
    temp.classList = "upper_name_date"
    temp.append(name, posted)
    question_div.append(h1, temp, p)

    question.answer.forEach((el)=>{
        let p = document.createElement("p");
        p.innerText = el.answer;
        document.getElementById("ans").append(p)
    })
}

get_question(question_id);
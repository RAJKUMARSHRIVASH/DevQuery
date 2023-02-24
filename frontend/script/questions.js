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
    let name = document.createElement("p");
    name.innerText = question.name;
    let h1 = document.createElement("h1");
    h1.innerText = question.question.heading;
    let p = document.createElement("p");
    p.innerText = question.question.discreption;
    let posted = document.createElement("p");
    let date = new Date(question.posted)
    posted.innerText = `posted: ${date.toLocaleString()}`;
    question_div.append(name, h1, p, posted)

    question.answer.forEach((el)=>{
        let p = document.createElement("p");
        p.innerText = el.answer;
        document.getElementById("question").append(p)
    })
}

get_question(question_id)
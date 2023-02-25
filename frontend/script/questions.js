let question_div = document.getElementById("question");
let question_id = localStorage.getItem("question_id");

async function get_question(id){
    try {
        if(localStorage.getItem("token")){
            let question = await fetch(`http://localhost:8000/questions/${id}`, {
                headers:{
                    'Authorization': localStorage.getItem("token")
                }
            });
            let res = await question.json();
            renderQuestion(res.data);
            if(res.own){
                document.getElementById("answerbox").innerHTML = null
                document.getElementById("answerbox").innerHTML = `<h3>Your Answer</h3>
                <div id="editor-container">
                </div><h1>You can't answer your own Questions</h1>`
            }
        }else{
            let question = await fetch(`http://localhost:8000/questions/${id}`);
            let res = await question.json();
            console.log(res)
            renderQuestion(res.data);
            
        }
    } catch (error) {
        console.log(error)
    }
};

document.getElementById("sub").onclick = ()=>{
    location.assign("../html/ask.html")
}

function renderQuestion(question){
    question_div.innerHTML = null;
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
    document.getElementById("ans_count").innerText =  `${question.answer.length} Answers`
    answers(question.answer)
}

function answers(data){
    document.getElementById("ans").innerHTML = null;
    data.forEach((el)=>{
        let div = document.createElement("div");
        div.classList = "answers_divs";
        let innerdiv1 = document.createElement("div");
        innerdiv1.classList = "answerer";
        let name = document.createElement("p");
        name.innerText = `Author: ${el.name}`;
        let posted = document.createElement("p");
        let date = new Date(el.time)
        posted.innerText = `Answered on: ${date.toLocaleString()}`;
        innerdiv1.append(name, posted)
        let innerdiv2 = document.createElement("div");
        let like = document.createElement("p");
        like.innerText = "👍"
        let count = document.createElement("p");
        count.innerText = el.like;
        innerdiv2.append(like, count)
        let p = document.createElement("p");
        p.innerHTML = el.answer;
        p.classList = "ans_p";
        let newdiv = document.createElement("div");
        newdiv.append(innerdiv1, p);
        div.append(innerdiv2, newdiv)
        document.getElementById("ans").append(div)
    })
}

get_question(question_id);
// mamoon part
let counter = 0;
let checkbox = 0;
let checkup;
const button = document.getElementById("add_btn");
const btn_stage_area = document.getElementById("to_stage_area");
const btn_plan_area = document.getElementById("to_plan_area");
const btn_to_finish = document.getElementById("to_finish_area");
const btn_back_to_stage_area = document.getElementById("back_to_stage_area");
let count = 0;
button.addEventListener("click", (event) => {
  // const jobs = prompt("enter your info");
  const editbtn = document.createElement("button");
  const checkbox = document.createElement("input");

  const box = document.createElement("div");

  const textfield = document.createElement("input");
  const btn = document.createElement("button");
  counter = counter + 1;
  const add_txt = document.getElementById("txt");
  const txt = document.getElementById("text_4");
  const job_container = document.getElementById("boxi");
  //txt.value = jobs;
  console.log("connection is working");
  const get_txt = add_txt.value;

  //box.innerHTML = "div <br> 5";
  textfield.setAttribute("type", "textfield");
  textfield.setAttribute("value", get_txt);
  textfield.disabled = true;
  btn.innerText = "x";
  editbtn.innerText = "E";
  checkbox.setAttribute("type", "radio");
  // box.style.backgroundColor = "orange";
  let div_info = `box ${counter}`;
  console.log("this is the div info ", div_info);
  //box.classList.add(div_info);
  //box.setAttribute("class", div_info);
  //box.setAttribute("id", div_info);
  box.setAttribute("id", div_info);
  box.appendChild(checkbox);
  box.appendChild(editbtn);
  box.appendChild(textfield);
  box.appendChild(btn);
  console.log(box.classList);
  job_container.appendChild(box);
  console.log(counter);
  editbtn.addEventListener("click", () => {
    if (count === 0) {
      editbtn.innerText = "un";
      textfield.disabled = false;
      count = count + 1;
      console.log("this the value of count must be 1", count);
    } else if (count === 1) {
      console.log("this the value of count must be 0", count);
      count = count - 1;
      textfield.disabled = true;
      editbtn.innerText = "E";
    }
  });

  editbtn.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 || event.key === "Enter") {
      console.log("Enter key was pressed");
      textfield.disabled = true;
      // 4. Perform the desired action.
      // Add your code here to handle the Enter key press event
    }
  });
  btn.addEventListener("click", () => {
    job_container.removeChild(box);
  });
  checkbox.addEventListener("click", () => {
    const stage23 = document.getElementById("stage2");
    const stage2 = document.getElementById(div_info);
    const move = document.getElementById("stage2");
    const inside = stage23.getAttribute("id");
    console.log(inside);
    // move.append(stage2);
    checkup = div_info;
  });
});
btn_stage_area.addEventListener("click", () => {
  console.log("to work area pressed");
  const stage23 = document.getElementById("stage2");
  const stage2 = document.getElementById(checkup);
  const move = document.getElementById("stage2");
  const inside = stage23.getAttribute("id");
  console.log(inside);
  move.append(stage2);
});
btn_plan_area.addEventListener("click", () => {
  console.log("to go back plan area pressed");
  const job_container = document.getElementById("boxi");
  const stage23 = document.getElementById("stage2");
  const stage2 = document.getElementById(checkup);
  const move = document.getElementById("stage2");
  const inside = stage23.getAttribute("id");
  console.log(inside);
  job_container.append(stage2);
});
btn_to_finish.addEventListener("click", () => {
  console.log("to go back plan area pressed");
  const job_container = document.getElementById("finished");
  const stage23 = document.getElementById("stage2");
  const stage2 = document.getElementById(checkup);
  const move = document.getElementById("stage2");
  const inside = stage23.getAttribute("id");
  console.log(inside);
  job_container.append(stage2);
});
btn_back_to_stage_area.addEventListener("click", () => {
  console.log("to go back plan area pressed");
  const job_container = document.getElementById("finished");
  const stage23 = document.getElementById("stage2");
  const stage2 = document.getElementById(checkup);
  const move = document.getElementById("stage2");
  const inside = stage23.getAttribute("id");
  console.log(inside);
  stage23.append(stage2);
});

// nita part

// document.addEventListener("DOMContentLoaded", function () {
//   const taskText = document.querySelector(".task-text");
//   const editButton = document.querySelector(".edit-button");

//   editButton.addEventListener("click", function () {
//     const currentText = taskText.textContent;
//     const newText = prompt("Edit the task:", currentText);
//     e.target.parentElement.edit();
//     if (newText !== null && newText !== "") {
//       taskText.textContent = newText;
//     }
//   });
// });
// vaishali part
// listContainer.addEventListener("click", function(e)){
//   if(e.target.tagName==="LI"){
//       e.target.classList.toggle("checked");
//       saveData();
//   }
//   else if(e.target.tagName==="SPAN")
//   {
//       e.target.parentElement.remove();
//       saveData();
//   }}

//   document.addEventListener('DOMContentLoaded', function() ){
//     const taskText = document.querySelector('.task-text');
//     const editButton = document.querySelector('.edit-button');
//     const editInput = document.querySelector('.edit-input');}

//     editButton.addEventListener('click', function() ){
//         taskText.style.display = 'none';
//         editButton.style.display = 'none';
//         editInput.style.display = 'block';
//         editInput.value = taskText.textContent;
//         editInput.focus()};
// kevin part

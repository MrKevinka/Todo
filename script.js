// mamoon part
let counter = 0;
let checkbox = 0;
let checkup;
const button = document.getElementById("add_btn");
const btn_stage_area = document.getElementById("to_stage_area");
const btn_plan_area = document.getElementById("to_plan_area");
button.addEventListener("click", (event) => {
  // const jobs = prompt("enter your info");
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
  textfield.setAttribute("readonly", "True");
  btn.innerText = "x";
  checkbox.setAttribute("type", "radio");
  box.style.backgroundColor = "orange";
  let div_info = `box ${counter}`;
  console.log("this is the div info ", div_info);
  //box.classList.add(div_info);
  //box.setAttribute("class", div_info);
  //box.setAttribute("id", div_info);
  box.setAttribute("id", div_info);
  box.appendChild(checkbox);
  box.appendChild(textfield);
  box.appendChild(btn);
  console.log(box.classList);
  job_container.appendChild(box);
  console.log(counter);
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

// nita part

// vaishali part

// kevin part

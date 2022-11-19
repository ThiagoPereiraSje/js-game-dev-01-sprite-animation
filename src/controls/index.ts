import style from "./index.module.css";

const animations = [
  "idle",
  "jump",
  "fall",
  "run",
  "dizzy",
  "sit",
  "roll",
  "bite",
  "ko",
  "getHit",
];

export const controls = document.createElement("div");
controls.className = style.controls;

const labelAnimation = document.createElement("label");
labelAnimation.htmlFor = "selectAnimation";
labelAnimation.innerText = "Choose Animation: ";

const selectAnimation = document.createElement("select");
selectAnimation.id = "selectAnimation";
selectAnimation.name = "selectAnimation";

animations.forEach((item) => {
  const option = document.createElement("option");
  option.value = item;
  option.innerText = item;

  selectAnimation.appendChild(option);
});

controls.appendChild(labelAnimation);
controls.appendChild(selectAnimation);

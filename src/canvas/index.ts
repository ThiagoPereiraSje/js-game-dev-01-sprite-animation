import style from "./index.module.css";
import spritesheet from "../spritesheet.png";
import { Frame, Animations } from "../types";

export const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.className = style.canvas;

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;
const playerImage = new Image();
playerImage.src = spritesheet;

const spriteAnimations: Animations = {};
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "getHit",
    frames: 4,
  },
];

animationStates.forEach((state, index) => {
  let frames: Frame = { loc: [] };

  for (let j = 0; j < state.frames; j++) {
    const positionX = j * SPRITE_WIDTH;
    const positionY = index * SPRITE_HEIGHT;

    frames.loc.push({ x: positionX, y: positionY });
  }

  spriteAnimations[state.name] = frames;
});

const staggerFrames = 5;
let gameFrames = 0;
let playerState = "idle";

export function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.drawImage(playerImage, 0, 0); v1
  // ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); V2
  // ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh); V3

  const position =
    Math.floor(gameFrames / staggerFrames) % spriteAnimations[playerState].loc.length;

  const frameX = SPRITE_WIDTH * position;
  const frameY = spriteAnimations[playerState].loc[position].y;

  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    SPRITE_WIDTH,
    SPRITE_HEIGHT,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );

  gameFrames++;
  requestAnimationFrame(animate);
}

window.addEventListener("load", () => {
  const selectAnimation = document.getElementById("selectAnimation") as HTMLSelectElement;

  selectAnimation.addEventListener("change", (e: any) => {
    playerState = e.target.value;
  });
});

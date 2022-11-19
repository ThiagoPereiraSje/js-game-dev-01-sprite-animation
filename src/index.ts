import "./style.css";
import spritesheet from "./spritesheet.png";
import { Frame, Animations } from "./types";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

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

console.log(spriteAnimations);

const staggerFrames = 5;
let gameFrames = 0;
let frameX = 0;
let frameY = 0;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.drawImage(playerImage, 0, 0); v1
  // ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); V2
  // ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh); V3

  let position =
    Math.floor(gameFrames / staggerFrames) %
    spriteAnimations["idle"].loc.length;

  frameX = SPRITE_WIDTH * position;

  ctx.drawImage(
    playerImage,
    frameX,
    frameY * SPRITE_HEIGHT,
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

animate();

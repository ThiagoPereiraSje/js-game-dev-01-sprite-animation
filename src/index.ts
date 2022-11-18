import './style.css';
import spritesheet from './spritesheet.png';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;
const playerImage = new Image();
playerImage.src = spritesheet;

let sx=0, sy=0;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.drawImage(playerImage, 0, 0); v1
  // ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); V2
  // ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh); V3

  ctx.drawImage(playerImage, sx, sy, SPRITE_WIDTH, SPRITE_HEIGHT, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  requestAnimationFrame(animate);
}

animate();
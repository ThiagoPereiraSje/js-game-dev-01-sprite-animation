import './style.css';
import Icon from './icon.png';
import printMe from './print';


const div = document.createElement('div');
const canvas = document.createElement('canvas');
const icon = new Image();
icon.src = Icon;

const btn = document.createElement('button');
btn.innerText = 'Click here!';
btn.onclick = printMe;

div.appendChild(canvas);
div.appendChild(icon);
div.appendChild(btn);

document.body.appendChild(div);
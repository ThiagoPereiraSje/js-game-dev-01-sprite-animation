import "./index.css";
import { canvas, animate } from "./canvas";
import { controls } from "./controls";

document.body.appendChild(canvas);
document.body.appendChild(controls);

animate();

import { v4 } from "uuid";
import GameObject from './GameObject'

export default class Game {
	#objects: GameObject[]
	#linked: boolean = false
	#canvas: HTMLCanvasElement
	#context: CanvasRenderingContext2D
	constructor(objects: GameObject[]) {
		this.#objects = objects;
		this.#canvas = null as unknown as HTMLCanvasElement;
		this.#context = null as unknown as CanvasRenderingContext2D;
	}

	start() {
		for (let i = 0; i < this.#objects.length; i++) {
			const object = this.#objects[i];
			object.id = v4(); // Assign IDs in the for loop
			object.onCreate();
		}

		// Game loop
		const gameLoop = () => {
			for (const object of this.#objects) {
				object.frameStart();
				if(this.#linked) {
					// Render
				}
				object.frameEnd();
			}
			requestAnimationFrame(gameLoop);
		};
		requestAnimationFrame(gameLoop);
	}
	link(canvas: HTMLCanvasElement) {
		if(canvas) {
			const context = canvas.getContext('2d');
			if(context) {
				this.#linked = true;
				this.#canvas = canvas;
				this.#context = context;
			}
		}
	}
}

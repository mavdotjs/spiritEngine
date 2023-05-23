import { v4 as uuid } from "uuid";
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
			object.id = uuid(); // Assign IDs in the for loop
			object.onCreate();
		}

		// Game loop
		const gameLoop = () => {
			for (const object of this.#objects) {
				object.frameStart();
				if(this.#linked) {
					this.renderObjects();
				}
				object.frameEnd();
			}
			requestAnimationFrame(gameLoop);
		};
		requestAnimationFrame(gameLoop);
	}

	renderObjects() {
		for(let object of this.#objects) {
			object.renderCurrentOutfit(this.#context)
		}
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

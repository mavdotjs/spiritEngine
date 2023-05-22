import { v4 } from "uuid";

import GameObject from './GameObject'
import ObjBehavior from "./ABSBehavior";


// Example behavior implementation
class PlayerController extends ObjBehavior {
	speed: number;
	constructor() {
		super();
	}

	onCreate() {
		console.log(`Object ${this.object.id} created in Game.`);
	}

	onframeStart() {
		console.log(
			`Frame start for object ${this.object.id} in Game.`
		);
	}

	onframeEnd() {
		console.log(`Frame end for object ${this.object.id} in Game.`);
	}
}

// Game class
export default class Game {
	#objects: GameObject[]
	constructor(objects: GameObject[]) {
		this.#objects = objects;
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
				// TODO: Render every GameObject
				object.frameEnd();
			}
			requestAnimationFrame(gameLoop);
		};
		requestAnimationFrame(gameLoop);
	}
}

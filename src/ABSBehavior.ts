import GameObject from './GameObject'
import { Action } from './main';
export default abstract class Behavior {
	// @ts-ignore (ignore not defined in constructor, it is defined later)
	object: GameObject;
	// @ts-ignore (ignore not defined in constructor, it is defined later)
	id: string;
	#triggers: Action[]
	constructor(triggers: Action[]) {
		this.#triggers = triggers;
	}

	callTrigger() {
		
	}
}

class PlayerController extends Behavior {
	speed: number = 5;
	constructor() {
		super([]);
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
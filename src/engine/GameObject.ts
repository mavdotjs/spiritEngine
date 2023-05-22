import Game from './Game'
import ObjBehavior from "./ABSBehavior";


export default class GameObject {
    id: string;
    game: Game;
    pos: Point;
    velocity: Point;
    behaviors: ObjBehavior[];

	constructor(game, behaviors = []) {
		Object.defineProperty(this, "behaviors", {
			value: behaviors,
			writable: false,
		});

		this.game = game;
		this.id = "";
	}

	onCreate() {
		for (const behavior of this.behaviors) {
			if (typeof behavior.onCreate === "function") {
				behavior.onCreate();
			}
		}
	}

	frameStart() {
		for (const behavior of this.behaviors) {
			if (typeof behavior.onframeStart === "function") {
				behavior.onframeStart();
			}
		}
	}

	frameEnd() {
		for (const behavior of this.behaviors) {
			if (typeof behavior.onframeEnd === "function") {
				behavior.onframeEnd();
			}
		}
	}
}
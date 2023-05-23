import Game from './Game'
import Behavior from './ABSBehavior';


export default class GameObject {
    id: string;
    game: Game;
    pos: Point;
    behaviors: Behavior[];

	constructor(game: Game, behaviors: Behavior[]) {
		this.game = game;
		this.id = "";
		this.pos = new Point(0, 0)
		this.behaviors = behaviors
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
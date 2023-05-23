import Game from './Game'
import Behavior from './ABSBehavior';


export default class GameObject {
    id: string;
    game: Game;
    pos: Point;
	#outfits: { [name: string]: HTMLImageElement };
	#currentOutfit: string;
    behaviors: Behavior[];

	constructor(game: Game, outfits: { [name: string]: HTMLImageElement }, behaviors: Behavior[]) {
		this.game = game;
		this.id = "";
		this.pos = new Point(0, 0)
		this.behaviors = behaviors
		this.#outfits = outfits
		this.#currentOutfit = ""
	}

	renderCurrentOutfit(context: CanvasRenderingContext2D) {
		context.drawImage(this.#outfits[this.#currentOutfit], this.pos.x, this.pos.y)
	}

	onCreate() {
		for (const behavior of this.behaviors) {
			behavior.callTrigger('onCreate');
		}
	}

	frameStart() {
		for (const behavior of this.behaviors) {
			behavior.callTrigger('onFrameStart');
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
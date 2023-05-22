import GameObject from './GameObject'

export default abstract class ObjBehavior {
	object: GameObject;
	constructor() {}
	onCreate() {}
	onframeStart() {}
	onframeEnd() {}
    onKeyPressed() {}
}
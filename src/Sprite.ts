class Sprite extends Phaser.GameObjects.Sprite {
    /**
     *
     */
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame)
        scene.sys.updateList.add(this)
        scene.sys.displayList.add(this)
        this.setScale(2)
        this.setOrigin(0, 0)
    }
}

export default Sprite

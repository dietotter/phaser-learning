class CharacterSprite extends Phaser.Physics.Arcade.Sprite {
    hp: number;
    /**
     *
     */
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame)
        scene.sys.updateList.add(this)
        scene.sys.displayList.add(this)
        this.setScale(2)
        this.setOrigin(0, 0)

        scene.physics.world.enableBody(this) // do this for the physics sprite
        this.setImmovable(true)

        // add custom property
        this.hp = 10
    }
}

export default CharacterSprite

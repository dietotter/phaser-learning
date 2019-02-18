import { SCENES, IMAGES, AUDIO, SPRITES } from "../constants"

class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: SCENES.MENU })
    }

    init() {

    }

    create() {

        // create images (z order)

        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.2, IMAGES.LOGO).setDepth(1)
        this.add.image(0, 0, IMAGES.TITLE).setOrigin(0).setDepth(0)
        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, IMAGES.PLAY)
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, IMAGES.OPTIONS)

        // create sprites

        let hoverSprite: Phaser.GameObjects.Sprite = this.add.sprite(100, 100, SPRITES.CAT)
        hoverSprite.setScale(2)

        // create audio, disable pauseonblur

        // this.sound.pauseOnBlur = false
        this.sound.play(AUDIO.TITLE, {
            loop: true
        })

        // create animations

        this.anims.create({
            key: 'walk',
            frameRate: 8,
            repeat: -1, // repeat forever
            frames: this.anims.generateFrameNumbers(SPRITES.CAT, {
                frames: [0, 1, 2, 3]
            })
        })

        // make image buttons interactive

        /*
            PointerEvents:
                pointerover - hovering
                pointerout - not hovering
                pointerup - click and release
                pointerdown - just click
        */

        playButton.setInteractive()

        playButton.on('pointerover', () => {
            hoverSprite.setVisible(true)
            hoverSprite.play('walk')
            hoverSprite.x = playButton.x - playButton.width
            hoverSprite.y = playButton.y
        })

        playButton.on('pointerout', () => {
            hoverSprite.setVisible(false)
        })

        playButton.on('pointerup', () => {
            console.log('clicked play')
        })

    }
}

export default MenuScene

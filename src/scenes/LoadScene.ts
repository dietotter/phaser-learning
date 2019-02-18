import { SCENES, IMAGES, AUDIO, SPRITES } from "../constants"

class LoadScene extends Phaser.Scene {
    constructor() {
        super({ key: SCENES.LOAD })
    }

    init() {

    }

    preload() {
        this.loadImages()
        this.loadAudio()
        this.loadSprites( {
            frameHeight: 32,
            frameWidth: 32
        })

        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        })

        /*
        Loader Events:
            complete - when done loading everything
            progress - loader number progress in decimal
         */

        this.load.on('progress', (percent: number) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50)
            console.log(percent)
        })
    }

    create() {
        this.scene.start(SCENES.MENU)
    }

    loadImages () {
        this.load.setPath('/assets/images')

        for (let prop in IMAGES) {
            this.load.image(IMAGES[prop], IMAGES[prop])
        }
    }

    loadAudio () {
        this.load.setPath('/assets/audio')

        for (let prop in AUDIO) {
            this.load.audio(AUDIO[prop], AUDIO[prop])
        }
    }

    loadSprites (frameConfig?: Phaser.Loader.FileTypes.ImageFrameConfig) {
        this.load.setPath('/assets/spritesheets')

        for (let prop in SPRITES) {
            this.load.spritesheet(SPRITES[prop], SPRITES[prop], frameConfig)
        }
    }
}

export default LoadScene

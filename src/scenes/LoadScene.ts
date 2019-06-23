import { SCENES, IMAGES, AUDIO, SPRITES } from "../constants"

class LoadScene extends Phaser.Scene {
    constructor() {
        super({ key: SCENES.LOAD })
    }

    init() {
        // instantiate plugins, receive data from other scenes here
    }

    preload() {
        // load assets here

        this.load.spritesheet('anna', './assets/spritesheets/anna.png', {frameHeight: 64, frameWidth: 64})
        // load atlases
        this.load.atlas('characters', './assets/spritesheets/characters.png', './assets/spritesheets/characters.json')
        this.load.atlas('daze', './assets/spritesheets/daze.png', './assets/spritesheets/daze.json')
        this.load.spritesheet('rapier', './assets/spritesheets/WEAPON_rapier.png', {frameWidth: 192, frameHeight: 192})

        // load image, spritesheet, sound
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

    // create() is the only mandatory method for scenes
    create() {
        // make game objects here
        this.scene.start(SCENES.MENU)
    }

    update() {
        // runs at 60fps (16ms per frame)
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

    loadSprites (frameConfig?: Phaser.Types.Loader.FileTypes.ImageFrameConfig) {
        this.load.setPath('/assets/spritesheets')

        for (let prop in SPRITES) {
            this.load.spritesheet(SPRITES[prop], SPRITES[prop], frameConfig)
        }
    }
}

export default LoadScene

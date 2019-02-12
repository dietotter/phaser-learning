import { SCENES } from "../constants"

class LoadScene extends Phaser.Scene {
    constructor() {
        super({ key: SCENES.LOAD })
    }

    init() {

    }

    preload() {
        this.load.image('title_bg', '../../assets/images/title_bg.jpg')
        this.load.image('options_button', '../../assets/images/options_button.png')
        this.load.image('play_button', '../../assets/images/play_button.png')
        this.load.image('logo', '../../assets/images/logo.png')

        this.load.spritesheet('cat', '../../assets/spritesheets/cat.png', {
            frameHeight: 32,
            frameWidth: 32
        })

        this.load.audio('title_music', '../../assets/audio/shuinvy-childhood.mp3')

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

        this.load.on('progress', (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50)
            console.log(percent)
        })
    }

    create() {
        this.scene.start(SCENES.MENU, {msg: 'hi from load scene'})
    }
}

export default LoadScene

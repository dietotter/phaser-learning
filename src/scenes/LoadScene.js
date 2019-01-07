import { SCENES } from "../constants"

class LoadScene extends Phaser.Scene {
    constructor() {
        super({ key: SCENES.LOAD })
    }

    init() {

    }

    preload() {

    }

    create() {
        this.scene.start(SCENES.MENU, 'hi from load scene')
    }
}

export default LoadScene

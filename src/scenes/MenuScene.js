import { SCENES } from "../constants"

class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: SCENES.MENU })
    }

    init(data) {
        console.log(data)
        console.log("Menu scene data ^")
    }

    create() {

    }
}

export default MenuScene

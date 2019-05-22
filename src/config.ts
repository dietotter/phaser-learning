import Scenes from './scenes/index'

const { LoadScene, MenuScene, PlayScene } = Scenes

export default {
    width: 800,
    height: 600,
    scene: [
        LoadScene, MenuScene, PlayScene
        // to add scenes dynamically:
        // this.scene.add(sceneName, SceneItself, autostart=false/true)
    ],
    render: {
        pixelArt: true // so that Phaser doesn't sharpen it
    }
}

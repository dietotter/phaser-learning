import Scenes from './scenes'

const { LoadScene, MenuScene } = Scenes

export default {
    width: 800,
    height: 600,
    scene: [
        LoadScene, MenuScene
    ],
    render: {
        pixelArt: true // so that Phaser doesn't sharpen it
    }
}

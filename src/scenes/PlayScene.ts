import { SCENES, SPRITES } from "../constants"
import Sprite from "../Sprite";
import CharacterSprite from "../CharacterSprite";

class PlayScene extends Phaser.Scene {
    anna!: Phaser.Physics.Arcade.Sprite
    hooded!: Phaser.Physics.Arcade.Sprite /*w/o physics: Phaser.GameObjects.Sprite*/
    keyboard!: {[index: string]: Phaser.Input.Keyboard.Key};
    assassins!: Phaser.Physics.Arcade.Group;
    fireAttacks!: Phaser.Physics.Arcade.Group;
    player!: Phaser.GameObjects.Container;
    constructor() {
        super({ key: SCENES.PLAY })
    }

    preload() {
        this.textures.addSpriteSheetFromAtlas("mandy", { frameHeight: 64, frameWidth: 64, atlas: "characters", frame: "mandy" })

        this.anims.create({
            key: 'mandyswordleft',
            frameRate: 5,
            frames: this.anims.generateFrameNumbers('mandy', {
                start: 169,
                end: 174
            })
        })

        this.anims.create({
            key: 'sword_left',
            frameRate: 5,
            frames: this.anims.generateFrameNumbers('rapier', {
                start: 6,
                end: 11
            }),
            showOnStart: true,
            hideOnComplete: true
        })

        this.anims.create({
            key: "left",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start: 9,
                end: 17
            })
        })
        this.anims.create({
            key: "down",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start: 18,
                end: 26
            })
        })
        this.anims.create({
            key: "up",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start: 0,
                end: 8
            })
        })
        this.anims.create({
            key: "right",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start: 27,
                end: 35
            })
        })
        this.anims.create({
            key: "blaze",
            duration: 50,
            frames: this.anims.generateFrameNames("daze", {
                prefix: "fire0",
                suffix: ".png",
                end: 55
            }),
            showOnStart: true,
            hideOnComplete: true
        })
        // texture is an image file, optimized for better processing
        // its created automatically when you load an image into Phaser
        this.textures.addSpriteSheetFromAtlas("hooded", { frameHeight: 64, frameWidth: 64, atlas: "characters", frame: "hooded" })

        this.load.image('terrain', './assets/images/terrain_atlas.png')
        this.load.image('items', './assets/images/items.png')

        this.load.tilemapTiledJSON('mappy', './assets/maps/untitled.json')

        console.log(this.textures.list)
    }

    create() {
        // creating container for layering a sprite on top of a sprite
        this.player = this.add.container(200, 200, [
            this.add.sprite(0, 0, 'mandy', 26),
            this.add.sprite(0, 0, 'rapier').setVisible(false)
        ]).setDepth(1).setScale(2)

        this.input.keyboard.on('keydown-F', () => {
            (this.player.list[0] as Phaser.GameObjects.Sprite).play('mandyswordleft')
            // @ts-ignore
            this.player.list[1].play('sword_left')
        })

        let cat = new Sprite(this, 100, 100, SPRITES.CAT)
        // add characters sprites
        this.anna = new CharacterSprite(this, 400, 400, 'anna', 26)
        this.hooded = this.physics.add.sprite(200, 200, 'hooded', 26).setScale(2)
        // add physics to existing sprite:
        // this.physics.add.existing(sprite)

        // add fire attacks group
        this.fireAttacks = this.physics.add.group()

        // add assassins group and add hooded to it
        this.assassins = this.physics.add.group({immovable: true})
        this.assassins.add(this.hooded)

        //@ts-ignore
        window.hooded = this.hooded // make hooded available in the console
        // e.g. from browser console:
        // > hooded.play('right')
        // > hooded.setTexture('mandy') // change texture
        // > hooded.setFrame(26) // change frame

        //@ts-ignore
        window.anna = this.anna

        /*
            gameobject events:
            - animationstart
            - animationrepeat
            - animationupdate
            - animationcomplete

        e.g.:
            anna.on('animationupdate', () => {
                console.log('luling')
            })
        */

        // set anna's hitbox to be smaller + set offset to position it
        this.anna.setSize(40, 50).setOffset(10, 10)
        // set anna to be unable to move out of the bounds of the canvas
        this.anna.setCollideWorldBounds(true)

        // add input
        // @ts-ignore
        this.keyboard = this.input.keyboard.addKeys('W, A, S, D')
        this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
            // if player holds the mouse down, play fire animation
            if (pointer.isDown) {
                let fire = this.add.sprite(pointer.worldX, pointer.worldY, 'daze', 'fire00.png').play('blaze')

                this.fireAttacks.add(fire)

                fire.on('animationcomplete', () => {
                    fire.destroy()
                })
            }
        })

        // let phaser automatically handle collisions by adding collider
        //@ts-ignore
        this.physics.world.addCollider(this.anna, this.assassins, (anna: CharacterSprite, hooded: Phaser.Physics.Arcade.Sprite) => {
            anna.hp--
            if (anna.hp <= 0) {
                anna.destroy()
            }
            hooded.destroy()
        })
        //@ts-ignore
        this.physics.world.addCollider(this.fireAttacks, this.assassins, (fireAttacks: Phaser.Physics.Arcade.Sprite, hooded: Phaser.Physics.Arcade.Sprite) => {
            fireAttacks.destroy()
            hooded.destroy()

            let x = 0, y = 0
            switch(Phaser.Math.Between(0,1)) {
                case 0: x = Phaser.Math.Between(0, this.game.renderer.width)
                    break
                case 1: y = Phaser.Math.Between(0, this.game.renderer.height)
                    break
            }
            // spawn 2 more assassins
            for(let i = 0; i < 2; i++) {
                this.assassins.add(this.physics.add.sprite(x, y, 'hooded', 26).setScale(2))
            }
        })

        let mappy = this.add.tilemap('mappy')

        let terrain = mappy.addTilesetImage('terrain_atlas', 'terrain')
        let itemset = mappy.addTilesetImage('items')

        // layers
        let botLayer = mappy.createStaticLayer('bot', [terrain], 0, 0).setDepth(-1)
        let topLayer = mappy.createStaticLayer('top', [terrain], 0, 0)

        // map collisions
        this.physics.add.collider(this.anna, topLayer)

            // by tile property
        topLayer.setCollisionByProperty({collides: true})

            // by tile index
        topLayer.setCollision([88,89,90,120,121,122,152,153,154])

        // map events

            // by location
        topLayer.setTileLocationCallback(7, 10, 3, 3, () => {
            alert('you\'re almost standing in lava.')

            // makes the callback trigger only once
            topLayer.setTileLocationCallback(7, 10, 3, 3, null)
        })

            // by index
        // @ts-ignore
        topLayer.setTileIndexCallback([30, 31], () => {
            console.log('you\'re standing on top of a tree.')
        })

        // INTERACTIVE TILES FROM OBJECT LAYER
        // 1114 = gid of item in json
        let items = mappy.createFromObjects('pickup', 1114, {key: SPRITES.CAT}).map((sprite: Phaser.GameObjects.Sprite) => {
            sprite.setScale(2)
            sprite.setInteractive()
        })

        this.input.on('gameobjectdown', (pointer: Phaser.Input.Pointer, obj: Phaser.GameObjects.Sprite) => {
            obj.destroy()
        })

        this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
            // pixel position to tile position
            let tile = mappy.getTileAt(mappy.worldToTileX(pointer.x), mappy.worldToTileY(pointer.y))

            if (tile) {
                console.log(tile)
            }
        })

        // make camera follow the player
        this.cameras.main.startFollow(this.anna)
        this.physics.world.setBounds(0, 0, mappy.widthInPixels, mappy.heightInPixels)

        // draw debug render hitboxes
        // topLayer.renderDebug(this.add.graphics(), {
        //     tileColor: null, // non-colliding tiles
        //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200), // colliding tiles
        //     faceColor: new Phaser.Display.Color(40, 39, 37, 255) // colliding face edges
        // })
    }

    update(time: number, delta: number) { // delta 16.666 @ 60fps
        // manually handle collisions
        //@ts-ignore
        // this.physics.world.collide(this.anna, this.hooded, () => {})

        // all assassins will be accelerating towards anna
        for (let i = 0; i < this.assassins.getChildren().length; i++) {
            this.physics.accelerateToObject(this.assassins.getChildren()[i], this.anna)
        }

        // active = alive
        if(this.anna.active) {
            // keyboard input
            if(this.keyboard.D.isDown) {
                this.anna.setVelocityX(128)
                // before physics:
                // this.anna.x = this.anna.x + 64 * (delta / 1000)
            }
            if(this.keyboard.A.isDown) {
                this.anna.setVelocityX(-128)
            }
            if(this.keyboard.W.isDown) {
                this.anna.setVelocityY(-128)
            }
            if(this.keyboard.S.isDown) {
                this.anna.setVelocityY(128)
            }

            if(this.keyboard.A.isUp && this.keyboard.D.isUp) { // not moving on X axis
                this.anna.setVelocityX(0)
            }
            if(this.keyboard.W.isUp && this.keyboard.S.isUp) { // not moving on Y axis
                this.anna.setVelocityY(0)
            }

            // play animations depending on velocity
            if (this.anna.body.velocity.x > 0) { // moving right
                this.anna.play('right', true)
            } else if (this.anna.body.velocity.x < 0) { // moving left
                this.anna.anims.playReverse('left', true)
            } else if (this.anna.body.velocity.y < 0) { // moving up
                this.anna.play('up', true)
            } else if (this.anna.body.velocity.y > 0) { // moving down
                this.anna.play('down', true)
            }
        }
    }
}

export default PlayScene

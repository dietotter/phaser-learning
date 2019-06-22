# Useful links:
- [Web PNG compressor using pngquant library][1]
- [JSON minifier][2]
- [Tiled][3]

[1]: https://imageoptim.com/online
[2]: https://codebeautify.org/jsonminifier
[3]: https://thorbjorn.itch.io/tiled

### Some tips:

- just a trick for texture packer, export it to phaser 3 ignore the upgrade to pro it will still make the png file and the json file, it just tints some of the images red. then if you immediately expot it as Phaser JsonArray (Phaser2) it will make the same atlas png file without the tinting and a second json file. just delete the 1st png and rename the 2nd one to the same as the 1st one and then do the reverse with the json file and it will work perfectly :)
- I only covered staticTileMap, which if you were to open a door or chop down a tree and wanted to change the sprite of the tile, it'd be hard. For that use dynamicTilemap : http://labs.phaser.io/index.html?dir=game%20objects/tilemap/dynamic/&q=

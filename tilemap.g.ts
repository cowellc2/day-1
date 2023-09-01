// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400080001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010303030101010101010101010101010103030301010101010303010101010102010101010101010101010101010101010303030303030303010101010101010101010101010101010404040404040404040404040404040404040404`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 . . . . . . . . . 
. . . . 2 2 2 . . . . . 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.chestClosed,sprites.castle.rock1,sprites.dungeon.hazardWater], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

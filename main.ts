let right: Image[] = []
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (!(princess.isHittingTile(CollisionDirection.Top))) {
        jump = 1
    }
    if (princess.isHittingTile(CollisionDirection.Left) || princess.isHittingTile(CollisionDirection.Left)) {
        princess.setVelocity(0, 0)
    }
})
function character () {
    left = [assets.image`princess`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 3 5 f . . . . . . 
        . . . . f e 5 5 5 e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e d f d f . . . . 
        . . f f e e e e d f d f . . . . 
        . f e f e e e d d 3 d f . . . . 
        . . f f e f f d d d f . . . . . 
        . f e e f f 3 5 f f . . . . . . 
        . . f f f d d 3 5 5 f . . . . . 
        . . . f d d f 3 3 3 f . . . . . 
        . . . . f f f 3 3 f . . . . . . 
        . . . . . f 3 3 3 3 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `]
    for (let value of right) {
        value.flipX()
    }
    still = img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ............5.55.5..............
        ............535535..............
        ............555555..............
        ............ffffff..............
        ...........feeeeeef.............
        ..........feeeeeeeef............
        ..........feeffffeef............
        ..........feffddffef............
        .........fefdfddfdfef...........
        .........fefd3dd3dfef...........
        .........feefddddfeef...........
        ........feef3ffff3feef..........
        .........ffd353353dff...........
        .........fddf3553fddf...........
        ..........ff333333ff............
        ..........f33333333f............
        ..........ffffffffff............
        ............ff..ff..............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `
    princess = sprites.create(still, SpriteKind.Player)
    controller.moveSprite(princess, 100, 0)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    princess,
    left,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.hearts)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump = 1
        princess.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    sprites.destroy(sprite, effects.fire, 200)
    info.changeLifeBy(-1)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.hearts, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(princess, effects.hearts, 500)
    game.gameOver(false)
})
let myEnemy: Sprite = null
let still: Image = null
let left: Image[] = []
let jump = 0
let princess: Sprite = null
character()
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999339999999999999999999999999999999999999933999999999999999999999999999999999999993399999999999999999999999999999999999999339999999999999999
    9999999999999999999999939999999999999999999999999999999999999993999999999999999999999999999999999999999399999999999999999999999999999999999999939999999999999999
    9999999999999999999993333999999999999999999999999999999999999333399999999999999999999999999999999999933339999999999999999999999999999999999993333999999999999999
    9999999999999999999933333999999999999999999999999999999999993333399999999999999999999999999999999999333339999999999999999999999999999999999933333999999999999999
    9999999999999999999333333399999999999999999999999999999999933333339999999999999999999999999999999993333333999999999999999999999999999999999333333399999999999999
    9999999999999999999333339399999999999999999999999999999999933333939999999999999999999999999999999993333393999999999999999999999999999999999333339399999999999999
    9999999999999999999933339999999999999999999999999999999999993333999999999999999999999999999999999999333399999999999999999999999999999999999933339999999999999999
    9999999999999999999333333399999999999999999999999999999999933333339999999999999999999999999999999993333333999999999999999999999999999999999333333399999999999999
    9999999999999999993333333399999999999999999999999999999999333333339999999999999999999999999999999933333333999999999999999999999999999999993333333399999999999999
    9999999999999999933333333333999999999999999999999999999993333333333399999999999999999999999999999333333333339999999999999999999999999999933333333333999999999999
    9933999999999993933333333333339999999999993399999999999393333333333333999999999999339999999999939333333333333399999999999933999999999993933333333333339999999999
    9333339999999993333333333333339999999999933333999999999333333333333333999999999993333399999999933333333333333399999999999333339999999993333333333333339999999999
    3333333399999999333333333333339999999999333333339999999933333333333333999999999933333333999999993333333333333399999999993333333399999999333333333333339999999999
    3333333339999b999933333333333399999999993333333339999b999933333333333399999999993333333339999b999933333333333399999999993333333339999b99993333333333339999999999
    d3333333399999b999933333336666669999999393333333399999b999933333336666669999999393333333399999b999933333336666669999999393333333399999b9999333333366666699999993
    d33333333399999bb33333336666666669999939933333333399999bb33333336666666669999939933333333399999bb33333336666666669999939933333333399999bb33333336666666669999939
    3333333399999999bb33333333663663999999993333333399999999bb33333333663663999999993333333399999999bb33333333663663999999993333333399999999bb3333333366366399999999
    333333333999999333b333333363336993999993333333333999999333b333333363336993999993333333333999999333b333333363336993999993333333333999999333b333333363336993999993
    3333b339999993333333333333333399999999333333b339999993333333333333333399999999333333b339999993333333333333333399999999333333b33999999333333333333333339999999933
    3333b333399999333333333333333999999999333333b333399999333333333333333999999999333333b333399999333333333333333999999999333333b33339999933333333333333399999999933
    3333b33b339999993333666663333339999999333333b33b339999993333666663333339999999333333b33b339999993333666663333339999999333333b33b33999999333366666333333999999933
    3333b33b339999936666666666333333333999333333b33b339999936666666666333333333999333333b33b339999936666666666333333333999333333b33b33999993666666666633333333399933
    3333b3b3339999666666666663344433333999333333b3b3339999666666666663344433333999333333b3b3339999666666666663344433333999333333b3b333999966666666666334443333399933
    3333bbb3443933366666666666634443339999933333bbb3443933366666666666634443339999933333bbb3443933366666666666634443339999933333bbb344393336666666666663444333999993
    3333bb34433366666666666666663444339999333333bb34433366666666666666663444339999333333bb34433366666666666666663444339999333333bb3443336666666666666666344433999933
    333bb33333666666666666666666633333333333333bb33333666666666666666666633333333333333bb33333666666666666666666633333333333333bb33333666666666666666666633333333333
    33bb333366666666666666663bb333333333b33333bb333366666666666666663bb333333333b33333bb333366666666666666663bb333333333b33333bb333366666666666666663bb333333333b333
    33b3333433336663663663663bb333443333b33333b3333433336663663663663bb333443333b33333b3333433336663663663663bb333443333b33333b3333433336663663663663bb333443333b333
    33b3b33333366636633666333bb333b44333b33333b3b33333366636633666333bb333b44333b33333b3b33333366636633666333bb333b44333b33333b3b33333366636633666333bb333b44333b333
    3bb3b33333363336333336333bb333b33333b3333bb3b33333363336333336333bb333b33333b3333bb3b33333363336333336333bb333b33333b3333bb3b33333363336333336333bb333b33333b333
    3bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b33
    3bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b33
    3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb
    bb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333b
    3b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb33333333333
    3b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb33344433333
    3b666334443333333333b3333bbb3334443333333b666334443333333333b3333bbb3334443333333b666334443333333333b3333bbb3334443333333b666334443333333333b3333bbb333444333333
    66666633444333333333b3333bbb33444336666666666633444333333333b3333bbb33444336666666666633444333333333b3333bbb33444336666666666633444333333333b3333bbb334443366666
    66663333b44433333333b3333bbb33333666666666663333b44433333333b3333bbb33333666666666663333b44433333333b3333bbb33333666666666663333b44433333333b3333bbb333336666666
    66666663b33333333b33b3333bbb33336666666666666663b33333333b33b3333bbb33336666666666666663b33333333b33b3333bbb33336666666666666663b33333333b33b3333bbb333366666666
    66666666663333333b33b3333bbbb3666636666666666666663333333b33b3333bbbb3666636666666666666663333333b33b3333bbbb3666636666666666666663333333b33b3333bbbb36666366666
    66666366663333333b33b3333bbb6666b633663666666366663333333b33b3333bbb6666b633663666666366663333333b33b3333bbb6666b633663666666366663333333b33b3333bbb6666b6336636
    3666333bb3bb33333b33b3333bbbb666b33663333666333bb3bb33333b33b3333bbbb666b33663333666333bb3bb33333b33b3333bbbb666b33663333666333bb3bb33333b33b3333bbbb666b3366333
    33b6333bb3b333333bb3bb333bbbb333bb33333333b6333bb3b333333bb3bb333bbbb333bb33333333b6333bb3b333333bb3bb333bbbb333bb33333333b6333bb3b333333bb3bb333bbbb333bb333333
    33b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb333333
    33b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb333333
    33b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb333333
    333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333
    333bb3bbb3333663666336b33bbbb333bb33b333333bb3bbb3333663666336b33bbbb333bb33b333333bb3bbb3333663666336b33bbbb333bb33b333333bb3bbb3333663666336b33bbbb333bb33b333
    333bbbbbb3336666666666663bbbbb33bb33b333333bbbbbb3336666666666663bbbbb33bb33b333333bbbbbb3336666666666663bbbbb33bb33b333333bbbbbb3336666666666663bbbbb33bb33b333
    3333bbbbb336666666666666bbbbbb3bb33bb3333333bbbbb336666666666666bbbbbb3bb33bb3333333bbbbb336666666666666bbbbbb3bb33bb3333333bbbbb336666666666666bbbbbb3bb33bb333
    33333bbbb333663666666636bbbbbb3bb33b333333333bbbb333663666666636bbbbbb3bb33b333333333bbbb333663666666636bbbbbb3bb33b333333333bbbb333663666666636bbbbbb3bb33b3333
    33333bbb3344336666663633bbbbbb3bb3b3333333333bbb3344336666663633bbbbbb3bb3b3333333333bbb3344336666663633bbbbbb3bb3b3333333333bbb3344336666663633bbbbbb3bb3b33333
    33333bbb3333366336633633bbbbbb3bbb33333333333bbb3333366336633633bbbbbb3bbb33333333333bbb3333366336633633bbbbbb3bbb33333333333bbb3333366336633633bbbbbb3bbb333333
    33333bbb333b3633333333333bbbbbbb3333333333333bbb333b3633333333333bbbbbbb3333333333333bbb333b3633333333333bbbbbbb3333333333333bbb333b3633333333333bbbbbbb33333333
    33333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb33333333
    33333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb33333333
    33333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb333333333
    33333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb3333333333
    33333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb3333333333
    33333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb3333333333
    3333bbb333b33333333399333bbbbb39333333333333bbb333b33333333399333bbbbb39333333333333bbb333b33333333399333bbbbb39333333333333bbb333b33333333399333bbbbb3933333333
    3333bbb333b3333333333993bbbbbb33993333933333bbb333b3333333333993bbbbbb33993333933333bbb333b3333333333993bbbbbb33993333933333bbb333b3333333333993bbbbbb3399333393
    3333bbb3bbb3333333333333bbbbbbb3393339933333bbb3bbb3333333333333bbbbbbb3393339933333bbb3bbb3333333333333bbbbbbb3393339933333bbb3bbb3333333333333bbbbbbb339333993
    9933bbbbbb33333333933333bbbbbbb3333339339933bbbbbb33333333933333bbbbbbb3333339339933bbbbbb33333333933333bbbbbbb3333339339933bbbbbb33333333933333bbbbbbb333333933
    3993bbbbb339933339933339bbbbbbb9333333333993bbbbb339933339933339bbbbbbb9333333333993bbbbb339933339933339bbbbbbb9333333333993bbbbb339933339933339bbbbbbb933333333
    3999bbbbb333993399339399bbbbbbb9333933333999bbbbb333993399339399bbbbbbb9333933333999bbbbb333993399339399bbbbbbb9333933333999bbbbb333993399339399bbbbbbb933393333
    3999bbb33333333393399999bbbbbbb9939933933999bbb33333333393399999bbbbbbb9939933933999bbb33333333393399999bbbbbbb9939933933999bbb33333333393399999bbbbbbb993993393
    9999bbb93333333333399999bbbbbbb9999339999999bbb93333333333399999bbbbbbb9999339999999bbb93333333333399999bbbbbbb9999339999999bbb93333333333399999bbbbbbb999933999
    9999bbb93339339993399999bbbbbbb9999999999999bbb93339339993399999bbbbbbb9999999999999bbb93339339993399999bbbbbbb9999999999999bbb93339339993399999bbbbbbb999999999
    9999bbb93399939999399999bbbbbbb9999999999999bbb93399939999399999bbbbbbb9999999999999bbb93399939999399999bbbbbbb9999999999999bbb93399939999399999bbbbbbb999999999
    9999bbb99999999999999999bbbbbbb9999999999999bbb99999999999999999bbbbbbb9999999999999bbb99999999999999999bbbbbbb9999999999999bbb99999999999999999bbbbbbb999999999
    9999bbb39999999999999999bbbbbbb9999999999999bbb39999999999999999bbbbbbb9999999999999bbb39999999999999999bbbbbbb9999999999999bbb39999999999999999bbbbbbb999999999
    9999bbb39999999999999999bbbbbbb9999999999999bbb39999999999999999bbbbbbb9999999999999bbb39999999999999999bbbbbbb9999999999999bbb39999999999999999bbbbbbb999999999
    9999bbbb9999999999999999bbbbbbb9999999999999bbbb9999999999999999bbbbbbb9999999999999bbbb9999999999999999bbbbbbb9999999999999bbbb9999999999999999bbbbbbb999999999
    9999bbbb9999999999999999bbbbbbb9999999999999bbbb9999999999999999bbbbbbb9999999999999bbbb9999999999999999bbbbbbb9999999999999bbbb9999999999999999bbbbbbb999999999
    9999bbbb9999999999999999bbbbbbb9999999999999bbbb9999999999999999bbbbbbb9999999999999bbbb9999999999999999bbbbbbb9999999999999bbbb9999999999999999bbbbbbb999999999
    9999bbbb3999999999999999bbbbbbb9999999999999bbbb3999999999999999bbbbbbb9999999999999bbbb3999999999999999bbbbbbb9999999999999bbbb3999999999999999bbbbbbb999999999
    9999bbbbb999999999999999bbbbbbb9999999999999bbbbb999999999999999bbbbbbb9999999999999bbbbb999999999999999bbbbbbb9999999999999bbbbb999999999999999bbbbbbb999999999
    9999bbbbb999999999999999bbbbbbb9999999999999bbbbb999999999999999bbbbbbb9999999999999bbbbb999999999999999bbbbbbb9999999999999bbbbb999999999999999bbbbbbb999999999
    9999bbbbb399999999999993bbbbbbb3999999999999bbbbb399999999999993bbbbbbb3999999999999bbbbb399999999999993bbbbbbb3999999999999bbbbb399999999999993bbbbbbb399999999
    9999bbbbb39999999999999bbbbbbbb3999999999999bbbbb39999999999999bbbbbbbb3999999999999bbbbb39999999999999bbbbbbbb3999999999999bbbbb39999999999999bbbbbbbb399999999
    9993bbbbbb9999999999999bbbbbbbbb999999999993bbbbbb9999999999999bbbbbbbbb999999999993bbbbbb9999999999999bbbbbbbbb999999999993bbbbbb9999999999999bbbbbbbbb99999999
    9993bbbbbb9999999999993bbbbbbbbb999999999993bbbbbb9999999999993bbbbbbbbb999999999993bbbbbb9999999999993bbbbbbbbb999999999993bbbbbb9999999999993bbbbbbbbb99999999
    773bbbbbbb399999999999bbbbbbbb7777777777773bbbbbbb399999999999bbbbbbbb7777777777773bbbbbbb399999999999bbbbbbbb7777777777773bbbbbbb399999999999bbbbbbbb7777777777
    77777777bbb99999999933bbb77777777777777777777777bbb99999999933bbb77777777777777777777777bbb99999999933bbb77777777777777777777777bbb99999999933bbb777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
tiles.setCurrentTilemap(tilemap`level1`)
princess.ay = 125
controller.moveSprite(princess, 100, 0)
jump = 1
scene.cameraFollowSprite(princess)
let strawberry = sprites.create(img`
    . . . . . . 7 6 . . . . . . . . 
    . . . . . 7 7 6 6 . . . 6 8 . . 
    . . . e e e 7 7 6 6 . 6 7 8 . . 
    . . e 3 3 3 3 e 7 6 6 7 6 . . . 
    . e 3 3 2 2 3 7 7 7 7 7 8 6 . . 
    . e 3 2 2 3 6 7 7 7 6 7 6 8 8 . 
    e e 2 4 3 3 6 7 7 6 3 7 7 6 . 1 
    e e 2 2 3 3 6 7 6 3 3 6 7 7 6 . 
    e 3 2 3 3 3 6 6 3 3 3 e 7 7 6 . 
    e 3 2 3 3 2 3 3 3 2 3 3 e 7 6 . 
    e 3 2 3 3 3 3 3 3 3 3 3 e 7 6 . 
    e 3 3 3 3 3 3 3 2 e 3 e e . . . 
    e 3 3 e 3 3 2 3 3 e e e . . . . 
    e 3 3 3 3 e 3 3 e e e . . . . . 
    e e e e e e e e . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
game.showLongText("Escape enemies and collect fruits before timer run out!!   Dont forget to press B", DialogLayout.Full)
game.setGameOverScoringType(game.ScoringType.HighScore)
game.setDialogTextColor(3)
game.setGameOverScoringType(game.ScoringType.HighScore)
tiles.placeOnTile(princess, tiles.getTileLocation(8, 11))
info.setScore(0)
game.onUpdateInterval(2000, function () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c 2 2 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . c c c c c c c . . . 
        . . . . . c f f 6 6 f f 7 c . . 
        . . . . c 7 6 6 6 6 6 6 7 6 c . 
        . . . c 7 7 7 7 7 7 7 7 7 7 c . 
        . . . c 7 8 1 f f 1 6 7 7 7 c . 
        . . . f 6 f 1 f f 1 f 7 7 7 f . 
        . . . f 6 f 2 2 2 2 f 7 7 7 f . 
        . . c c 6 f 2 2 2 2 f 7 7 6 f . 
        . c 7 7 7 7 2 2 2 2 7 7 f c . . 
        c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
        f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
        f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 6 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . c c c c c c c . . . 
        . . . . . c f f 6 6 f f 7 c . . 
        . . . . c 7 6 6 6 6 6 6 7 6 c . 
        . . . c 7 7 7 7 7 7 7 7 7 7 c . 
        . . . c 7 8 1 f f 1 6 7 7 7 c . 
        . . . f 6 f 1 f f 1 f 7 7 7 f . 
        . . . f 6 f 2 2 2 2 f 7 7 7 f . 
        . . c c 6 f 2 2 2 2 f 7 7 6 f . 
        . c 7 7 7 7 2 2 2 2 7 7 f c . . 
        c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
        f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
        f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 6 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . c c c c c c 6 6 6 c c . . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `],
    500,
    true
    )
    myEnemy.follow(princess, 50)
})
game.onUpdateInterval(200, function () {
    tiles.placeOnRandomTile(sprites.create(img`
        . . . . . . 7 6 . . . . . . . . 
        . . . . . 7 7 6 6 . . . 6 8 . . 
        . . . e e e 7 7 6 6 . 6 7 8 . . 
        . . e 3 3 3 3 e 7 6 6 7 6 . . . 
        . e 3 3 2 2 3 7 7 7 7 7 8 6 . . 
        . e 3 2 2 3 6 7 7 7 6 7 6 8 8 . 
        e e 2 4 3 3 6 7 7 6 3 7 7 6 . 1 
        e e 2 2 3 3 6 7 6 3 3 6 7 7 6 . 
        e 3 2 3 3 3 6 6 3 3 3 e 7 7 6 . 
        e 3 2 3 3 2 3 3 3 2 3 3 e 7 6 . 
        e 3 2 3 3 3 3 3 3 3 3 3 e 7 6 . 
        e 3 3 3 3 3 3 3 2 e 3 e e . . . 
        e 3 3 e 3 3 2 3 3 e e e . . . . 
        e 3 3 3 3 e 3 3 e e e . . . . . 
        e e e e e e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food), assets.tile`transparency16`)
})

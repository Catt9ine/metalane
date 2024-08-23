enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const invis = SpriteKind.create()
    export const blu = SpriteKind.create()
    export const reg = SpriteKind.create()
    export const bluto = SpriteKind.create()
    export const regto = SpriteKind.create()
}
namespace StatusBarKind {
    export const combobo = StatusBarKind.create()
}
statusbars.onStatusReached(StatusBarKind.combobo, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    effects.starField.endScreenEffect()
    effects.confetti.startScreenEffect()
    Combo_stat.setColor(5, 0, 2)
    tiles.setTilemap(tilemap`level3`)
    Shpeed = 50
    characterAnimations.loopFrames(
    Fold,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 1 f . . . . . . 
        . . . . . . f 5 1 f . . . . . . 
        . . . . . f 5 f f 1 f . . . . . 
        . . . . f 5 f 9 9 f 1 f . . . . 
        . . . . f 5 f 9 9 f 1 f . . . . 
        . . . f 5 5 f 9 9 f 5 1 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 1 f . . 
        . . f 4 5 f 5 5 5 5 f 5 5 f . . 
        . . f 4 f f 5 5 5 5 f f 5 f . . 
        . . f f . . f 5 5 f . . f f . . 
        . . f f . . . f f . . . f f . . 
        . . f . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 1 f . . . . . . 
        . . . . . . f 5 f 1 f . . . . . 
        . . . . . f 5 5 9 f f . . . . . 
        . . . . . f 5 5 9 f 1 f . . . . 
        . . . . f 4 5 5 9 f 5 1 f . . . 
        . . . . f 4 5 5 5 5 5 1 f f . . 
        . . . . f 4 5 5 5 5 f 5 1 f . . 
        . . . . f f f f 5 5 f f 1 f . . 
        . . . . f f . f f f . f 1 f . . 
        . . . . f . . . f . . . f f . . 
        . . . . . . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 1 f . . . . . . 
        . . . . . . f 5 1 f . . . . . . 
        . . . . . f 5 f f 1 f . . . . . 
        . . . . f 5 f 9 9 f 1 f . . . . 
        . . . . f 5 f 9 9 f 1 f . . . . 
        . . . f 5 5 f 9 9 f 5 1 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 1 f . . 
        . . f 4 5 f 5 5 5 5 f 5 5 f . . 
        . . f 4 f f 5 5 5 5 f f 5 f . . 
        . . f f . . f 5 5 f . . f f . . 
        . . f f . . . f f . . . f f . . 
        . . f . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 f 5 f . . . . . . 
        . . . . . f f 9 5 1 f . . . . . 
        . . . . f 5 f 9 5 1 f . . . . . 
        . . . f 5 5 f 9 5 5 1 f . . . . 
        . . f f 5 5 5 5 5 5 1 f . . . . 
        . . f 4 5 f 5 5 5 5 1 f . . . . 
        . . f 4 f f 5 5 f f f f . . . . 
        . . f 4 f . f f f . f f . . . . 
        . . f f . . . f . . . f . . . . 
        . . f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.NotMoving)
    )
    music.beamUp.play()
    if (sprites.readDataBoolean(foldtoo, "k")) {
        characterAnimations.loopFrames(
        Fold,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 5 9 f . . . . . . 
            . . . . . . f 5 9 f . . . . . . 
            . . . . . f 5 f f 9 f . . . . . 
            . . . . f 5 f 9 9 f 9 f . . . . 
            . . . . f 5 f 9 9 f 9 f . . . . 
            . . . f 5 5 f 9 9 f 5 9 f . . . 
            . . f 6 5 5 5 5 5 5 5 5 9 f . . 
            . . f 6 5 f 5 5 5 5 f 5 5 f . . 
            . . f 6 f f 5 5 5 5 f f 5 f . . 
            . . f f . . f 5 5 f . . f f . . 
            . . f f . . . f f . . . f f . . 
            . . f . . . . . . . . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 9 f . . . . . . 
            . . . . . . f 5 f 9 f . . . . . 
            . . . . . f 5 5 9 f f . . . . . 
            . . . . . f 5 5 9 f 9 f . . . . 
            . . . . f 6 5 5 9 f 5 9 f . . . 
            . . . . f 6 5 5 5 5 5 9 f f . . 
            . . . . f 6 5 5 5 5 f 5 9 f . . 
            . . . . f f f f 5 5 f f 9 f . . 
            . . . . f f . f f f . f 9 f . . 
            . . . . f . . . f . . . f f . . 
            . . . . . . . . . . . . f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 5 9 f . . . . . . 
            . . . . . . f 5 9 f . . . . . . 
            . . . . . f 5 f f 9 f . . . . . 
            . . . . f 5 f 9 9 f 9 f . . . . 
            . . . . f 5 f 9 9 f 9 f . . . . 
            . . . f 5 5 f 9 9 f 5 9 f . . . 
            . . f 6 5 5 5 5 5 5 5 5 9 f . . 
            . . f 6 5 f 5 5 5 5 f 5 5 f . . 
            . . f 6 f f 5 5 5 5 f f 5 f . . 
            . . f f . . f 5 5 f . . f f . . 
            . . f f . . . f f . . . f f . . 
            . . f . . . . . . . . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 f 5 f . . . . . . 
            . . . . . f f 9 5 9 f . . . . . 
            . . . . f 5 f 9 5 9 f . . . . . 
            . . . f 5 5 f 9 5 5 9 f . . . . 
            . . f f 5 5 5 5 5 5 9 f . . . . 
            . . f 6 5 f 5 5 5 5 9 f . . . . 
            . . f 6 f f 5 5 f f f f . . . . 
            . . f 6 f . f f f . f f . . . . 
            . . f f . . . f . . . f . . . . 
            . . f f . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.NotMoving)
        )
    }
})
controller.combos.attachCombo("udud", function () {
    sprites.setDataBoolean(data, "burg", true)
    characterAnimations.loopFrames(
    Fold,
    [img`
        . . . . . . . . . . . . . . . 
        . . . . . c c b b b . . . . . 
        . . . c c b 4 4 4 b b b . . . 
        . . c c 4 4 4 5 4 4 4 b c . . 
        . . e 4 4 4 4 4 4 5 4 4 e . . 
        . e b 4 5 4 4 4 4 4 4 4 b c . 
        . e e e 4 4 4 4 4 4 5 e e e . 
        . 8 7 2 e e e e e e e 2 7 8 . 
        . e 6 6 2 2 2 2 2 2 2 6 c e . 
        . e c 6 7 6 6 7 6 7 6 c c e . 
        . e b e 8 8 c 8 c c 8 e b e . 
        . e e b e c c e e c e b e e . 
        . . e e b b 4 4 4 4 4 e e . . 
        . . . . c c c e e e e . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . c c b b b . . . . . 
        . . . c c b 4 4 4 b b b . . . 
        . . c c 4 4 4 5 4 4 4 b c . . 
        . . e 4 4 4 4 4 4 5 4 4 e . . 
        . e b 4 5 4 4 4 4 4 4 4 b c . 
        . e e e 4 4 4 4 4 4 5 e e e . 
        . 8 7 2 e e e e e e e 2 7 8 . 
        . e 6 6 2 2 2 2 2 2 2 6 c e . 
        . e c 6 7 6 6 7 6 7 6 c c e . 
        . e b e 8 8 c 8 c c 8 e b e . 
        . e e b e c c e e c e b e e . 
        . . e e b b 4 4 4 4 4 e e . . 
        . . . . c c c e e e e . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . c c b b b . . . . . 
        . . . c c b 4 4 4 b b b . . . 
        . . c c 4 4 4 5 4 4 4 b c . . 
        . . e 4 4 4 4 4 4 5 4 4 e . . 
        . e b 4 5 4 4 4 4 4 4 4 b c . 
        . e e e 4 4 4 4 4 4 5 e e e . 
        . 8 7 2 e e e e e e e 2 7 8 . 
        . e 6 6 2 2 2 2 2 2 2 6 c e . 
        . e c 6 7 6 6 7 6 7 6 c c e . 
        . e b e 8 8 c 8 c c 8 e b e . 
        . e e b e c c e e c e b e e . 
        . . e e b b 4 4 4 4 4 e e . . 
        . . . . c c c e e e e . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . c c b b b . . . . . 
        . . . c c b 4 4 4 b b b . . . 
        . . c c 4 4 4 5 4 4 4 b c . . 
        . . e 4 4 4 4 4 4 5 4 4 e . . 
        . e b 4 5 4 4 4 4 4 4 4 b c . 
        . e e e 4 4 4 4 4 4 5 e e e . 
        . 8 7 2 e e e e e e e 2 7 8 . 
        . e 6 6 2 2 2 2 2 2 2 6 c e . 
        . e c 6 7 6 6 7 6 7 6 c c e . 
        . e b e 8 8 c 8 c c 8 e b e . 
        . e e b e c c e e c e b e e . 
        . . e e b b 4 4 4 4 4 e e . . 
        . . . . c c c e e e e . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . c c b b b . . . . . 
        . . . c c b 4 4 4 b b b . . . 
        . . c c 4 4 4 5 4 4 4 b c . . 
        . . e 4 4 4 4 4 4 5 4 4 e . . 
        . e b 4 5 4 4 4 4 4 4 4 b c . 
        . e e e 4 4 4 4 4 4 5 e e e . 
        . 8 7 2 e e e e e e e 2 7 8 . 
        . e 6 6 2 2 2 2 2 2 2 6 c e . 
        . e c 6 7 6 6 7 6 7 6 c c e . 
        . e b e 8 8 c 8 c c 8 e b e . 
        . e e b e c c e e c e b e e . 
        . . e e b b 4 4 4 4 4 e e . . 
        . . . . c c c e e e e . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . c c b b b . . . . . 
        . . . c c b 4 4 4 b b b . . . 
        . . c c 4 4 4 5 4 4 4 b c . . 
        . . e 4 4 4 4 4 4 5 4 4 e . . 
        . e b 4 5 4 4 4 4 4 4 4 b c . 
        . e e e 4 4 4 4 4 4 5 e e e . 
        . 8 7 2 e e e e e e e 2 7 8 . 
        . e 6 6 2 2 2 2 2 2 2 6 c e . 
        . e c 6 7 6 6 7 6 7 6 c c e . 
        . e b e 8 8 c 8 c c 8 e b e . 
        . e e b e c c e e c e b e e . 
        . . e e b b 4 4 4 4 4 e e . . 
        . . . . c c c e e e e . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    music.baDing.play()
    if (sprites.readDataBoolean(foldtoo, "k")) {
        characterAnimations.loopFrames(
        foldtoo,
        [img`
            . . . . . . . . . . . . . . . 
            . . . . . c c b b b . . . . . 
            . . . c c b 5 5 4 b b b . . . 
            . . c c 4 4 4 4 5 4 4 b c . . 
            . . e 4 4 4 4 5 4 4 4 4 e . . 
            . e b 4 4 4 5 4 4 4 4 4 b c . 
            . e e e 4 4 5 5 5 4 4 e e e . 
            . 8 7 5 e e e e e e e 5 7 8 . 
            . e 6 6 5 5 5 5 5 5 5 6 c e . 
            . e c 6 7 6 6 7 6 7 6 c c e . 
            . e b e 8 8 c 8 c c 8 e b e . 
            . e e b e c c e e c e b e e . 
            . . e e b b 4 4 4 4 4 e e . . 
            . . . . c c c e e e e . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . c c b b b . . . . . 
            . . . c c b 5 5 4 b b b . . . 
            . . c c 4 4 4 4 5 4 4 b c . . 
            . . e 4 4 4 4 5 4 4 4 4 e . . 
            . e b 4 4 4 5 4 4 4 4 4 b c . 
            . e e e 4 4 5 5 5 4 4 e e e . 
            . 8 7 5 e e e e e e e 5 7 8 . 
            . e 6 6 5 5 5 5 5 5 5 6 c e . 
            . e c 6 7 6 6 7 6 7 6 c c e . 
            . e b e 8 8 c 8 c c 8 e b e . 
            . e e b e c c e e c e b e e . 
            . . e e b b 4 4 4 4 4 e e . . 
            . . . . c c c e e e e . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . c c b b b . . . . . 
            . . . c c b 5 5 4 b b b . . . 
            . . c c 4 4 4 4 5 4 4 b c . . 
            . . e 4 4 4 4 5 4 4 4 4 e . . 
            . e b 4 4 4 5 4 4 4 4 4 b c . 
            . e e e 4 4 5 5 5 4 4 e e e . 
            . 8 7 5 e e e e e e e 5 7 8 . 
            . e 6 6 5 5 5 5 5 5 5 6 c e . 
            . e c 6 7 6 6 7 6 7 6 c c e . 
            . e b e 8 8 c 8 c c 8 e b e . 
            . e e b e c c e e c e b e e . 
            . . e e b b 4 4 4 4 4 e e . . 
            . . . . c c c e e e e . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . c c b b b . . . . . 
            . . . c c b 5 5 4 b b b . . . 
            . . c c 4 4 4 4 5 4 4 b c . . 
            . . e 4 4 4 4 5 4 4 4 4 e . . 
            . e b 4 4 4 5 4 4 4 4 4 b c . 
            . e e e 4 4 5 5 5 4 4 e e e . 
            . 8 7 5 e e e e e e e 5 7 8 . 
            . e 6 6 5 5 5 5 5 5 5 6 c e . 
            . e c 6 7 6 6 7 6 7 6 c c e . 
            . e b e 8 8 c 8 c c 8 e b e . 
            . e e b e c c e e c e b e e . 
            . . e e b b 4 4 4 4 4 e e . . 
            . . . . c c c e e e e . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . c c b b b . . . . . 
            . . . c c b 5 5 4 b b b . . . 
            . . c c 4 4 4 4 5 4 4 b c . . 
            . . e 4 4 4 4 5 4 4 4 4 e . . 
            . e b 4 4 4 5 4 4 4 4 4 b c . 
            . e e e 4 4 5 5 5 4 4 e e e . 
            . 8 7 5 e e e e e e e 5 7 8 . 
            . e 6 6 5 5 5 5 5 5 5 6 c e . 
            . e c 6 7 6 6 7 6 7 6 c c e . 
            . e b e 8 8 c 8 c c 8 e b e . 
            . e e b e c c e e c e b e e . 
            . . e e b b 4 4 4 4 4 e e . . 
            . . . . c c c e e e e . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . c c b b b . . . . . 
            . . . c c b 5 5 4 b b b . . . 
            . . c c 4 4 4 4 5 4 4 b c . . 
            . . e 4 4 4 4 5 4 4 4 4 e . . 
            . e b 4 4 4 5 4 4 4 4 4 b c . 
            . e e e 4 4 5 5 5 4 4 e e e . 
            . 8 7 5 e e e e e e e 5 7 8 . 
            . e 6 6 5 5 5 5 5 5 5 6 c e . 
            . e c 6 7 6 6 7 6 7 6 c c e . 
            . e b e 8 8 c 8 c c 8 e b e . 
            . e e b e c c e e c e b e e . 
            . . e e b b 4 4 4 4 4 e e . . 
            . . . . c c c e e e e . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving)
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.blu, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(2)
    Combo_stat.value += 1
    music.playTone(262, music.beat(BeatFraction.Half))
    HEALF.value += 10
})
scene.onHitWall(SpriteKind.reg, function (sprite, location) {
    sprite.destroy(effects.fire, 500)
    HEALF.value += -15
    music.bigCrash.play()
    info.changeScoreBy(-1)
    Combo_stat.value = 0
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    foldtoo.setPosition(95, 100)
    HEALF.value += -5
    info.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.regto, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(2)
    Combo_stat.value += 1
    music.playTone(440, music.beat(BeatFraction.Half))
    HEALF.value += 10
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Fold.setPosition(95, 100)
    HEALF.value += -5
    info.changeScoreBy(-1)
})
statusbars.onZero(StatusBarKind.combobo, function (status) {
    effects.confetti.endScreenEffect()
    effects.starField.startScreenEffect()
    Combo_stat.setColor(9, 0, 2)
    Shpeed = 40
    tiles.setTilemap(tilemap`level2`)
    if (sprites.readDataBoolean(data, "burger")) {
        characterAnimations.loopFrames(
        Fold,
        [img`
            . . . . . . . . . . . . . . . 
            . . . . . c c b b b . . . . . 
            . . . c c b 4 4 4 b b b . . . 
            . . c c 4 4 4 5 4 4 4 b c . . 
            . . e 4 4 4 4 4 4 5 4 4 e . . 
            . e b 4 5 4 4 4 4 4 4 4 b c . 
            . e e e 4 4 4 4 4 4 5 e e e . 
            . 8 7 2 e e e e e e e 2 7 8 . 
            . e 6 6 2 2 2 2 2 2 2 6 c e . 
            . e c 6 7 6 6 7 6 7 6 c c e . 
            . e b e 8 8 c 8 c c 8 e b e . 
            . e e b e c c e e c e b e e . 
            . . e e b b 4 4 4 4 4 e e . . 
            . . . . c c c e e e e . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . c c b b b . . . . . 
            . . . c c b 4 4 4 b b b . . . 
            . . c c 4 4 4 5 4 4 4 b c . . 
            . . e 4 4 4 4 4 4 5 4 4 e . . 
            . e b 4 5 4 4 4 4 4 4 4 b c . 
            . e e e 4 4 4 4 4 4 5 e e e . 
            . 8 7 2 e e e e e e e 2 7 8 . 
            . e 6 6 2 2 2 2 2 2 2 6 c e . 
            . e c 6 7 6 6 7 6 7 6 c c e . 
            . e b e 8 8 c 8 c c 8 e b e . 
            . e e b e c c e e c e b e e . 
            . . e e b b 4 4 4 4 4 e e . . 
            . . . . c c c e e e e . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . c c b b b . . . . . 
            . . . c c b 4 4 4 b b b . . . 
            . . c c 4 4 4 5 4 4 4 b c . . 
            . . e 4 4 4 4 4 4 5 4 4 e . . 
            . e b 4 5 4 4 4 4 4 4 4 b c . 
            . e e e 4 4 4 4 4 4 5 e e e . 
            . 8 7 2 e e e e e e e 2 7 8 . 
            . e 6 6 2 2 2 2 2 2 2 6 c e . 
            . e c 6 7 6 6 7 6 7 6 c c e . 
            . e b e 8 8 c 8 c c 8 e b e . 
            . e e b e c c e e c e b e e . 
            . . e e b b 4 4 4 4 4 e e . . 
            . . . . c c c e e e e . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . c c b b b . . . . . 
            . . . c c b 4 4 4 b b b . . . 
            . . c c 4 4 4 5 4 4 4 b c . . 
            . . e 4 4 4 4 4 4 5 4 4 e . . 
            . e b 4 5 4 4 4 4 4 4 4 b c . 
            . e e e 4 4 4 4 4 4 5 e e e . 
            . 8 7 2 e e e e e e e 2 7 8 . 
            . e 6 6 2 2 2 2 2 2 2 6 c e . 
            . e c 6 7 6 6 7 6 7 6 c c e . 
            . e b e 8 8 c 8 c c 8 e b e . 
            . e e b e c c e e c e b e e . 
            . . e e b b 4 4 4 4 4 e e . . 
            . . . . c c c e e e e . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . c c b b b . . . . . 
            . . . c c b 4 4 4 b b b . . . 
            . . c c 4 4 4 5 4 4 4 b c . . 
            . . e 4 4 4 4 4 4 5 4 4 e . . 
            . e b 4 5 4 4 4 4 4 4 4 b c . 
            . e e e 4 4 4 4 4 4 5 e e e . 
            . 8 7 2 e e e e e e e 2 7 8 . 
            . e 6 6 2 2 2 2 2 2 2 6 c e . 
            . e c 6 7 6 6 7 6 7 6 c c e . 
            . e b e 8 8 c 8 c c 8 e b e . 
            . e e b e c c e e c e b e e . 
            . . e e b b 4 4 4 4 4 e e . . 
            . . . . c c c e e e e . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . c c b b b . . . . . 
            . . . c c b 4 4 4 b b b . . . 
            . . c c 4 4 4 5 4 4 4 b c . . 
            . . e 4 4 4 4 4 4 5 4 4 e . . 
            . e b 4 5 4 4 4 4 4 4 4 b c . 
            . e e e 4 4 4 4 4 4 5 e e e . 
            . 8 7 2 e e e e e e e 2 7 8 . 
            . e 6 6 2 2 2 2 2 2 2 6 c e . 
            . e c 6 7 6 6 7 6 7 6 c c e . 
            . e b e 8 8 c 8 c c 8 e b e . 
            . e e b e c c e e c e b e e . 
            . . e e b b 4 4 4 4 4 e e . . 
            . . . . c c c e e e e . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving)
        )
        if (sprites.readDataBoolean(foldtoo, "k")) {
            characterAnimations.loopFrames(
            foldtoo,
            [img`
                . . . . . . . . . . . . . . . 
                . . . . . c c b b b . . . . . 
                . . . c c b 5 5 4 b b b . . . 
                . . c c 4 4 4 4 5 4 4 b c . . 
                . . e 4 4 4 4 5 4 4 4 4 e . . 
                . e b 4 4 4 5 4 4 4 4 4 b c . 
                . e e e 4 4 5 5 5 4 4 e e e . 
                . 8 7 5 e e e e e e e 5 7 8 . 
                . e 6 6 5 5 5 5 5 5 5 6 c e . 
                . e c 6 7 6 6 7 6 7 6 c c e . 
                . e b e 8 8 c 8 c c 8 e b e . 
                . e e b e c c e e c e b e e . 
                . . e e b b 4 4 4 4 4 e e . . 
                . . . . c c c e e e e . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . c c b b b . . . . . 
                . . . c c b 5 5 4 b b b . . . 
                . . c c 4 4 4 4 5 4 4 b c . . 
                . . e 4 4 4 4 5 4 4 4 4 e . . 
                . e b 4 4 4 5 4 4 4 4 4 b c . 
                . e e e 4 4 5 5 5 4 4 e e e . 
                . 8 7 5 e e e e e e e 5 7 8 . 
                . e 6 6 5 5 5 5 5 5 5 6 c e . 
                . e c 6 7 6 6 7 6 7 6 c c e . 
                . e b e 8 8 c 8 c c 8 e b e . 
                . e e b e c c e e c e b e e . 
                . . e e b b 4 4 4 4 4 e e . . 
                . . . . c c c e e e e . . . . 
                . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . c c b b b . . . . . 
                . . . c c b 5 5 4 b b b . . . 
                . . c c 4 4 4 4 5 4 4 b c . . 
                . . e 4 4 4 4 5 4 4 4 4 e . . 
                . e b 4 4 4 5 4 4 4 4 4 b c . 
                . e e e 4 4 5 5 5 4 4 e e e . 
                . 8 7 5 e e e e e e e 5 7 8 . 
                . e 6 6 5 5 5 5 5 5 5 6 c e . 
                . e c 6 7 6 6 7 6 7 6 c c e . 
                . e b e 8 8 c 8 c c 8 e b e . 
                . e e b e c c e e c e b e e . 
                . . e e b b 4 4 4 4 4 e e . . 
                . . . . c c c e e e e . . . . 
                `,img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . c c b b b . . . . . 
                . . . c c b 5 5 4 b b b . . . 
                . . c c 4 4 4 4 5 4 4 b c . . 
                . . e 4 4 4 4 5 4 4 4 4 e . . 
                . e b 4 4 4 5 4 4 4 4 4 b c . 
                . e e e 4 4 5 5 5 4 4 e e e . 
                . 8 7 5 e e e e e e e 5 7 8 . 
                . e 6 6 5 5 5 5 5 5 5 6 c e . 
                . e c 6 7 6 6 7 6 7 6 c c e . 
                . e b e 8 8 c 8 c c 8 e b e . 
                . e e b e c c e e c e b e e . 
                . . e e b b 4 4 4 4 4 e e . . 
                . . . . c c c e e e e . . . . 
                . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . 
                . . . . . c c b b b . . . . . 
                . . . c c b 5 5 4 b b b . . . 
                . . c c 4 4 4 4 5 4 4 b c . . 
                . . e 4 4 4 4 5 4 4 4 4 e . . 
                . e b 4 4 4 5 4 4 4 4 4 b c . 
                . e e e 4 4 5 5 5 4 4 e e e . 
                . 8 7 5 e e e e e e e 5 7 8 . 
                . e 6 6 5 5 5 5 5 5 5 6 c e . 
                . e c 6 7 6 6 7 6 7 6 c c e . 
                . e b e 8 8 c 8 c c 8 e b e . 
                . e e b e c c e e c e b e e . 
                . . e e b b 4 4 4 4 4 e e . . 
                . . . . c c c e e e e . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `,img`
                . . . . . c c b b b . . . . . 
                . . . c c b 5 5 4 b b b . . . 
                . . c c 4 4 4 4 5 4 4 b c . . 
                . . e 4 4 4 4 5 4 4 4 4 e . . 
                . e b 4 4 4 5 4 4 4 4 4 b c . 
                . e e e 4 4 5 5 5 4 4 e e e . 
                . 8 7 5 e e e e e e e 5 7 8 . 
                . e 6 6 5 5 5 5 5 5 5 6 c e . 
                . e c 6 7 6 6 7 6 7 6 c c e . 
                . e b e 8 8 c 8 c c 8 e b e . 
                . e e b e c c e e c e b e e . 
                . . e e b b 4 4 4 4 4 e e . . 
                . . . . c c c e e e e . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `],
            100,
            characterAnimations.rule(Predicate.NotMoving)
            )
        }
    } else if (sprites.readDataBoolean(data, "bad")) {
        characterAnimations.loopFrames(
        Fold,
        [img`
            . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . 
            . . . . . . 1 f 1 . . . . . . 
            . 1 . . . 1 f 1 f 1 . . . 1 . 
            . 1 1 . . 1 1 9 1 1 . . 1 1 . 
            . 1 c 1 . 1 1 9 1 1 . 1 b 1 . 
            . 1 c f 1 f 1 9 1 f 1 f b 1 . 
            . 1 c f f f 1 9 1 f f f b 1 . 
            . 1 c f f f f 1 f f f f b 1 . 
            . . 1 c f f f f f f f b 1 . . 
            . . . 1 c f f 1 f f b 1 . . . 
            . . . . 1 c 1 . 1 b 1 . . . . 
            . . . . . 1 . . . 1 . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . 1 . . . . . . . . 
            . . 1 . . 1 f 1 . . . . . 1 . 
            . . 1 1 . 1 f f 1 . . . 1 1 . 
            . . 1 c 1 f 1 1 f 1 . . 1 1 . 
            . . 1 c f 1 9 9 1 1 . 1 b 1 . 
            . . 1 c f 1 9 9 1 f 1 b b 1 . 
            . . 1 c f 1 9 9 1 f f b b 1 . 
            . . 1 c f 1 9 1 f f f b b 1 . 
            . . 1 c f f 1 f f f f b b 1 . 
            . . 1 c f 1 1 f f f f b 1 . . 
            . . . 1 1 . . 1 f f f b 1 . . 
            . . . 1 . . . . 1 1 b 1 . . . 
            . . . . . . . . . . 1 . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . 
            . . . . . . 1 f 1 . . . . . . 
            . 1 . . . 1 f 1 f 1 . . . 1 . 
            . 1 1 . . 1 1 9 1 1 . . 1 1 . 
            . 1 c 1 . 1 1 9 1 1 . 1 b 1 . 
            . 1 c f 1 f 1 9 1 f 1 f b 1 . 
            . 1 c f f f 1 9 1 f f f b 1 . 
            . 1 c f f f f 1 f f f f b 1 . 
            . . 1 c f f f f f f f b 1 . . 
            . . . 1 c f f 1 f f b 1 . . . 
            . . . . 1 c 1 . 1 b 1 . . . . 
            . . . . . 1 . . . 1 . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . 
            . 1 . . . . . 1 f 1 . . 1 . . 
            . 1 1 . . . 1 f f 1 . 1 1 . . 
            . 1 1 . . 1 f 1 1 f 1 b 1 . . 
            . 1 c 1 . 1 1 9 9 1 f b 1 . . 
            . 1 c c 1 f 1 9 9 1 f b 1 . . 
            . 1 c c f f 1 9 9 1 f b 1 . . 
            . 1 c c f f f 1 9 1 f b 1 . . 
            . 1 c c f f f f 1 f f b 1 . . 
            . . 1 c f f f f 1 1 f b 1 . . 
            . . 1 c f f f 1 . . 1 1 . . . 
            . . . 1 c 1 1 . . . . 1 . . . 
            . . . . 1 . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.NotMoving)
        )
        Shpeed = 100
        if (sprites.readDataBoolean(foldtoo, "k")) {
            characterAnimations.loopFrames(
            foldtoo,
            [img`
                . . . . . . . . . . . . . . . 
                . . . . . . . 1 . . . . . . . 
                . . . . . . 1 f 1 . . . . . . 
                . 1 . . . 1 f 1 f 1 . . . 1 . 
                . 1 1 . . 1 1 9 1 1 . . 1 1 . 
                . 1 c 1 . 1 1 9 1 1 . 1 b 1 . 
                . 1 c f 1 f 1 9 1 f 1 f b 1 . 
                . 1 c f f f 1 9 1 f f f b 1 . 
                . 1 c f f f f 1 f f f f b 1 . 
                . . 1 c f f f f f f f b 1 . . 
                . . . 1 c f f 1 f f b 1 . . . 
                . . . . 1 c 1 . 1 b 1 . . . . 
                . . . . . 1 . . . 1 . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . 
                . . . . . . 1 . . . . . . . . 
                . . 1 . . 1 f 1 . . . . . 1 . 
                . . 1 1 . 1 f f 1 . . . 1 1 . 
                . . 1 c 1 f 1 1 f 1 . . 1 1 . 
                . . 1 c f 1 9 9 1 1 . 1 b 1 . 
                . . 1 c f 1 9 9 1 f 1 b b 1 . 
                . . 1 c f 1 9 9 1 f f b b 1 . 
                . . 1 c f 1 9 1 f f f b b 1 . 
                . . 1 c f f 1 f f f f b b 1 . 
                . . 1 c f 1 1 f f f f b 1 . . 
                . . . 1 1 . . 1 f f f b 1 . . 
                . . . 1 . . . . 1 1 b 1 . . . 
                . . . . . . . . . . 1 . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . 
                . . . . . . . 1 . . . . . . . 
                . . . . . . 1 f 1 . . . . . . 
                . 1 . . . 1 f 1 f 1 . . . 1 . 
                . 1 1 . . 1 1 9 1 1 . . 1 1 . 
                . 1 c 1 . 1 1 9 1 1 . 1 b 1 . 
                . 1 c f 1 f 1 9 1 f 1 f b 1 . 
                . 1 c f f f 1 9 1 f f f b 1 . 
                . 1 c f f f f 1 f f f f b 1 . 
                . . 1 c f f f f f f f b 1 . . 
                . . . 1 c f f 1 f f b 1 . . . 
                . . . . 1 c 1 . 1 b 1 . . . . 
                . . . . . 1 . . . 1 . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . 1 . . . . . . 
                . 1 . . . . . 1 f 1 . . 1 . . 
                . 1 1 . . . 1 f f 1 . 1 1 . . 
                . 1 1 . . 1 f 1 1 f 1 b 1 . . 
                . 1 c 1 . 1 1 9 9 1 f b 1 . . 
                . 1 c c 1 f 1 9 9 1 f b 1 . . 
                . 1 c c f f 1 9 9 1 f b 1 . . 
                . 1 c c f f f 1 9 1 f b 1 . . 
                . 1 c c f f f f 1 f f b 1 . . 
                . . 1 c f f f f 1 1 f b 1 . . 
                . . 1 c f f f 1 . . 1 1 . . . 
                . . . 1 c 1 1 . . . . 1 . . . 
                . . . . 1 . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `],
            50,
            characterAnimations.rule(Predicate.NotMoving)
            )
        }
    } else if (sprites.readDataBoolean(data, "bullet")) {
        characterAnimations.loopFrames(
        Fold,
        [img`
            . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . f 2 f . . . . . . 
            . f . . . f 2 f 2 f . . . f . 
            . f f . . f f 9 f f . . f f . 
            . f c f . f f 9 f f . f 3 f . 
            . f c 2 f 2 f 9 f 2 f 2 3 f . 
            . f c 2 2 2 f 9 f 2 2 2 3 f . 
            . f c 2 2 2 2 f 2 2 2 2 3 f . 
            . . f c 2 2 2 2 2 2 2 3 f . . 
            . . . f c 2 2 f 2 2 3 f . . . 
            . . . . f c f . f 3 f . . . . 
            . . . . . f . . . f . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . 
            . . f . . f 2 f . . . . . f . 
            . . f f . f 2 2 f . . . f f . 
            . . f c f 2 f f 2 f . . f f . 
            . . f c 2 f 9 9 f f . f 3 f . 
            . . f c 2 f 9 9 f 2 f 3 3 f . 
            . . f c 2 f 9 9 f 2 2 3 3 f . 
            . . f c 2 f 9 f 2 2 2 3 3 f . 
            . . f c 2 2 f 2 2 2 2 3 3 f . 
            . . f c 2 f f 2 2 2 2 3 f . . 
            . . . f f . . f 2 2 2 3 f . . 
            . . . f . . . . f f 3 f . . . 
            . . . . . . . . . . f . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . f 2 f . . . . . . 
            . f . . . f 2 f 2 f . . . f . 
            . f f . . f f 9 f f . . f f . 
            . f c f . f f 9 f f . f 3 f . 
            . f c 2 f 2 f 9 f 2 f 2 3 f . 
            . f c 2 2 2 f 9 f 2 2 2 3 f . 
            . f c 2 2 2 2 f 2 2 2 2 3 f . 
            . . f c 2 2 2 2 2 2 2 3 f . . 
            . . . f c 2 2 f 2 2 3 f . . . 
            . . . . f c f . f 3 f . . . . 
            . . . . . f . . . f . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . 
            . f . . . . . f 2 f . . f . . 
            . f f . . . f 2 2 f . f f . . 
            . f f . . f 2 f f 2 f 3 f . . 
            . f c f . f f 9 9 f 2 3 f . . 
            . f c c f 2 f 9 9 f 2 3 f . . 
            . f c c 2 2 f 9 9 f 2 3 f . . 
            . f c c 2 2 2 f 9 f 2 3 f . . 
            . f c c 2 2 2 2 f 2 2 3 f . . 
            . . f c 2 2 2 2 f f 2 3 f . . 
            . . f c 2 2 2 f . . f f . . . 
            . . . f c f f . . . . f . . . 
            . . . . f . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.NotMoving)
        )
        if (sprites.readDataBoolean(foldtoo, "k")) {
            characterAnimations.loopFrames(
            foldtoo,
            [img`
                . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . 
                . . . . . . f 8 f . . . . . . 
                . f . . . f 8 f 8 f . . . f . 
                . f f . . f f 9 f f . . f f . 
                . f 6 f . f f 9 f f . f 9 f . 
                . f 6 8 f 8 f 9 f 8 f 8 9 f . 
                . f 6 8 8 8 f 9 f 8 8 8 9 f . 
                . f 6 8 8 8 8 f 8 8 8 8 9 f . 
                . . f 6 8 8 8 8 8 8 8 9 f . . 
                . . . f 6 8 8 f 8 8 9 f . . . 
                . . . . f 6 f . f 9 f . . . . 
                . . . . . f . . . f . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . 
                . . . . . . f . . . . . . . . 
                . . f . . f 8 f . . . . . f . 
                . . f f . f 8 8 f . . . f f . 
                . . f 6 f 8 f f 8 f . . f f . 
                . . f 6 8 f 9 9 f f . f 9 f . 
                . . f 6 8 f 9 9 f 8 f 9 9 f . 
                . . f 6 8 f 9 9 f 8 8 9 9 f . 
                . . f 6 8 f 9 f 8 8 8 9 9 f . 
                . . f 6 8 8 f 8 8 8 8 9 9 f . 
                . . f 6 8 f f 8 8 8 8 9 f . . 
                . . . f f . . f 8 8 8 9 f . . 
                . . . f . . . . f f 9 f . . . 
                . . . . . . . . . . f . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . 
                . . . . . . f 8 f . . . . . . 
                . f . . . f 8 f 8 f . . . f . 
                . f f . . f f 9 f f . . f f . 
                . f 6 f . f f 9 f f . f 9 f . 
                . f 6 8 f 8 f 9 f 8 f 8 9 f . 
                . f 6 8 8 8 f 9 f 8 8 8 9 f . 
                . f 6 8 8 8 8 f 8 8 8 8 9 f . 
                . . f 6 8 8 8 8 8 8 8 9 f . . 
                . . . f 6 8 8 f 8 8 9 f . . . 
                . . . . f 6 f . f 9 f . . . . 
                . . . . . f . . . f . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . f . . . . . . 
                . f . . . . . f 8 f . . f . . 
                . f f . . . f 8 8 f . f f . . 
                . f f . . f 8 f f 8 f 9 f . . 
                . f 6 f . f f 9 9 f 8 9 f . . 
                . f 6 6 f 8 f 9 9 f 8 9 f . . 
                . f 6 6 8 8 f 9 9 f 8 9 f . . 
                . f 6 6 8 8 8 f 9 f 8 9 f . . 
                . f 6 6 8 8 8 8 f 8 8 9 f . . 
                . . f 6 8 8 8 8 f f 8 9 f . . 
                . . f 6 8 8 8 f . . f f . . . 
                . . . f 6 f f . . . . f . . . 
                . . . . f . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `],
            200,
            characterAnimations.rule(Predicate.NotMoving)
            )
        }
    } else if (sprites.readDataBoolean(data, "tri")) {
        Fold.destroy()
        Fold = sprites.create(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . f 4 f . . . . . . 
            . . . . . f 4 5 4 f . . . . . 
            . . . . . f 5 5 5 f . . . . . 
            . . . . f f f f f f f . . . . 
            . . . . f f c c c f f . . . . 
            . . . f 5 5 f c f 5 5 f . . . 
            . . f 4 5 5 f c f 5 5 4 f . . 
            . . f 4 4 5 5 f 5 5 4 4 f . . 
            . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        Fold.setPosition(80, 100)
        if (sprites.readDataBoolean(foldtoo, "k")) {
            foldtoo.destroy()
            foldtoo = sprites.create(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . 
                . . . . . . . f . . . . . . . 
                . . . . . . f 4 f . . . . . . 
                . . . . . f 4 5 4 f . . . . . 
                . . . . . f 5 5 5 f . . . . . 
                . . . . f f f f f f f . . . . 
                . . . . f f c c c f f . . . . 
                . . . f 5 5 f c f 5 5 f . . . 
                . . f 4 5 5 f c f 5 5 4 f . . 
                . . f 4 4 5 5 f 5 5 4 4 f . . 
                . f f f f f f f f f f f f f . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            foldtoo.setPosition(80, 100)
        }
    } else {
        characterAnimations.loopFrames(
        Fold,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 2 3 f . . . . . . 
            . . . . . . f 2 3 f . . . . . . 
            . . . . . f 2 f f 3 f . . . . . 
            . . . . f 2 f 9 9 f 3 f . . . . 
            . . . . f 2 f 9 9 f 3 f . . . . 
            . . . f 2 2 f 9 9 f 2 3 f . . . 
            . . f c 2 2 2 2 2 2 2 2 3 f . . 
            . . f c 2 f 2 2 2 2 f 2 2 f . . 
            . . f c f f 2 2 2 2 f f 2 f . . 
            . . f f . . f 2 2 f . . f f . . 
            . . f f . . . f f . . . f f . . 
            . . f . . . . . . . . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 3 f . . . . . . 
            . . . . . . f 2 f 3 f . . . . . 
            . . . . . f 2 2 9 f f . . . . . 
            . . . . . f 2 2 9 f 3 f . . . . 
            . . . . f c 2 2 9 f 2 3 f . . . 
            . . . . f c 2 2 2 2 2 3 f f . . 
            . . . . f c 2 2 2 2 f 2 3 f . . 
            . . . . f f f f 2 2 f f 3 f . . 
            . . . . f f . f f f . f 3 f . . 
            . . . . f . . . f . . . f f . . 
            . . . . . . . . . . . . f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 2 3 f . . . . . . 
            . . . . . . f 2 3 f . . . . . . 
            . . . . . f 2 f f 3 f . . . . . 
            . . . . f 2 f 9 9 f 3 f . . . . 
            . . . . f 2 f 9 9 f 3 f . . . . 
            . . . f 2 2 f 9 9 f 2 3 f . . . 
            . . f c 2 2 2 2 2 2 2 2 3 f . . 
            . . f c 2 f 2 2 2 2 f 2 2 f . . 
            . . f c f f 2 2 2 2 f f 2 f . . 
            . . f f . . f 2 2 f . . f f . . 
            . . f f . . . f f . . . f f . . 
            . . f . . . . . . . . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . f 2 f 2 f . . . . . . 
            . . . . . f f 9 2 3 f . . . . . 
            . . . . f 2 f 9 2 3 f . . . . . 
            . . . f 2 2 f 9 2 2 3 f . . . . 
            . . f f 2 2 2 2 2 2 3 f . . . . 
            . . f c 2 f 2 2 2 2 3 f . . . . 
            . . f c f f 2 2 f f f f . . . . 
            . . f c f . f f f . f f . . . . 
            . . f f . . . f . . . f . . . . 
            . . f f . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.NotMoving)
        )
        if (sprites.readDataBoolean(foldtoo, "k")) {
            characterAnimations.loopFrames(
            foldtoo,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f 8 9 f . . . . . . 
                . . . . . . f 8 9 f . . . . . . 
                . . . . . f 8 f f 9 f . . . . . 
                . . . . f 8 f 9 9 f 9 f . . . . 
                . . . . f 8 f 9 9 f 9 f . . . . 
                . . . f 8 8 f 9 9 f 8 9 f . . . 
                . . f 6 8 8 8 8 8 8 8 8 9 f . . 
                . . f 6 8 f 8 8 8 8 f 8 8 f . . 
                . . f 6 f f 8 8 8 8 f f 8 f . . 
                . . f f . . f 8 8 f . . f f . . 
                . . f f . . . f f . . . f f . . 
                . . f . . . . . . . . . . f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . f 9 f . . . . . . 
                . . . . . . f 8 f 9 f . . . . . 
                . . . . . f 8 8 9 f f . . . . . 
                . . . . . f 8 8 9 f 9 f . . . . 
                . . . . f 6 8 8 9 f 8 9 f . . . 
                . . . . f 6 8 8 8 8 8 9 f f . . 
                . . . . f 6 8 8 8 8 f 8 9 f . . 
                . . . . f f f f 8 8 f f 9 f . . 
                . . . . f f . f f f . f 9 f . . 
                . . . . f . . . f . . . f f . . 
                . . . . . . . . . . . . f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f 8 9 f . . . . . . 
                . . . . . . f 8 9 f . . . . . . 
                . . . . . f 8 f f 9 f . . . . . 
                . . . . f 8 f 9 9 f 9 f . . . . 
                . . . . f 8 f 9 9 f 9 f . . . . 
                . . . f 8 8 f 9 9 f 8 9 f . . . 
                . . f 6 8 8 8 8 8 8 8 8 9 f . . 
                . . f 6 8 f 8 8 8 8 f 8 8 f . . 
                . . f 6 f f 8 8 8 8 f f 8 f . . 
                . . f f . . f 8 8 f . . f f . . 
                . . f f . . . f f . . . f f . . 
                . . f . . . . . . . . . . f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 8 f . . . . . . . 
                . . . . . f 8 f 8 f . . . . . . 
                . . . . . f f 9 8 9 f . . . . . 
                . . . . f 8 f 9 8 9 f . . . . . 
                . . . f 8 8 f 9 8 8 9 f . . . . 
                . . f f 8 8 8 8 8 8 9 f . . . . 
                . . f 6 8 f 8 8 8 8 9 f . . . . 
                . . f 6 f f 8 8 f f f f . . . . 
                . . f 6 f . f f f . f f . . . . 
                . . f f . . . f . . . f . . . . 
                . . f f . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            200,
            characterAnimations.rule(Predicate.NotMoving)
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bluto, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(2)
    Combo_stat.value += 1
    music.playTone(330, music.beat(BeatFraction.Half))
    HEALF.value += 10
})
controller.combos.attachCombo("uuu", function () {
    Combo_stat.value = 1000
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Fold.setPosition(109, 100)
    HEALF.value += -5
    info.changeScoreBy(-1)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    foldtoo.setPosition(109, 100)
    HEALF.value += -5
    info.changeScoreBy(-1)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    foldtoo.setPosition(65, 100)
    HEALF.value += -5
    info.changeScoreBy(-1)
})
scene.onHitWall(SpriteKind.regto, function (sprite, location) {
    sprite.destroy(effects.fire, 500)
    HEALF.value += -15
    music.bigCrash.play()
    info.changeScoreBy(-1)
    Combo_stat.value = 0
})
scene.onHitWall(SpriteKind.bluto, function (sprite, location) {
    sprite.destroy(effects.fire, 500)
    HEALF.value += -15
    music.bigCrash.play()
    info.changeScoreBy(-1)
    Combo_stat.value = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Fold.setPosition(51, 100)
    HEALF.value += -5
    info.changeScoreBy(-1)
})
controller.onLightConditionChanged(ControllerLightCondition.Dark, function () {
    tiles.setTilemap(tilemap`level4`)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false, effects.slash)
})
controller.combos.attachCombo("lrlr", function () {
    sprites.setDataBoolean(data, "bullet", true)
    characterAnimations.loopFrames(
    Fold,
    [img`
        . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . f 2 f . . . . . . 
        . f . . . f 2 f 2 f . . . f . 
        . f f . . f f 9 f f . . f f . 
        . f c f . f f 9 f f . f 3 f . 
        . f c 2 f 2 f 9 f 2 f 2 3 f . 
        . f c 2 2 2 f 9 f 2 2 2 3 f . 
        . f c 2 2 2 2 f 2 2 2 2 3 f . 
        . . f c 2 2 2 2 2 2 2 3 f . . 
        . . . f c 2 2 f 2 2 3 f . . . 
        . . . . f c f . f 3 f . . . . 
        . . . . . f . . . f . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . f . . . . . . . . 
        . . f . . f 2 f . . . . . f . 
        . . f f . f 2 2 f . . . f f . 
        . . f c f 2 f f 2 f . . f f . 
        . . f c 2 f 9 9 f f . f 3 f . 
        . . f c 2 f 9 9 f 2 f 3 3 f . 
        . . f c 2 f 9 9 f 2 2 3 3 f . 
        . . f c 2 f 9 f 2 2 2 3 3 f . 
        . . f c 2 2 f 2 2 2 2 3 3 f . 
        . . f c 2 f f 2 2 2 2 3 f . . 
        . . . f f . . f 2 2 2 3 f . . 
        . . . f . . . . f f 3 f . . . 
        . . . . . . . . . . f . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . f 2 f . . . . . . 
        . f . . . f 2 f 2 f . . . f . 
        . f f . . f f 9 f f . . f f . 
        . f c f . f f 9 f f . f 3 f . 
        . f c 2 f 2 f 9 f 2 f 2 3 f . 
        . f c 2 2 2 f 9 f 2 2 2 3 f . 
        . f c 2 2 2 2 f 2 2 2 2 3 f . 
        . . f c 2 2 2 2 2 2 2 3 f . . 
        . . . f c 2 2 f 2 2 3 f . . . 
        . . . . f c f . f 3 f . . . . 
        . . . . . f . . . f . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . 
        . f . . . . . f 2 f . . f . . 
        . f f . . . f 2 2 f . f f . . 
        . f f . . f 2 f f 2 f 3 f . . 
        . f c f . f f 9 9 f 2 3 f . . 
        . f c c f 2 f 9 9 f 2 3 f . . 
        . f c c 2 2 f 9 9 f 2 3 f . . 
        . f c c 2 2 2 f 9 f 2 3 f . . 
        . f c c 2 2 2 2 f 2 2 3 f . . 
        . . f c 2 2 2 2 f f 2 3 f . . 
        . . f c 2 2 2 f . . f f . . . 
        . . . f c f f . . . . f . . . 
        . . . . f . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.NotMoving)
    )
    music.baDing.play()
    controller.combos.detachCombo("lrlr")
    if (sprites.readDataBoolean(foldtoo, "k")) {
        characterAnimations.loopFrames(
        foldtoo,
        [img`
            . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . f 8 f . . . . . . 
            . f . . . f 8 f 8 f . . . f . 
            . f f . . f f 9 f f . . f f . 
            . f 6 f . f f 9 f f . f 9 f . 
            . f 6 8 f 8 f 9 f 8 f 8 9 f . 
            . f 6 8 8 8 f 9 f 8 8 8 9 f . 
            . f 6 8 8 8 8 f 8 8 8 8 9 f . 
            . . f 6 8 8 8 8 8 8 8 9 f . . 
            . . . f 6 8 8 f 8 8 9 f . . . 
            . . . . f 6 f . f 9 f . . . . 
            . . . . . f . . . f . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . 
            . . f . . f 8 f . . . . . f . 
            . . f f . f 8 8 f . . . f f . 
            . . f 6 f 8 f f 8 f . . f f . 
            . . f 6 8 f 9 9 f f . f 9 f . 
            . . f 6 8 f 9 9 f 8 f 9 9 f . 
            . . f 6 8 f 9 9 f 8 8 9 9 f . 
            . . f 6 8 f 9 f 8 8 8 9 9 f . 
            . . f 6 8 8 f 8 8 8 8 9 9 f . 
            . . f 6 8 f f 8 8 8 8 9 f . . 
            . . . f f . . f 8 8 8 9 f . . 
            . . . f . . . . f f 9 f . . . 
            . . . . . . . . . . f . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . f 8 f . . . . . . 
            . f . . . f 8 f 8 f . . . f . 
            . f f . . f f 9 f f . . f f . 
            . f 6 f . f f 9 f f . f 9 f . 
            . f 6 8 f 8 f 9 f 8 f 8 9 f . 
            . f 6 8 8 8 f 9 f 8 8 8 9 f . 
            . f 6 8 8 8 8 f 8 8 8 8 9 f . 
            . . f 6 8 8 8 8 8 8 8 9 f . . 
            . . . f 6 8 8 f 8 8 9 f . . . 
            . . . . f 6 f . f 9 f . . . . 
            . . . . . f . . . f . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . 
            . f . . . . . f 8 f . . f . . 
            . f f . . . f 8 8 f . f f . . 
            . f f . . f 8 f f 8 f 9 f . . 
            . f 6 f . f f 9 9 f 8 9 f . . 
            . f 6 6 f 8 f 9 9 f 8 9 f . . 
            . f 6 6 8 8 f 9 9 f 8 9 f . . 
            . f 6 6 8 8 8 f 9 f 8 9 f . . 
            . f 6 6 8 8 8 8 f 8 8 9 f . . 
            . . f 6 8 8 8 8 f f 8 9 f . . 
            . . f 6 8 8 8 f . . f f . . . 
            . . . f 6 f f . . . . f . . . 
            . . . . f . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.NotMoving)
        )
    }
})
controller.combos.attachCombo("dludlu", function () {
    sprites.setDataBoolean(data, "tri", true)
    Fold.destroy()
    Fold = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . f 4 f . . . . . . 
        . . . . . f 4 5 4 f . . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . 
        . . . . f f c c c f f . . . . 
        . . . f 5 5 f c f 5 5 f . . . 
        . . f 4 5 5 f c f 5 5 4 f . . 
        . . f 4 4 5 5 f 5 5 4 4 f . . 
        . f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Fold.setPosition(80, 100)
    music.baDing.play()
    if (sprites.readDataBoolean(foldtoo, "k")) {
        foldtoo.destroy()
        foldtoo = sprites.create(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . f 4 f . . . . . . 
            . . . . . f 4 5 4 f . . . . . 
            . . . . . f 5 5 5 f . . . . . 
            . . . . f f f f f f f . . . . 
            . . . . f f c c c f f . . . . 
            . . . f 5 5 f c f 5 5 f . . . 
            . . f 4 5 5 f c f 5 5 4 f . . 
            . . f 4 4 5 5 f 5 5 4 4 f . . 
            . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        foldtoo.setPosition(80, 100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.reg, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(2)
    Combo_stat.value += 1
    music.playTone(392, music.beat(BeatFraction.Half))
    HEALF.value += 10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Fold.setPosition(65, 100)
    HEALF.value += -5
    info.changeScoreBy(-1)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    foldtoo.setPosition(51, 100)
    HEALF.value += -5
    info.changeScoreBy(-1)
})
controller.combos.attachCombo("b+a+d", function () {
    sprites.setDataBoolean(data, "bad", true)
    characterAnimations.loopFrames(
    Fold,
    [img`
        . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . 
        . . . . . . 1 f 1 . . . . . . 
        . 1 . . . 1 f 1 f 1 . . . 1 . 
        . 1 1 . . 1 1 9 1 1 . . 1 1 . 
        . 1 c 1 . 1 1 9 1 1 . 1 b 1 . 
        . 1 c f 1 f 1 9 1 f 1 f b 1 . 
        . 1 c f f f 1 9 1 f f f b 1 . 
        . 1 c f f f f 1 f f f f b 1 . 
        . . 1 c f f f f f f f b 1 . . 
        . . . 1 c f f 1 f f b 1 . . . 
        . . . . 1 c 1 . 1 b 1 . . . . 
        . . . . . 1 . . . 1 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . 1 . . . . . . . . 
        . . 1 . . 1 f 1 . . . . . 1 . 
        . . 1 1 . 1 f f 1 . . . 1 1 . 
        . . 1 c 1 f 1 1 f 1 . . 1 1 . 
        . . 1 c f 1 9 9 1 1 . 1 b 1 . 
        . . 1 c f 1 9 9 1 f 1 b b 1 . 
        . . 1 c f 1 9 9 1 f f b b 1 . 
        . . 1 c f 1 9 1 f f f b b 1 . 
        . . 1 c f f 1 f f f f b b 1 . 
        . . 1 c f 1 1 f f f f b 1 . . 
        . . . 1 1 . . 1 f f f b 1 . . 
        . . . 1 . . . . 1 1 b 1 . . . 
        . . . . . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . 
        . . . . . . 1 f 1 . . . . . . 
        . 1 . . . 1 f 1 f 1 . . . 1 . 
        . 1 1 . . 1 1 9 1 1 . . 1 1 . 
        . 1 c 1 . 1 1 9 1 1 . 1 b 1 . 
        . 1 c f 1 f 1 9 1 f 1 f b 1 . 
        . 1 c f f f 1 9 1 f f f b 1 . 
        . 1 c f f f f 1 f f f f b 1 . 
        . . 1 c f f f f f f f b 1 . . 
        . . . 1 c f f 1 f f b 1 . . . 
        . . . . 1 c 1 . 1 b 1 . . . . 
        . . . . . 1 . . . 1 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . . 
        . 1 . . . . . 1 f 1 . . 1 . . 
        . 1 1 . . . 1 f f 1 . 1 1 . . 
        . 1 1 . . 1 f 1 1 f 1 b 1 . . 
        . 1 c 1 . 1 1 9 9 1 f b 1 . . 
        . 1 c c 1 f 1 9 9 1 f b 1 . . 
        . 1 c c f f 1 9 9 1 f b 1 . . 
        . 1 c c f f f 1 9 1 f b 1 . . 
        . 1 c c f f f f 1 f f b 1 . . 
        . . 1 c f f f f 1 1 f b 1 . . 
        . . 1 c f f f 1 . . 1 1 . . . 
        . . . 1 c 1 1 . . . . 1 . . . 
        . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `],
    50,
    characterAnimations.rule(Predicate.NotMoving)
    )
    music.powerDown.play()
    Shpeed = 100
    HEALF.max = 50
    HEALF.value = 25
    if (sprites.readDataBoolean(foldtoo, "k")) {
        characterAnimations.loopFrames(
        foldtoo,
        [img`
            . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . 
            . . . . . . 1 f 1 . . . . . . 
            . 1 . . . 1 f 1 f 1 . . . 1 . 
            . 1 1 . . 1 1 9 1 1 . . 1 1 . 
            . 1 c 1 . 1 1 9 1 1 . 1 b 1 . 
            . 1 c f 1 f 1 9 1 f 1 f b 1 . 
            . 1 c f f f 1 9 1 f f f b 1 . 
            . 1 c f f f f 1 f f f f b 1 . 
            . . 1 c f f f f f f f b 1 . . 
            . . . 1 c f f 1 f f b 1 . . . 
            . . . . 1 c 1 . 1 b 1 . . . . 
            . . . . . 1 . . . 1 . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . 1 . . . . . . . . 
            . . 1 . . 1 f 1 . . . . . 1 . 
            . . 1 1 . 1 f f 1 . . . 1 1 . 
            . . 1 c 1 f 1 1 f 1 . . 1 1 . 
            . . 1 c f 1 9 9 1 1 . 1 b 1 . 
            . . 1 c f 1 9 9 1 f 1 b b 1 . 
            . . 1 c f 1 9 9 1 f f b b 1 . 
            . . 1 c f 1 9 1 f f f b b 1 . 
            . . 1 c f f 1 f f f f b b 1 . 
            . . 1 c f 1 1 f f f f b 1 . . 
            . . . 1 1 . . 1 f f f b 1 . . 
            . . . 1 . . . . 1 1 b 1 . . . 
            . . . . . . . . . . 1 . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . 
            . . . . . . 1 f 1 . . . . . . 
            . 1 . . . 1 f 1 f 1 . . . 1 . 
            . 1 1 . . 1 1 9 1 1 . . 1 1 . 
            . 1 c 1 . 1 1 9 1 1 . 1 b 1 . 
            . 1 c f 1 f 1 9 1 f 1 f b 1 . 
            . 1 c f f f 1 9 1 f f f b 1 . 
            . 1 c f f f f 1 f f f f b 1 . 
            . . 1 c f f f f f f f b 1 . . 
            . . . 1 c f f 1 f f b 1 . . . 
            . . . . 1 c 1 . 1 b 1 . . . . 
            . . . . . 1 . . . 1 . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . 
            . 1 . . . . . 1 f 1 . . 1 . . 
            . 1 1 . . . 1 f f 1 . 1 1 . . 
            . 1 1 . . 1 f 1 1 f 1 b 1 . . 
            . 1 c 1 . 1 1 9 9 1 f b 1 . . 
            . 1 c c 1 f 1 9 9 1 f b 1 . . 
            . 1 c c f f 1 9 9 1 f b 1 . . 
            . 1 c c f f f 1 9 1 f b 1 . . 
            . 1 c c f f f f 1 f f b 1 . . 
            . . 1 c f f f f 1 1 f b 1 . . 
            . . 1 c f f f 1 . . 1 1 . . . 
            . . . 1 c 1 1 . . . . 1 . . . 
            . . . . 1 . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.NotMoving)
        )
    }
})
controller.onLightConditionChanged(ControllerLightCondition.Bright, function () {
    tiles.setTilemap(tilemap`level2`)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    foldtoo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 8 9 f . . . . . . 
        . . . . . . f 8 9 f . . . . . . 
        . . . . . f 8 f f 9 f . . . . . 
        . . . . f 8 f 9 9 f 9 f . . . . 
        . . . . f 8 f 9 9 f 9 f . . . . 
        . . . f 8 8 f 9 9 f 8 9 f . . . 
        . . f 6 8 8 8 8 8 8 8 8 9 f . . 
        . . f 6 8 f 8 8 8 8 f 8 8 f . . 
        . . f 6 f f 8 8 8 8 f f 8 f . . 
        . . f f . . f 8 8 f . . f f . . 
        . . f f . . . f f . . . f f . . 
        . . f . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    sprites.setDataBoolean(foldtoo, "k", true)
    characterAnimations.loopFrames(
    foldtoo,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 8 9 f . . . . . . 
        . . . . . . f 8 9 f . . . . . . 
        . . . . . f 8 f f 9 f . . . . . 
        . . . . f 8 f 9 9 f 9 f . . . . 
        . . . . f 8 f 9 9 f 9 f . . . . 
        . . . f 8 8 f 9 9 f 8 9 f . . . 
        . . f 6 8 8 8 8 8 8 8 8 9 f . . 
        . . f 6 8 f 8 8 8 8 f 8 8 f . . 
        . . f 6 f f 8 8 8 8 f f 8 f . . 
        . . f f . . f 8 8 f . . f f . . 
        . . f f . . . f f . . . f f . . 
        . . f . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 9 f . . . . . . 
        . . . . . . f 8 f 9 f . . . . . 
        . . . . . f 8 8 9 f f . . . . . 
        . . . . . f 8 8 9 f 9 f . . . . 
        . . . . f 6 8 8 9 f 8 9 f . . . 
        . . . . f 6 8 8 8 8 8 9 f f . . 
        . . . . f 6 8 8 8 8 f 8 9 f . . 
        . . . . f f f f 8 8 f f 9 f . . 
        . . . . f f . f f f . f 9 f . . 
        . . . . f . . . f . . . f f . . 
        . . . . . . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 8 9 f . . . . . . 
        . . . . . . f 8 9 f . . . . . . 
        . . . . . f 8 f f 9 f . . . . . 
        . . . . f 8 f 9 9 f 9 f . . . . 
        . . . . f 8 f 9 9 f 9 f . . . . 
        . . . f 8 8 f 9 9 f 8 9 f . . . 
        . . f 6 8 8 8 8 8 8 8 8 9 f . . 
        . . f 6 8 f 8 8 8 8 f 8 8 f . . 
        . . f 6 f f 8 8 8 8 f f 8 f . . 
        . . f f . . f 8 8 f . . f f . . 
        . . f f . . . f f . . . f f . . 
        . . f . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 8 f . . . . . . . 
        . . . . . f 8 f 8 f . . . . . . 
        . . . . . f f 9 8 9 f . . . . . 
        . . . . f 8 f 9 8 9 f . . . . . 
        . . . f 8 8 f 9 8 8 9 f . . . . 
        . . f f 8 8 8 8 8 8 9 f . . . . 
        . . f 6 8 f 8 8 8 8 9 f . . . . 
        . . f 6 f f 8 8 f f f f . . . . 
        . . f 6 f . f f f . f f . . . . 
        . . f f . . . f . . . f . . . . 
        . . f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.NotMoving)
    )
    foldtoo.setPosition(80, 100)
})
scene.onHitWall(SpriteKind.blu, function (sprite, location) {
    sprite.destroy(effects.fire, 500)
    HEALF.value += -15
    music.bigCrash.play()
    info.changeScoreBy(-1)
    Combo_stat.value = 0
})
let pew: Sprite = null
let lame = 0
let foldtoo: Sprite = null
let Fold: Sprite = null
let Combo_stat: StatusBarSprite = null
let HEALF: StatusBarSprite = null
let data: Sprite = null
let Shpeed = 0
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccccccccccccfffffcccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccccccccccccfffffcccccccccccccccffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccccccccccccfffffcccccccccccccccffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccccccccccccfffffcccccccccccccccffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccccccccccccfffffcccccccccccccccffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffccccccccccfffffccccccccccfffffcccccffffffffffffffffffffcccccffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffccccccccccfffffccccccccccfffffcccccffffffffffffffffffffcccccffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffccccccccccfffffccccccccccfffffcccccffffffffffffffffffffcccccffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffccccccccccfffffccccccccccfffffcccccffffffffffffffffffffcccccfffffffffffffccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffccccccccccfffffccccccccccfffffcccccffffffffffffffffffffcccccfffffffffffffccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffcccccfffffcccccfffffccccccccccfffffffffffffffcccccfffffffffffffccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffcccccfffffcccccfffffccccccccccfffffffffffffffcccccfffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffcccccfffffcccccfffffccccccccccfffffffffffffffcccccffffffffffffccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffcccccfffffcccccfffffccccccccccfffffffffffffffcccccffffffffffffcccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffcccccfffffcccccfffffccccccccccfffffffffffffffcccccffffffffffffcccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccffffffffffffffffffffcccccfffffffffffcccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccffffffffffffffffffffcccccfffffffffffcccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccffffffffffffffffffffcccccfffffffffffccccccfccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccffffffffffffffffffffcccccfffffffffffccccccfcccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccffffffffffffffffffffcccccffffffffffccccccfffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccccccccccccffffffffffcccccffffffffffccccccfffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccccccccccccffffffffffcccccffffffffffccccccfffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccccccccccccffffffffffcccccffffffffffccccccffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccccccccccccffffffffffcccccffffffffffcccccfffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccccfffffffffffffffcccccfffffcccccccccccccccffffffffffcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888888888888888888888888888888888888888888888888ff2222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888888888888888888888888888888888888888888888888ff2222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888888888888888888888888888888888888888888888888ff2222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888888888888888888888888888888888888888888888888ff2222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888888888888888888888888888888888888888888888888ff2222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff8888888888fffff11111fffff8888ff2222111111111111111222222222211111111111111122222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff8888888888fffff11111fffff8888ff2222111111111111111222222222211111111111111122222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff8888888888fffff11111fffff8888ff2222111111111111111222222222211111111111111122222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff8888888888fffff11111fffff8888ff2222111111111111111222222222211111111111111122222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff8888888888fffff11111fffff8888ff2222111111111111111222222222211111111111111122222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff888888888811111fffff111118888ff222211111fffff11111222222222211111ffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff888888888811111fffff111118888ff222211111fffff11111222222222211111ffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff888888888811111fffff111118888ff222211111fffff11111222222222211111ffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff888888888811111fffff111118888ff222211111fffff11111222222222211111ffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff888888888811111fffff111118888ff222211111fffff11111222222222211111ffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff88888888881111111111111118888ff222211111fffff1111122222222221111111111fffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff88888888881111111111111118888ff222211111fffff1111122222222221111111111fffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff88888888881111111111111118888ff222211111fffff1111122222222221111111111fffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff88888888881111111111111118888ff222211111fffff1111122222222221111111111fffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff88888888881111111111111118888ff222211111fffff1111122222222221111111111fffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff888888888811111fffff111118888ff222211111fffff11111222222222211111ffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff888888888811111fffff111118888ff222211111fffff11111222222222211111ffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff888888888811111fffff111118888ff222211111fffff11111222222222211111ffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff888888888811111fffff111118888ff222211111fffff11111222222222211111ffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888811111ffffffffff888888888811111fffff111118888ff222211111fffff11111222222222211111ffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff88888111111111111111888888888811111fffff111118888ff222211111fffff11111222222222211111111111111122222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff88888111111111111111888888888811111fffff111118888ff222211111fffff11111222222222211111111111111122222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff88888111111111111111888888888811111fffff111118888ff222211111fffff11111222222222211111111111111122222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff88888111111111111111888888888811111fffff111118888ff222211111fffff11111222222222211111111111111122222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff88888111111111111111888888888811111fffff111118888ff222211111fffff11111222222222211111111111111122222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888888888888888888888888888888888888888888888888ff2222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888888888888888888888888888888888888888888888888ff2222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888888888888888888888888888888888888888888888888ff2222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888888888888888888888888888888888888888888888888ff2222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff8888888888888888888888888888888888888888888888888ff2222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `)
game.showLongText("", DialogLayout.Full)
music.knock.play()
scene.setBackgroundImage(img`
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffff
    fffffffffff9ffffff9ffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffff
    fffffffffff9ffffff9ffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffff
    fffffffffff9ffffff9ffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff9fffffff
    fffffffffff9ffffff9ffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff9fffffff
    fffffffffff9ffffff9ffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff9fffffff
    ffffffffffffffffff9ffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff9fffffff
    ffffffffffffffffff9ffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff9fffffff
    ffffffffffffffffff9ffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffffffffffffff9fffffff
    ffffffffffffffffff9ffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffffffffffffff9fffffff
    ffffffffffffffffff9fffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffffffffffffff9fffffff
    ffffffffffffffffff9fffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffffffffffffff9fffffff
    ffffffffffffffffff9fffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffffffffffffff9fffffff
    ffffffffffffffffff9fffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffffffffffffff9fffffff
    ffffffffffffffffff9fffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffffffffffffff9fffffff
    ffffffffffffffffff9fffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffffffffffffffffffffff
    ffffffffffffffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffffffffffffffffffffff
    ffffffffffffffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffffffffffffffffffffff
    ffffffffffffffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffffffffffffffffffffff
    fffffffffff9ffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffff9fffffffffffffffff
    fffffffffff9ffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffff9fffffffffffffffff
    fffffffffff9ffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffff9fffffffffffffffff
    fffffffffff9ffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffff9fffffffffffffffff
    fffffffffff9ffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffff9fffffffffffffffff
    fffffffffff9ffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffff9fffffffffffffffff
    fffffffffff9ffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffff9fffffffffffffffff
    ff9ffffffff9ffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fff9ffffffffff9ffffff9fffffffffffffffff
    ff9ffffffff9ffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fff9ffffffffff9ffffff9fffffffffffffffff
    ff9ffffffff9ffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fff9ffffffffff9ffffff9fffffffffffffffff
    ff9ffffffff9ffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fff9ffffffffff9ffffff9fffffffffffffffff
    ff9ffffffff9ffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fff9ffffffffff9ffffff9fffffffffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9ffffffff9ffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9fffffffffffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9fffffffffffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffff9ffffffffff
    ff9fffffffffffffffffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9fffff9ffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9fffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9fffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9fffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9fffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9fffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9fffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9fffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9fffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9fffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9ffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9ffffffffffffffff9fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9ffffffffffffffff9fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9ffffffffffffffff9fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ff9fffffffffffffffff9ffffffffffffffff9fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ffffff9fffffffffffff9ffffffffffffffff9fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ffffff9fffffffffffff9ffffffffffffffff9fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ffffff9fffffffffffff9ffffffffffffffff9fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffff9ffffff9ffffffffff
    ffffff9fffffffffffff9ffffffffffffffff9fff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffff9fffffff9fffffffff
    ffffff9fffffffffffff9ffffffffffffffff9fff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffff9fffffffffffffffff
    ffffff9fffffffffffff9ffffffffffffffff9fff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffff9fffffffffffffffff
    ffffff9fffffffffffff9ffffffffffffffff9fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9fffffffffffff9ffffffffffffffff9fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9fffffffffffff9ffffffffffffffff9fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9fffffffffffff9ffffffffffffffff9fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9fffffffffffff9fffffff9ffffffff9fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9fffffffffffff9fffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9fffffffffffff9fffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9fffffffffffff9fffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9fffffffffffff9fffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9ffff9ffffffff9fffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9ffff9ffffffff9fffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9ffff9ffffffff9fffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9ffff9ffffffff9fffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9ffff9ffffffff9fffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9ffff9ffffffffffffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffffffffffff
    ffffff9ffff9ffffffffffffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffff9fffffff
    ffffff9ffff9ffffffffffffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffff9fffffff
    ffffff9ffff9ffffffffffffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffff9fffffff
    ffffff9ffff9ffffffffffffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffff9fffffff
    ffffff9ffff9ffffffffffffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9fffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9fffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9fffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9fffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff9ffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9fffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9fffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9fffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9fffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9fffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9fffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9ffffffffffffffff9ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffff
    fffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffff
    `)
Shpeed = 40
scroller.scrollBackgroundWithSpeed(0, Shpeed)
effects.starField.startScreenEffect()
tiles.setTilemap(tilemap`level2`)
info.setScore(0)
data = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `, SpriteKind.invis)
HEALF = statusbars.create(40, 4, StatusBarKind.Health)
HEALF.setPosition(45, 110)
HEALF.max = 100
HEALF.value = 100
HEALF.setLabel("Energy")
Combo_stat = statusbars.create(40, 4, StatusBarKind.combobo)
Combo_stat.setPosition(80, 5)
Combo_stat.max = 1000
Combo_stat.value = 0
Combo_stat.setColor(9, 0, 2)
Combo_stat.setBarBorder(1, 11)
Combo_stat.setLabel("Combo")
Fold = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f 2 3 f . . . . . . 
    . . . . . . f 2 3 f . . . . . . 
    . . . . . f 2 f f 3 f . . . . . 
    . . . . f 2 f 9 9 f 3 f . . . . 
    . . . . f 2 f 9 9 f 3 f . . . . 
    . . . f 2 2 f 9 9 f 2 3 f . . . 
    . . f c 2 2 2 2 2 2 2 2 3 f . . 
    . . f c 2 f 2 2 2 2 f 2 2 f . . 
    . . f c f f 2 2 2 2 f f 2 f . . 
    . . f f . . f 2 2 f . . f f . . 
    . . f f . . . f f . . . f f . . 
    . . f . . . . . . . . . . f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Fold.setPosition(80, 100)
characterAnimations.loopFrames(
Fold,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f 2 3 f . . . . . . 
    . . . . . . f 2 3 f . . . . . . 
    . . . . . f 2 f f 3 f . . . . . 
    . . . . f 2 f 9 9 f 3 f . . . . 
    . . . . f 2 f 9 9 f 3 f . . . . 
    . . . f 2 2 f 9 9 f 2 3 f . . . 
    . . f c 2 2 2 2 2 2 2 2 3 f . . 
    . . f c 2 f 2 2 2 2 f 2 2 f . . 
    . . f c f f 2 2 2 2 f f 2 f . . 
    . . f f . . f 2 2 f . . f f . . 
    . . f f . . . f f . . . f f . . 
    . . f . . . . . . . . . . f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . f 2 f 3 f . . . . . 
    . . . . . f 2 2 9 f f . . . . . 
    . . . . . f 2 2 9 f 3 f . . . . 
    . . . . f c 2 2 9 f 2 3 f . . . 
    . . . . f c 2 2 2 2 2 3 f f . . 
    . . . . f c 2 2 2 2 f 2 3 f . . 
    . . . . f f f f 2 2 f f 3 f . . 
    . . . . f f . f f f . f 3 f . . 
    . . . . f . . . f . . . f f . . 
    . . . . . . . . . . . . f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f 2 3 f . . . . . . 
    . . . . . . f 2 3 f . . . . . . 
    . . . . . f 2 f f 3 f . . . . . 
    . . . . f 2 f 9 9 f 3 f . . . . 
    . . . . f 2 f 9 9 f 3 f . . . . 
    . . . f 2 2 f 9 9 f 2 3 f . . . 
    . . f c 2 2 2 2 2 2 2 2 3 f . . 
    . . f c 2 f 2 2 2 2 f 2 2 f . . 
    . . f c f f 2 2 2 2 f f 2 f . . 
    . . f f . . f 2 2 f . . f f . . 
    . . f f . . . f f . . . f f . . 
    . . f . . . . . . . . . . f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . . f 2 f 2 f . . . . . . 
    . . . . . f f 9 2 3 f . . . . . 
    . . . . f 2 f 9 2 3 f . . . . . 
    . . . f 2 2 f 9 2 2 3 f . . . . 
    . . f f 2 2 2 2 2 2 3 f . . . . 
    . . f c 2 f 2 2 2 2 3 f . . . . 
    . . f c f f 2 2 f f f f . . . . 
    . . f c f . f f f . f f . . . . 
    . . f f . . . f . . . f . . . . 
    . . f f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
characterAnimations.rule(Predicate.NotMoving)
)
game.onUpdateInterval(300, function () {
    lame = randint(1, 4)
    if (lame == 1) {
        pew = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c c c c c c c c c c c c . . 
            . c 8 8 8 8 8 8 8 8 8 8 8 8 c . 
            . c 8 8 8 8 8 8 8 8 8 8 8 8 c . 
            . c 8 8 8 8 8 8 8 8 8 8 8 8 c . 
            . . c c c c c c c c c c c c . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.blu)
        pew.setVelocity(0, Shpeed)
        pew.setPosition(51, 8)
    } else if (lame == 2) {
        pew = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c c c c c c c c c c c c . . 
            . c 8 8 8 8 8 8 8 8 8 8 8 8 c . 
            . c 8 8 8 8 8 8 8 8 8 8 8 8 c . 
            . c 8 8 8 8 8 8 8 8 8 8 8 8 c . 
            . . c c c c c c c c c c c c . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.bluto)
        pew.setVelocity(0, Shpeed)
        pew.setPosition(65, 8)
    } else if (lame == 3) {
        pew = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c c c c c c c c c c c c . . 
            . c 2 2 2 2 2 2 2 2 2 2 2 2 c . 
            . c 2 2 2 2 2 2 2 2 2 2 2 2 c . 
            . c 2 2 2 2 2 2 2 2 2 2 2 2 c . 
            . . c c c c c c c c c c c c . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.reg)
        pew.setVelocity(0, Shpeed)
        pew.setPosition(95, 8)
    } else if (lame == 4) {
        pew = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c c c c c c c c c c c c . . 
            . c 2 2 2 2 2 2 2 2 2 2 2 2 c . 
            . c 2 2 2 2 2 2 2 2 2 2 2 2 c . 
            . c 2 2 2 2 2 2 2 2 2 2 2 2 c . 
            . . c c c c c c c c c c c c . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.regto)
        pew.setVelocity(0, Shpeed)
        pew.setPosition(109, 8)
    }
})

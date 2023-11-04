sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(projectile)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let projectile: Sprite = null
info.setLife(3)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    . f 1 7 7 7 7 7 7 7 7 7 7 1 f . 
    . f 1 7 9 9 9 9 9 9 9 9 7 1 f . 
    . f 1 7 9 8 8 8 8 8 8 9 7 1 f . 
    . f 1 7 9 8 8 8 8 8 8 9 7 1 f . 
    . f 1 7 9 8 8 8 8 8 8 9 7 1 f . 
    . f 1 7 9 8 8 8 8 8 8 9 7 1 f . 
    . f 1 7 9 8 8 8 8 8 8 9 7 1 f . 
    . f 1 7 9 8 8 8 8 8 8 9 7 1 f . 
    . f 1 7 9 9 9 9 9 9 9 9 7 1 f . 
    . f 1 7 7 7 7 7 7 7 7 7 7 1 f . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(75, 61)
game.setGameOverMessage(false, "Failure")
forever(function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, null, 50, 50)
    projectile.follow(mySprite, 68.75)
    projectile.setBounceOnWall(true)
    projectile.setPosition(randint(0, 150), randint(0, 120))
    pause(1500)
})
forever(function () {
    music.play(music.stringPlayable("E E E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 C5 C5 B A G F E ", 120), music.PlaybackMode.UntilDone)
})
forever(function () {
    mySprite.x += controller.dx()
})
forever(function () {
    mySprite.y += controller.dy()
})

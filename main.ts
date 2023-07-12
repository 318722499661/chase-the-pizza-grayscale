sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    info.startCountdown(15)
    tofu.setPosition(randint(10, 72), randint(10, 40))
})
let tofu : Sprite = null
scene.setBackgroundColor(0)
let mySprite = sprites.create(assets.image`
    guy
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tofu = sprites.create(assets.image`
    tofu
`, SpriteKind.Food)

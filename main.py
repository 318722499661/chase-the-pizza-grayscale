def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    info.start_countdown(15)
    tofu.set_position(randint(10, 72), randint(10, 40))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

tofu: Sprite = None
scene.set_background_color(0)
mySprite = sprites.create(assets.image("""
    guy
"""), SpriteKind.player)
controller.move_sprite(mySprite)
tofu = sprites.create(assets.image("""
    tofu
"""), SpriteKind.food)
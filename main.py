x = 2
y = 2
game.create_sprite(x, y)
input.rotation(Rotation.PITCH)
gameAlive = 1
while gameAlive == 1:
    basic.pause(50)

    if input.rotation(Rotation.ROLL) >= 5:
        basic.clear_screen()
        x = x + 1

    if input.rotation(Rotation.PITCH) >= 5:
        basic.clear_screen()
        x = x + 1

    if input.rotation(Rotation.PITCH) <= 5:
        basic.clear_screen()
        x = x - 1

    if input.rotation(Rotation.ROLL) <= 5:
        basic.clear_screen()
        x = x - 1

    game.create_sprite(x, y)
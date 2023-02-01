let x = 2
let y = 2
game.createSprite(x, y)
input.rotation(Rotation.Pitch)
let gameAlive = 1
while (gameAlive == 1) {
    basic.pause(50)
    if (input.rotation(Rotation.Roll) >= 5) {
        basic.clearScreen()
        x = x + 1
    }
    
    if (input.rotation(Rotation.Pitch) >= 5) {
        basic.clearScreen()
        x = x + 1
    }
    
    if (input.rotation(Rotation.Pitch) <= 5) {
        basic.clearScreen()
        x = x - 1
    }
    
    if (input.rotation(Rotation.Roll) <= 5) {
        basic.clearScreen()
        x = x - 1
    }
    
    game.createSprite(x, y)
}

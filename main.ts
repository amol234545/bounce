namespace SpriteKind {
    export const Filler = SpriteKind.create()
    export const Cursor = SpriteKind.create()
    export const Button = SpriteKind.create()
}
function make_title () {
    title = textsprite.create("Bounce!", 15, 9)
    title.scale = 3
    title.setOutline(1, 8)
    title.setPosition(scene.screenWidth() / 2, 20)
    title.startEffect(effects.bubbles)
}
function make_player_list () {
	
}
mp.onControllerEvent(ControllerEvent.Connected, function (player2) {
    player_loading_icons[mp.getPlayerProperty(player2, mp.PlayerProperty.Number) - 1].replace(8, 2)
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    player_loading_icons[mp.getPlayerProperty(player2, mp.PlayerProperty.Number) - 1].replace(2, 7)
})
function make_start_button () {
    start_button = textsprite.create("Press A!", 0, 9)
    start_button.scale = 3
    start_button.setPosition(scene.screenWidth() / 2, 100)
    start_button.setKind(SpriteKind.Button)
    start_button.setOutline(1, 8)
}
function start_animation () {
    effects.clearParticles(start_button)
    start_button.startEffect(effects.confetti)
    start_button.startEffect(effects.halo)
    start_button.setText("3")
    pause(1000)
    start_button.setText("2")
    pause(1000)
    start_button.setText("1")
    pause(1000)
    start_game()
}
function start_game () {
    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
    sprites.destroyAllSpritesOfKind(SpriteKind.Button)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
}
function make_player_menu () {
    player_menu = miniMenu.createMenuFromArray([
    miniMenu.createMenuItem("Player 1", player_loading_icons[0]),
    miniMenu.createMenuItem("Player 2", player_loading_icons[1]),
    miniMenu.createMenuItem("Player 3", player_loading_icons[2]),
    miniMenu.createMenuItem("Player 4", player_loading_icons[3])
    ])
    player_menu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 2)
    player_menu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 8)
    player_menu.setButtonEventsEnabled(false)
}
let player_menu: miniMenu.MenuSprite = null
let start_button: TextSprite = null
let title: TextSprite = null
let player_loading_icons: Image[] = []
mp.setPlayerIndicatorsVisible(true)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 100, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), 100, 0)
player_loading_icons = [
img`
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    `,
img`
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    `,
img`
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    `,
img`
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    `
]
let first = true
make_title()
make_start_button()
make_player_menu()
forever(function () {
	
})
game.onUpdateInterval(500, function () {
    player_menu.moveSelection(miniMenu.MoveDirection.Down)
    for (let value of player_loading_icons) {
        value.flipY()
    }
    start_button.startEffect(effects.ashes, 500)
})

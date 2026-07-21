// xDraw for "MacroBlock" S2C Socket.
// Draws test frame object on main screen for 100 ms + plays villager noise
// Use with "FakeSound" Sound Event

const draw = Hud.createDraw2D()
draw.setOnInit(JavaWrapper.methodToJava((d) => {
World.playSound("entity.wandering_trader.yes", 10, 1)
//const gm0 = () => Chat.open("/gamemode survival")

let arr = [x=275, y=10, mx=x+65, my=y+30]
    d.addRect(x, y, mx, my, 0xC, 199)
    d.addText("xDraw TEST", x+5, y+5, 0xFF0000, true);
    d.addText("minecraft:x", x+5, y+15, 0xc666, true);
}))
Hud.registerDraw2D(draw)

Client.waitTick(100)
Hud.clearDraw2Ds()

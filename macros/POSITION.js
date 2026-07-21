const position = Hud.createScreen("POSITION", false)
position.setOnInit(JavaWrapper.methodToJava((s) => {

    const PITCH = Player.getPlayer().getPitch().toFixed(2)
    const YAW = Player.getPlayer().getYaw().toFixed(2)
    s.addText("Pitch "+ PITCH, 20, 10, 0xFFFFFF, true)
    s.addText("Yaw "+ YAW, 20, 20, 0xFF0000, true)
    
    const back = () => JsMacros.runScript("HUD/HUD1.js")
    s.addButton(20, 40, 50, 20, "BACK", JavaWrapper.methodToJava(back))
    }))
Hud.openScreen(position)

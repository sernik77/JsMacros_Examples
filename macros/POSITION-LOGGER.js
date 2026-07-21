// MOUSE X / Y
var MX = Hud.getMouseX().toFixed(2)
var MY = Hud.getMouseY().toFixed(2)
Chat.log("Mouse-X: " +MX)
Chat.log("Mouse-Y: "+MY)

// ALL POSITION DATA
var ALL = Player.getCurrentPlayerInput();
Chat.log(ALL)
  
// PITCH AND YAW  
var pitch = Player.getPlayer().getPitch().toFixed(2)
var yaw = Player.getPlayer().getYaw().toFixed(2)
Chat.log("Pitch: "+pitch)
Chat.log("Yaw: "+yaw)

// X Y Z COORDINATES
var X = Player.getPlayer().getX().toFixed(2)
var Y = Player.getPlayer().getY().toFixed(2)
var Z = Player.getPlayer().getZ().toFixed(2)
Chat.log("X: "+X)
Chat.log("Y: "+Y)
Chat.log("Z: "+Z)







/////////////////////////// MAIN SCREEN FOR ITEM PALLETTES ////////////////////////////////

const screen = Hud.createScreen("[PALLETTE-HUD]", false)
screen.setOnInit(JavaWrapper.methodToJava((s) => {

const GETNAME = Hud.getOpenScreen().getTitleText()
const BTTN = Hud.getOpenScreen().getButtonWidgets()//.get()
const PITCH = Player.getPlayer().getPitch().toFixed(2)
const YAW = Player.getPlayer().getYaw().toFixed(2)

//////////////////////////////////////////////////////////////////////////////////////
ArrayDefault 
= [x=5, y=5]          // STARTING POINT
+ [mx=80, my=100]      // DESIRED END POINT / MAX X 
+ [xt=mx-x, yt=my-y]    // FROM X TO MX // TOTAL X
+ [o1=80, o2=160, o3=250] //OFFSET values
+ [xo1=x+o1, xo2=x+o2, xo3=x+o3]   // X OFFSET 1 = X + OFFSET1
+ [mxo1=mx+o1, mxo2=mx+o2, mxo3=mx+o3]
+ [xto1=mxo1-xo1, xto2=mxo2-xo2, xto3=mxo3-xo3]
+ [l=50, w=20]                              // Length & Wide of Buttons
+ [c1=0xC, c2=0xFF0000, c3=0xFF666, c4=0xFFFFFF, c5=0xFF0070] // COLORS
+ [a1=100, a2=200, a3=300, a4=400, a5=500]    // ALPHA
///////////////////////////////////////////////////////////////////////////

s.addRect(x+5, y+5, mx, my-60, c1, a5)
s.addText("Pitch "+ PITCH, x+10, y+10, c2, true)+s.addText("Pitch "+ PITCH, x+11, y+11, c3, true)
s.addText("Yaw "+ YAW, x+10, y+20, c2, true)+s.addText("Yaw "+ YAW, x+11, y+21, c3, true)

//////////////////////////////////////////////////////////////////////////////////////

s.addRect(x+260, y+5, mx+280, my-60, c1, a5)
s.addText(GETNAME, x+270, y+10, c2, true)+s.addText(GETNAME, x+265, y+11, c3, true)

///////////////////////////////////////////////////////////////////////////////////////

const FPS = Client.getFPS() 
const JSM = JsMacros.getProfile().getCurrentProfileName()

const PLAYER = Player.getGameMode()+" "
+ Player.getPlayer().getAbilities().getFlying()+" "
+ Player.getPlayer().getAbilities().getFlySpeed().toFixed(4)

const RTE = Player.rayTraceBlock(10, false).getRawBlock()

s.addRect(x+5, y+40, mxo1, my, c1, a2)
s.addText(PLAYER.toString(), x+10, y+45, c2, true)
s.addText(RTE.toString(), x+10, y+65, c2, true)
/////////////////////////////////////////////////////////////////////////////////////

 // s.addRect(x+5, y+5, mx-25, my-65, c1, a2)
 //   const b1 = () => Hud.openScreen(screen)
 //   s.addButton(x+20, y+40, l, w, "BUTTON 1", JavaWrapper.methodToJava(b1))
    
}))
Hud.openScreen(screen)

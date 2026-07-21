////////////// MAIN SCREEN POP UP //////////////

const draw = Hud.createDraw2D()
draw.setOnInit(JavaWrapper.methodToJava((d) => {

let arr = [x=250, y=10, mx=x+100, my=y+100]
    d.addRect(x, y, mx, my, 0xC, 199)
    d.addText("[EXAMPLE]", x+10, y+20, 0xFF0000, true);

}))
Hud.registerDraw2D(draw)
Client.waitTick(100)
Hud.clearDraw2Ds()

///// CLEAR DRAWN ELEMENTS ///

Client.waitTick(100)
Hud.clearDraw2Ds()

///////////////// CREATE SCREEN FOR DRAW 2D BUTTONS /////////////////

const screen = Hud.createScreen("DRAW", false)
screen.setOnInit(JavaWrapper.methodToJava((s) => {

const clear2d = () => Hud.clearDraw2Ds() + World.playSound("block.ender_chest.open", 100);
s.addButton(x+140, y+05, 20, 10, "RESET", JavaWrapper.methodToJava(clear2d))

const draw2d = () => Hud.registerDraw2D() + World.playSound("block.ender_chest.open", 100);
s.addButton(x+100, y+05, 20, 10, "DRAW", JavaWrapper.methodToJava(draw2d))
}))
Hud.openScreen(screen)

//////////////////// DRAW ON MAIN SCREEN //////////////////////

let arrDR = [x=170, y=275, mx=x+40, my=y+50]
s.addRect(x-5, y+5, mx, my, 0xC, 100) 
s.addText("[DRAW]", x+2, y+10, 0xFF0000, true);

const draw2d = () => JsMacros.runScript("DRAW.js")+ World.playSound("block.ender_chest.open", 100);
   s.addButton(x, y+25, 35, 10, "DRAW", JavaWrapper.methodToJava(draw2d))
const clear2d = () => Hud.clearDraw2Ds() + World.playSound("block.ender_chest.open", 100); //s.addText("[DRAW TEXT EXAMPLE]", x+105, y+15, 0xFF0000, true);//Chat.log(NAME+" "+NAM)
   s.addButton(x, y+35, 35, 10, "RESET", JavaWrapper.methodToJava(clear2d))
   
///////////////////// DRAW ON SCREEN S ////////////////////////

let arrDR = [x=170, y=275, mx=x+40, my=y+50]
s.addRect(x-5, y+5, mx, my, 0xC, 100) 
s.addText("[DRAW]", x+2, y+10, 0xFF0000, true);

const draw2d = () => s.addText("[REMOTE CONTROL PANEL]", x+40, y+05, 0xFF666, true);
  s.addButton(x, y+25, 35, 10, "DRAW", JavaWrapper.methodToJava(draw2d))
   
const clear2d = () => Hud.openScreen(screen)
   s.addButton(x, y+35, 35, 10, "RESET", JavaWrapper.methodToJava(clear2d))
   
////////////////////// ADD TO SCREEN /////////////////////////////

const draw = () => 
s.addText("[DRAWWWWWWWWWWWWWWWWW]", x+2, y+10, 0xFF0000, true)+
s.addText("[DRAWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW]", x+2, y+20, 0xFF0000, true)
;

   s.addButton(x, y+25, 35, 10, "DRAW", JavaWrapper.methodToJava(draw))
   
const clear2d = () => Hud.openScreen(screen)+ World.playSound("block.ender_chest.open", 100);
   s.addButton(x, y+35, 35, 10, "RESET", JavaWrapper.methodToJava(clear2d))
   
//////////////////ELEMENTS WITH VALUES//////////////////////

const PITCH = Player.getPlayer().getPitch().toFixed(2)
const YAW = Player.getPlayer().getYaw().toFixed(2)

const screen = Hud.createScreen("MAIN", false)
screen.setOnInit(JavaWrapper.methodToJava((s) => {

let arr = [x=10, y=10, mx=610, my=310]
s.addText("Yaw "+ YAW, x, y, 0xFF0000, true)
s.addText("Pitch "+ PITCH, x, y+10, 0xFF0000, true)

}))
Hud.openScreen(screen)

////////////////////////////////////////////////////////

//////////////// UNIVERSAL ARRAY ///////////////////////

arr = [x=10, y=10] + [mx=x+100, my=y+100]        // POSITION
+ [l=50, w=20]                              // Length & Wide of Buttons
+ [c1=0xC, c2=0xFF0000, c3=0xFF666, c4=0xFFFFFF, c5=0xFF0070] // COLORS
+ [a1=100, a2=200, a3=300, a4=400, a5=500]    // ALPHA

/////////////////////////////////////////////////////////
// GLITCHED DOUBBLE PHASE EFFECT // 1 OFFSET //

s.addText("Pitch "+ PITCH, x+10, y+10, c5, true) // PINK
s.addText("Pitch "+ PITCH, x+11, y+11, c3, true) // CYAN

///////////////////// PITCH YAW PHASED FRAME ///////////////////////////

    s.addRect(x+5, y+5, mx-25, my-65, c1, a5)
    s.addText("Pitch "+ PITCH, x+10, y+10, c5, true)+s.addText("Pitch "+ PITCH, x+11, y+11, c3, true)
    s.addText("Yaw "+ YAW, x+10, y+20, c5, true)+s.addText("Yaw "+ YAW, x+11, y+21, c3, true)

//////////////////////////////////////////////////////////////////////
///////// MORE ARRAYS //////////////////
arrSTR = [str1="[NAME 1]", str2="[NAME 2]"]
+ [val1=VAL1, val2=VAL2]

///////////////////////// ARRAY REFFERENCE ////////////////////////
ArrayDefault 
= [x=5, y=5] + [mx=x+100, my=y+100]        // POSITION
+ [l=50, w=20]                              // Length & Wide of Buttons
+ [c1=0xC, c2=0xFF0000, c3=0xFF666, c4=0xFFFFFF, c5=0xFF0070] // COLORS
+ [a1=100, a2=200, a3=300, a4=400, a5=500]    // ALPHA
+ [str1="[Pitch]", str2="[Yaw]"]
+ [val1=PITCH, val2=YAW, val3=V3]

    d.addRect(x, y, mx+10, my, c1, a5)
    d.addText(str1+" "+str2, x+5, y+5, c5, true)+d.addText(str1+" "+str2, x+6, y+6, c3, true)
    d.addText("[DRAW 2D]", x+5, y+20, c2, true)
    d.addText("[100 Tick Delay]", x+5, y+30, c2, true)
    
    d.addText(str1+" "+val1, x+5, y+40, c3, true)
    d.addText(str2+" "+val2, x+5, y+50, c3, true)
    d.addText("[GM]"+" "+val3, x+5, y+60, c5, true)
    
ArrayDefault+1 
= [x=120, y=5] + [mx=x+100, my=y+100]        // POSITION

   d.addRect(x, y, mx+10, my, c1, a5)
   d.addText(str1, x+5, y+5, c2, true)
////////////////////////////////////////////////////////////////

////////// OFFSET DEFAULT ARRAY POS ////////////////////
ArrOFFSET = [xo=x+105, yo=y] + [mx=xo+100, my=yo+100] 
d.addRect(xo, yo, mx, my, c1, a5) 
// PRINT RECT OFFSET FROM X by XO //

////////////////////////////////////////////////////////
////////////   DISPLAY VALUES    /////////////////////

ArrOFFSET
= [xo=x+105, yo=y+105] + [mx=xo+100, my=yo+100] // XO - X OFFSET

  d.addRect(xo, yo, mx, my, c1, a5)
   d.addText("X:"+x, xo+5, yo+5, c2, true)     // DEFAULT X
   d.addText("XO:"+xo, xo+25, yo+5, c3, true)  // OFFSET FROM X
   d.addText("MX:"+mx, xo+63, yo+5, c4, true)  // MAX X
   
   d.addText("Y:"+y, xo+5, yo+15, c2, true)
   d.addText("YO:"+yo, xo+25, yo+15, c3, true)
   d.addText("MY:"+my, xo+63, yo+15, c4, true)
   
//////////////////////////////////////////////////////
////////////   VALUES  ////////////////////
ArrX 
= [xo=x+105, yo=y] + [mxo=xo+mx-5, myo=yo+my-5] // XO - X OFFSET
+ [xto=mxo-xo, yto=myo-yo]

   d.addRect(xo, yo, mxo, my, c1, a5)
   d.addText("X VALUES", xo+5, yo+5, c3, true)
   d.addText("X: "+x, xo+5, yo+25, c2, true)  
   d.addText("XO: "+xo, xo+5, yo+35, c3, true)
   d.addText("MX: "+mx, xo+5, yo+45, c4, true)
   d.addText("MXO: "+mxo, xo+5, yo+55, c2, true)
   d.addText("TotalX: "+xto, xo+5, yo+65, c3, true)
/////////////////////////////////////////////////////////////

    d.addRect(x, y, mx, my, c1, a5)
    d.addText(str1+" "+str2, x+5, y+5, c5, true)+d.addText(str1+" "+str2, x+6, y+6, c3, true)
    d.addText("[DRAW 2D]", x+5, y+20, c2, true)
    d.addText("[100 Tick Delay]", x+5, y+30, c2, true)
    
    d.addText(str1+" "+PITCH, x+5, y+40, c3, true)
    d.addText(str2+" "+YAW, x+5, y+50, c3, true)
    d.addText(str3+" "+GM, x+5, y+60, c5, true)
    
/////////////////////////////////////////////////////////////
                SOMEWHAT LOGIC POSITIONING
///////////////////////////////////////////////////////////
ArrayDefault 
= [x=5, y=5]          // STARTING POINT
+ [mx=70, my=100]      // DESIRED END POINT / MAX X 
+ [xt=mx-x, yt=my-y]    // FROM X TO MX // TOTAL X

+ [o1=70, o2=140, o3=210] //OFFSET values

+ [xo1=x+o1, xo2=x+o2, xo3=x+o3]   // X OFFSET 1 = X + OFFSET1
+ [mxo1=mx+o1, mxo2=mx+o2, mxo3=mx+o3]
+ [xto1=mxo1-xo1, xto2=mxo2-xo2, xto3=mxo3-xo3]

+ [l=50, w=20]                              // Length & Wide of Buttons
+ [c1=0xC, c2=0xFF0000, c3=0xFF666, c4=0xFFFFFF, c5=0xFF0070] // COLORS
+ [a1=100, a2=200, a3=300, a4=400, a5=500]    // ALPHA
+ [str1="[Pitch]", str2="[Yaw]", str3="[GM]"]

   d.addRect(x, y, mx, my, c1, a5)
   d.addText("X VALUES", x+5, y+5, c3, true)
   d.addText("X:"+x +"-"+ "MX:"+mx, x+5, y+25, c4, true) 
   d.addText("Total X: "+xt, x+5, y+35, c2, true)
   
   d.addText("XO1: "+xo1, x+5, y+50, c4, true)
   d.addText("MXO1: "+mxo1, x+5, y+60, c4, true)
   d.addText("XTO1: "+xto1, x+5, y+70, c2, true)

   d.addRect(xo1, y, mxo1, my, c1, a5)  // OFFSET 1
   
   d.addText("OFFSET VAL", xo1+5, y+5, c3, true)
   d.addText("O1: "+o1, xo1+5, y+15, c4, true)
   d.addText("O2: "+o2, xo1+5, y+25, c4, true)
   d.addText("O3: "+o3, xo1+5, y+35, c4, true)
   
   d.addRect(xo2, y, mxo2, my+30, c1, a5)  // OFFSET 2
   d.addText("OFFSET X", xo2+5, y+5, c3, true)
   d.addText("O1 X: "+xo1, xo2+5, y+20, c4, true)
   d.addText("O1 MX: "+mxo1, xo2+5, y+30, c4, true)
   d.addText("O1 XT: "+xto1, xo2+5, y+40, c4, true)
   
   d.addText("O2 X: "+xo2, xo2+5, y+55, c2, true)
   d.addText("O2 MX: "+mxo2, xo2+5, y+65, c2, true)
   d.addText("O2 XT: "+xto2, xo2+5, y+75, c2, true)
   
   d.addText("O3 X: "+xo3, xo2+5, y+90, c4, true)
   d.addText("O3 MX: "+mxo3, xo2+5, y+100, c4, true)
   d.addText("O3 XT: "+xto3, xo2+5, y+110, c4, true)

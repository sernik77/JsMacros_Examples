// MAIN CLIENT HUD
const screen = Hud.createScreen("MAIN", false)
screen.setOnInit(JavaWrapper.methodToJava((s) => {
// CENTRAL WINDOW
s.addRect(10, 10, 110, 110, 0xF6666, 200)  
let arrM = [x=230, y=0, mx=385, my=60]
    s.addRect(x, y+1, mx, my, 0xC, 200)
    s.addText("    [  NAXA CLIENT  ]", x+20, y+10, 0x53ED00, true);
    s.addText("   [In-Dev-1.4] /", x+10, y+20, 0x00e6c3, true);
    s.addText("   [Gemini]", x+85, y+20, 0xFF666, true);
    s.addText("~", x+76, y+40, 0xFF666, true)
    s.addText("    [Developed by serainox]", x+230, y+10, 0x53ED00, true);
// SUB-SCREENS BUTTONS
 //  const backk = () => JsMacros.runScript("TUNGUSKA/About.js")
 //  s.addButton(x+5, y+35, 33, 20, "Back", JavaWrapper.methodToJava(about))
   const about = () => JsMacros.runScript("TEST COPY/About.js")
   s.addButton(x+5, y+35, 33, 20, "About", JavaWrapper.methodToJava(about))
   const libs = () => JsMacros.runScript("TEST COPY/Libs.js")
   s.addButton(x+40, y+35, 33, 20, "Libs", JavaWrapper.methodToJava(libs))
   const manual = () => JsMacros.runScript("TEST COPY/Manual.js")
   s.addButton(x+85, y+35, 33, 20, "101", JavaWrapper.methodToJava(manual))
   const more = () => JsMacros.runScript("TEST COPY/More.js")
   s.addButton(x+120, y+35, 33, 20, "More", JavaWrapper.methodToJava(more))
   
     
    let arr = [x=230, y=100, mx=610, my=310]            //X, Y, MAX-X, MAX-Y
    
    s.addRect(x-7, y-38, mx-218, my+13, 0xC, 200)               //////////// QUICK ROW FRAME
    s.addRect(x-2, y-33, mx-223, my+5, 0xFFFFFF, 20)
    
    s.addRect(x, 68, 385, 80, 0xFFFFFF, 50) // TITLE
    
    s.addText("[   QUICK   ACCESS   HUDS   ]", x+5, y-30, 0xb3ff00, true);
    s.addText(" BEST TOOLS", x, y-10, 0x49ff05, true);
    s.addText(" COMMANDS", x+90, y-10, 0xFF666, true);
    const clear = () => Chat.say("")
    s.addButton(x, y,    70, 20, "CHAT TOOLS", JavaWrapper.methodToJava(clear)) 
        const a1 = () => Chat.say(".clear-chat")
    s.addButton(x, y+25, 70, 20, "VANILLA ID's", JavaWrapper.methodToJava(a1)) 
        const a2 = () => Chat.say(".clear-chat")
    s.addButton(x, y+50, 70, 20, "CMD-BLOCKS", JavaWrapper.methodToJava(a2)) 
        const a3 = () => Chat.say(".clear-chat")
    s.addButton(x, y+75, 70, 20, "CMD GEN", JavaWrapper.methodToJava(a3)) 
    
// BARITONE / JSM / 

        const b0 = () => Chat.say(".clear-chat")
    s.addButton(x, y+115,    70, 20, "BARITONE", JavaWrapper.methodToJava(b0)) 
        const b1 = () => Chat.say(".clear-chat")
    s.addButton(x, y+140, 70, 20, "CORE MODS", JavaWrapper.methodToJava(b1)) 
        const b2 = () => Chat.say(".clear-chat")
    s.addButton(x, y+165, 70, 20, "JSM MACROS", JavaWrapper.methodToJava(b2)) 
        const b3 = () => Chat.say(".clear-chat")
    s.addButton(x, y+190, 70, 20, "WEB SOCKET", JavaWrapper.methodToJava(b3)) 
    
let arr2 = [x=240, y=100, mx=610, my=310]  // RIGHT SIDE ROW
    s.addText(" CLIENT CORE", x-10, y+105, 0x00de81, true);
    s.addText(" DEBUG 2.0", x+80, y+105, 0x00deae, true);
 // COMMANDS / MODULES
        const c0 = () => Chat.say("sfsf")
    s.addButton(x+75, y,    70, 20, "METEOR", JavaWrapper.methodToJava(c0)) 
        const c1 = () => Chat.say(".clear-chat")
    s.addButton(x+75, y+25, 70, 20, "VANILLA", JavaWrapper.methodToJava(c1)) 
        const c2 = () => Chat.say(".clear-chat")
    s.addButton(x+75, y+50, 70, 20, "TUNGUSKA", JavaWrapper.methodToJava(c2)) 
        const c3 = () => Chat.say(".clear-chat")
    s.addButton(x+75, y+75, 70, 20, "SERVERS", JavaWrapper.methodToJava(c3)) 
    
    // LOGGERS / PROFILERS / DEBUG
    
        const d0 = () => Chat.say(".clear-chat")
    s.addButton(x+75, y+115,    70, 20, "PACKETS", JavaWrapper.methodToJava(d0)) 
    
    const Debug = () => JsMacros.runScript("TEST COPY/DEBUG/DEBUG-Main.js")
    s.addButton(x+75, y+140, 70, 20, "DEBUG 2.0", JavaWrapper.methodToJava(Debug)) 
    
        const d2 = () => Chat.say(".clear-chat")
    s.addButton(x+75, y+165, 70, 20, "PROFILER", JavaWrapper.methodToJava(d2)) 
        const d3 = () => Chat.say(".clear-chat")
    s.addButton(x+75, y+190, 70, 20, "MAPPING", JavaWrapper.methodToJava(d3))   
    
   //RED BUTTON OVERLAY = IN DEVELOPMENT 
    s.addText("[DEBUG 2.0]", 322, 246, 0xC666, true)   //GREEN BUTTON OVERLAY = READY TO USE 0xff666
}))
Hud.openScreen(screen)

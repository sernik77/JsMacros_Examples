//let arr1 = [x=10, y=10, mx=600, my=100, color=0xFFFFFF]
//s.addRect(x-5, y-5, mx-540, my, 0xC, 200);
//s.addText("[MODE SELECTOR]", x+10, y+5, color2, true);
//const button = () => Chat.say("s")
//s.addButton(x, y+70, 45, 10, "BUTTON ",  JavaWrapper.methodToJava(button))
const screen = Hud.createScreen("CREATIVE", false) 
screen.setOnInit(JavaWrapper.methodToJava((s) => {
let arr = [x=250, y=10, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc666]
s.addRect(x-1, y+4, mx+1, my-34, 0xFF0000, 200);
s.addRect(x, y+5, mx=mx, my-35, 0xC, 200);
s.addText("[CREATIVE]", x+30, y+10, 0xFFFFF, true);
s.addText("[MASTER PANEL]", x+20, y+20, 0xFFFFF, true);
s.addText(" - - - - - - - - - - - ", x, y+30, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+30, color, true);
s.addText("Meteor NAXA 1.6 [Io]", x+7, y+40, 0xFFE50A, true);
s.addText("By Serainox", x+7, y+50, 0xFFE50A, true);

let arr1 = [x=10, y=10, mx=100+x, my=y+100, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx, my, 0xC, 200);
s.addText("[MODE SELECTOR]", x+10, y+5, color2, true); 
const gm0 = () => Chat.say("/gamemode survival")
const gm1 = () => Chat.say("/gamemode creative")
const gm2 = () => Chat.say("/gamemode adventure")
const gm3 = () => Chat.say("/gamemode spectator")
s.addButton(x+10, y+20, 80, 12, "SURVIVAL",  JavaWrapper.methodToJava(gm0))
s.addButton(x+10, y+35, 80, 12, "CREATIVE",  JavaWrapper.methodToJava(gm1))
s.addButton(x+10, y+50, 80, 12, "ADVENTURE",  JavaWrapper.methodToJava(gm2))
s.addButton(x+10, y+65, 80, 12, "SPECTATOR",  JavaWrapper.methodToJava(gm3))

let arr2 = [x=120, y=10, mx=100+x, my=y+100, color=0xFFFFFF]
s.addRect(x, y, mx=mx, my, 0xC, 200);
s.addText("[Server]", x+10, y+5, color2, true); 
const s1 = () => JsMacros.runScript("CREATIVE/S/GoldCraft.js")
s.addButton(x+10, y+20, 80, 12, "Gold Craft",  JavaWrapper.methodToJava(s1))

let arr3 = [x=10, y=120, mx=100+x, my=y+100, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx, my, 0xC, 200);
s.addText("[ /GIVE ]", x+10, y+5, color2, true); 
const g1 = () => Chat.say("/give serainox command_block")
const g2 = () => Chat.say("/give serainox structure_block")
const g3 = () => Chat.say("/give serainox barrier")
const g4 = () => Chat.say("/give serainox jigsaw")
const g5 = () => Chat.say("/give serainox structure_void")
s.addButton(x+10, y+20, 80, 12, "Command blk",  JavaWrapper.methodToJava(g1))
s.addButton(x+10, y+35, 80, 12, "Structure blk",  JavaWrapper.methodToJava(g2))
s.addButton(x+10, y+50, 80, 12, "Barrier blk",  JavaWrapper.methodToJava(g3))
s.addButton(x+10, y+65, 80, 12, "Jigsaw blk",  JavaWrapper.methodToJava(g4))
s.addButton(x+10, y+80, 80, 12, "Void blk",  JavaWrapper.methodToJava(g5))

let arr5 = [x=510, y=10, mx=100+x, my=y+100, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx, my, 0xC, 200);
s.addText("[PLUGINS]", x+10, y+5, color2, true); 
const gmg = () => Chat.say("/gamemode survival")
const gmh = () => Chat.say("/gamemode creative")
const gmj = () => Chat.say("/gamemode adventure")
const gml = () => Chat.say("/gamemode spectator")
s.addButton(x+10, y+20, 80, 12, "MultiVerse Core",  JavaWrapper.methodToJava(gm0))
s.addButton(x+10, y+35, 80, 12, "Essentials",  JavaWrapper.methodToJava(gm1))
s.addButton(x+10, y+50, 80, 12, "WorldEdit",  JavaWrapper.methodToJava(gm2))
s.addButton(x+10, y+65, 80, 12, "WorldGuard",  JavaWrapper.methodToJava(gm3))

let arr4 = [x=400, y=10, mx=100+x, my=y+100, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx, my, 0xC, 200);
s.addText("[COMMANDS]", x+10, y+5, 0xFF0000, true);
const commands1 = () => JsMacros.runScript("CREATIVE/C/Fill.js")
s.addButton(x+10, y+20, 80, 12, "FILL",  JavaWrapper.methodToJava(commands1))

let arr6 = [x=510, y=120, mx=100+x, my=y+100, color=0xFFF000, color2=0xc666]
s.addRect(x, y, mx=mx, my, 0xC, 200);
s.addText("[haha]", x+10, y+5, color2, true); 
const pu0 = () => Chat.say("/execute in minecraft:blowupstuff run tp @a[name=username_31415] -280.25 78.00 91.30 11.34 -7.05")
const xd1 = () => Chat.say("/f")
const xd2 = () => Chat.say("/g")
const xd3 = () => Chat.say("/g")
s.addButton(x+10, y+20, 80, 12, "pumpkin",  JavaWrapper.methodToJava(pu0))
s.addButton(x+10, y+35, 80, 12, "Essentials",  JavaWrapper.methodToJava(xd1))
s.addButton(x+10, y+50, 80, 12, "WorldEdit",  JavaWrapper.methodToJava(xd2))
s.addButton(x+10, y+65, 80, 12, "WorldGuard",  JavaWrapper.methodToJava(xd3))

}))
Hud.openScreen(screen)


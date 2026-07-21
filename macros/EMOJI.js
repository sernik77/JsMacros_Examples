//     ╔╦═╦═════╦╦╦╦═╦═════╦╦╗
//     ║║═╬══╦═╗╠╬╣║░╠═╦═╦═╣║║
//     ║║═╣║║║║╠╣║║║╔╬╝║║║╩╣║║
//     ║╚═╩╩╩╩═╩═╩╝╚╝╚═╩╩╩═╩╝║
//     ╚═════════════════════╝
//       [EMOJI PANEL NAXA]

const emo = Hud.createScreen("EMOJIS", false)
emo.setOnInit(JavaWrapper.methodToJava((s) => {

    const callback1 = () => JsMacros.runScript("HUD/HUD1.js")
    s.addButton(20, 40, 50, 20, "BACK", JavaWrapper.methodToJava(callback1))
    const clear = () => Chat.say(".clear-chat")
    s.addButton(70, 40, 50, 20, "CLEAR", JavaWrapper.methodToJava(clear))   
 // ∑∆√ （・∩・） 
    // ROW 1
const r1e1 = () => Chat.say("( ˘︹˘ )")
const r1e2 = () => Chat.say("(ㆆ_ㆆ)")
const r1e3 = () => Chat.say("➏➏➏")
const r1e4 = () => World.playSound("entity.lightning_bolt.thunder", 100)
const r1e5 = () => World.playSound("entity.tnt.primed", 100)
const r1e6 = () => Chat.say(" ¯\\_(ツ)_/¯ ")
const r1e7 = () => Chat.say("'(‿!‿) ԅ(≖‿≖ԅ)'")

s.addButton(20, 80, 50, 20, "( ˘︹˘ )", JavaWrapper.methodToJava(r1e1))
s.addButton(70, 80, 50, 20, "(ㆆ_ㆆ)", JavaWrapper.methodToJava(r1e2))
s.addButton(120, 80, 50, 20, "➏➏➏", JavaWrapper.methodToJava(r1e3))
s.addButton(170, 80, 50, 20, "XXX", JavaWrapper.methodToJava(r1e4))
s.addButton(220, 80, 50, 20, "TNT", JavaWrapper.methodToJava(r1e5))
s.addButton(270, 80, 70, 20, "¯\\_(ツ)_/¯", JavaWrapper.methodToJava(r1e6))
s.addButton(340, 80, 70, 20, "(‿!‿) ԅ(≖‿≖ԅ)", JavaWrapper.methodToJava(r1e7))
//ROW 2
const r2e1 = () => Chat.say("☠")
const r2e2 = () => Chat.say("✌")
const r2e3 = () => Chat.say("☢")
const r2e4 = () => Chat.say("✯")
const r2e5 = () => Chat.say("☣")

s.addButton(20, 100, 20, 20, "☠", JavaWrapper.methodToJava(r2e1))
s.addButton(40, 100, 20, 20, "✌", JavaWrapper.methodToJava(r2e2))
s.addButton(60, 100, 20, 20, "☢", JavaWrapper.methodToJava(r2e3))
s.addButton(80, 100, 20, 20, "✯", JavaWrapper.methodToJava(r2e4))
s.addButton(100, 100, 20, 20, "☣", JavaWrapper.methodToJava(r2e5))

// ROW 3
const r3e1 = () => Chat.say("∑∆√ （・∩・）")
s.addButton(20, 120, 20, 20, "666", JavaWrapper.methodToJava(r3e1))
const r3e2 = () => Chat.say("( • )( • )ԅ(≖⌣≖ԅ)")
s.addButton(20, 140, 20, 20, "666", JavaWrapper.methodToJava(r3e2))
const r3e3 = () => Chat.say("(╯°□°)╯( ┻━┻")
s.addButton(20, 160, 20, 20, "666", JavaWrapper.methodToJava(r3e3))
const r3e4 = () => Chat.say("┌( ಠ_ಠ)┘")
s.addButton(20, 180, 20, 20, "666", JavaWrapper.methodToJava(r3e4))
//(╯°□°)╯( ┻━┻
//┌( ಠ_ಠ)┘
}))
Hud.openScreen(emo)
//  ╔═╦══╦═╦╦╗
//  ║╩╠╗╚╣╠╣║║
//  ╚╩╩══╩═╩╩╝

//┌─┐  ─┐
//│▒│ /▒/
//│▒│/▒/
//│▒ /▒/─┬─┐
//│▒│▒|▒│▒│
//┌┴─┴─┐-┘─┘
//│▒┌──┘▒▒▒│
//└┐▒▒▒▒▒▒┌┘
// └┐▒▒▒▒┌


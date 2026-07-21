// MACRO BLOCK - Internal communication channel betwen Command Blocks and JSM.
// Listening for "Trigger" message from "Macro Block"
// Rename Command Block to Macro Block
// "say Trigger" 

var MB1 = '[Macro Block] '    // Name of interfaced Macro Block
var CMD1 = 'Trigger'          // Trigger string

    if (event.text.getString().includes(MB1 + CMD1))
    JsMacros.runScript("MacroBlock/Trigger.js") 
   // Chat.say("ACTION DETECTED") || Chat.say("ANOTHER COMMAND")

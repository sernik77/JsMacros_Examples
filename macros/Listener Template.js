var N1 = '<Nickname> '    // Nickname to listen for
var MSG1 = 'Message'          // Trigger message

if (event.text.getString().includes(N1 + MSG1))
Chat.say("ACTION DETECTED") // Reply 

//JsMacros.runScript("script.js")
// Use runScript instead of Chat.say to execute longer tasks
 
// Listen for non existing sounds
// Can be triggered with vanilla  '/p1aysound x master @a ~ ~ ~'
// As well as JSM's 'World.playSound("minecraft:x", 100)'
// Redstone Friendly with Command Blocks

if (event.sound == 'minecraft:x') // Listen for minecraft:x sound file
//Chat.log("DETECTED X")
JsMacros.runScript("XDraw.js") // Run XDraw.js script as test callback
//Chat.say("/summon minecraft:tnt ^ ^ ^") // Detonate yourself [OP required]


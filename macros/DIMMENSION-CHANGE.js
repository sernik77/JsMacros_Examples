// Do bunch tasks when going between dimmensions.

//Chat.log(event.dimension) prints entered dimension
//Chat.log(World.getDimension())  Prints exited dimmention

Chat.log(event.dimension)
Time.sleep(1) //logs dimension
if (event.dimension == "minecraft:the_nether")
JsMacros.runScript("Audio.js")
if (event.dimension == "minecraft:the_nether")
Chat.say("Entering Nether")

Chat.log(event.dimension)
Time.sleep(1)
if (event.dimension == "minecraft:overworld")
World.playSound("block.glass.break", 100) //Plays Glass break to cut other sound
if (event.dimension == "minecraft:overworld")
Chat.say("$&6Entering Overworld")


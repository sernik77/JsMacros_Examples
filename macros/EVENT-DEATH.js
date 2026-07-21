//DeathEvent - Simple macro to execute each time you get smacked.
//World.playSoundFile("MLG.wav", 1) // Play some sick sounds [if added]
Chat.log("DIED @ X: " + Player.getPlayer().getX() + " Z: " + Player.getPlayer().getZ()) // Log Death message with coordinates
//Chat.say(".b stop") // Stop all baritone tasks
//Client.shutdown() // Automatic "rage-quit"
Client.waitTick(15)  // Wait


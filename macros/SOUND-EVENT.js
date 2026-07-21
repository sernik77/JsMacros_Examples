// Examples of Sound Event Usage.
//Chat.log(event.sound)

if (event.sound == 'minecraft:entity.chicken.ambient')
Chat.log("CHICKEN DETECTED")

if (event.sound == 'minecraft:entity.witch.celebrate')
Chat.log("Happy Witch Detected")

if (event.sound == 'minecraft:entity.creeper.primed')
Chat.say(".t surround on") || Chat.say("Creeper Shield Activated")
// .t surround part is outsourced to Meteor client surround module.
// || Chat.say(".t flamethrower on") // Optional "FireWall" 


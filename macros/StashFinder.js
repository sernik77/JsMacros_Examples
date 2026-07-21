// Super simple stash locator
Chat.say("Looking for some goodies..")
Chat.title("Show me Shulkers...", "Make sure ESP enabled", 15, 22, 66)
Chat.say("@goto shulker_box") // Or #mine shulker_box // 
//or #Explore with notifier or render trigger to run goto shulker when detected
Chat.say(".t BlockESP")
World.playSound("block.ender_chest.open", 100)
Chat.say(".t stash-finder on") // Configure for shulkers

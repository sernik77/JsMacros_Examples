const loop_count = 12;
for(let i = 0; i < loop_count; ++i) {
// code here
// } at the end of code

const inv = Player.openInventory(); // Interact with inv

Client.waitTick(1) 

const inp = Player.createPlayerInput(0, 0, 0, 0, true, false, false); 
//Jump straight up
Player.addInput(inp)
//Execute above const inp

Client.waitTick(1)  // Wait
Player.getPlayer().lookAt(0,90) // Look down
Client.waitTick(2); // Wait 

inv.setSelectedHotbarSlotIndex(8); 
// Select hotbar slot 
Player.getPlayer().interact();
// Place down block from slot 0
Client.waitTick(5); 
// Wait before looping

}
Chat.say(".t scaffold on")
Client.waitTick(5)
Chat.say(".t auto-walk on")
Client.waitTick(100)
Chat.say(".t auto-walk off") || Chat.say(".t scaffold off")
Chat.say("Finished") || Chat.say("Repeating..")
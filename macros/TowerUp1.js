// Basic movements set [Tower Up] 1 block

const inv = Player.openInventory(); // Class to allow selection of slot
inv.setSelectedHotbarSlotIndex(5); // Select hotbar slot with block to place
Client.waitTick(1)  // Delay 1ms
const inp = Player.createPlayerInput(0, 0, 0, 90, true, true, false); // Sneak & Jump & look down
const inp1 = Player.createPlayerInput(0, 0, 0, 90, false, true, false); // Sneak & look down
Player.addInput(inp) // Execute movement from line above
Client.waitTick(1)
//Player.getPlayer().lookAt(0,90) // Look down
Client.waitTick(1); 
Player.addInput(inp1) //|| Player.addInput(inp1)
Client.waitTick(1)
Player.getPlayer().interact();  // Place block down

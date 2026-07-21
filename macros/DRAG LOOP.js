Client.waitTick(1);
const inv = Player.openInventory(); // Interact with inv
const loop_count = 42;
for(let i = 0; i < loop_count; ++i) {
// code here
// } at the end of cod
Client.waitTick(1);
inv.quick(0);
Player.getPlayer().interact();
Client.waitTick(1);
inv.quick(55);
Client.waitTick(1);
}
 //first slot in shulker
//inv.quick(55);
//inv.quick(0);
//World.playSound("block.lightning_bolt", 100)
//Player.openInventory();
//Client.waitTick(2); // Wait 
//Player.getPlayer().interact();
//inv.quick(0); //first slot in shulker

//World.playSound("block.ender_chest.open", 100)
//Client.waitTick(2);
//Player.openInventory();
//Player.getPlayer().interact();
//inv.setSelectedHotbarSlotIndex(1);

//World.playSound("block.ender_chest.open", 100)
//Client.waitTick(2)
//inv.quick(0);


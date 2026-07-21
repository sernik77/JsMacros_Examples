// WORKING MACRO TEMPLATE FOR AUTO CRAFTING OF OAK PLANKS
// REQUIRES ITEMS INSIDE INVENTORY TO WORK
//step 1; if you need crafting table uncomment
// JsMacros.waitForEvent("OpenScreen");


const inv = Player.openInventory();
const recps = inv.getCraftableRecipes();
Chat.log(recps);
for (const recp of recps) {
  if (recp.getId() == "minecraft:oak_planks") {
    recp.craft(true); //CRAFT ALL
  }
}

inv.quick(0); 

Client.waitTick(1000)

// THIS PART MAKES ALL LOGS INTO PLANKS (MAX 64 LOGS AT ONE LOOP)


Chat.log(recps);
// step 3. loop to find the right one
for (const recp of recps) {
  if (recp.getId() == "minecraft:stick") {
    // select it, true to put max into crafting table
    recp.craft(false);
  }
}

//step 4. move the output of crafting into inv
inv.quick(0);

Client.waitTick(1000)

// THIS PART MAKES 2 PLANKS INTO 4 STICKS ONCE! 

Chat.log(recps);
// step 3. loop to find the right one
for (const recp of recps) {
  if (recp.getId() == "minecraft:crafting_table") {
    // select it, true to put max into crafting table
    recp.craft(false);
  }
}
//step 4. move the output of crafting into inv
inv.quick(0);

// THIS ONE MAKES CRAFTING TABLE (+4 MORE STICKS???)
// NOW MOVE CT TO HOTBAR,

Player.getPlayer().lookAt(0,90) 

//inv.setSelectedHotbarSlotIndex(hotbar_slot_index_number_here) //CHOOSE SLOT
//TO DIRECT LOOK AT BLOCK TO PLACE CT
inv.setSelectedHotbarSlotIndex(6)

Player.getPlayer().interact()
//(maybe after Player.getPlayer().lookAt(x,y,z)) 
// place table
Client.waitTick(1000)

Player.getPlayer().interact();

//wait for open screen, but before actually waiting, open it
JsMacros.waitForEvent("OpenScreen", null, JavaWrapper.methodToJava(() => {
    Player.getPlayer().interact();
}));


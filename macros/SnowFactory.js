// WORKING MACRO TEMPLATE FOR AUTO CRAFTING
// REQUIRES ITEMS INSIDE INVENTORY TO WORK
//step 1; if you need crafting table uncomment
// JsMacros.waitForEvent("OpenScreen")

const inv = Player.openInventory();
const recps = inv.getCraftableRecipes();

const loop_count = 10;
for(let i = 0; i < loop_count; ++i) {

//const inv = Player.openInventory();
//const recps = inv.getCraftableRecipes();
Chat.log(recps);
for (const recp of recps) {
  if (recp.getId() == "minecraft:snow_block") {
    recp.craft(true); //CRAFT ALL
  }
inv.quick(0); 
//Chat.say(".rotation 10 180")
Chat.say(".drop snow_block")
Client.waitTick(10)
 }
}
// THIS PART MAKES ALL LOGS INTO PLANKS (MAX 64 LOGS AT ONE LOOP)

//step 4. move the output of crafting

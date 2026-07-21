// WORKING MACRO TEMPLATE FOR AUTO CRAFTING OF OAK PLANKS
// REQUIRES OAK LOGS INSIDE INVENTORY TO WORK

//step 1; if you need crafting table uncomment
// JsMacros.waitForEvent("OpenScreen");

const inv = Player.openInventory();
const recps = inv.getCraftableRecipes();
// step 2. log it to check
Chat.log(recps);
// step 3. loop to find the right one
for (const recp of recps) {
  if (recp.getId() == "minecraft:oak_planks") {
    // select it, true to put max into crafting table
    recp.craft(true);
  }
}
//step 4. move the output of crafting into inv
inv.quick(0);

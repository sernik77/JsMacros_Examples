// USEFULL CODES WITH USE EXAMPLE

////////////////////////////////////////////

// Loop code "X" times

const loop_count = x; // Number instead of x 
for(let i = 0; i < loop_count; ++i) {
// Insert code here
}

////////////////////////////////////////////
const inv = Player.openInventory(); //Interact with inventory

Client.waitTick(Ticks) // Delay in Ticks (20 Tick = 1s)
Time.sleep(Miliseconds) // Delay in ms  (1000 ms = 1s)

///////////////////////////////////////////////////////////

inv.swap(1, 2); 
// SWAPSlots 
//(1,2,3,4 are CT input slots)(0 is crafting table output) 
//[1][2] (CT SLOTS)        (all slots from left to right)
//[3][4] ---> [0]           (and from top to bottom)
// (Slots 5,6,7,8 is armor and 45 is shield slot)
// INV SLOTS: 1row 9-17, 18-26, 27-35, and hotbar is 36-44

//////////////////////////////////////////////////////////////

JsMacros.waitForEvent("OpenScreen"); //If recipe needs big crafting table

const recps = inv.getCraftableRecipes(); // step 1. Get crafting recipes

Chat.log(recp); // step 2. log it to check (shows in chat for you to see)

for (const recp of recps) { // step 3. loop to find the right one

  if (recp.getId() == "recipe_id_here") {  // select ID "Minecraft:item_name"
      
    recp.craft(true); // Set True to loop forever / False to run once
    
  }
}

inv.quick(0); //step 4. move the output of crafting into inv
// [0] is crafting table output slot


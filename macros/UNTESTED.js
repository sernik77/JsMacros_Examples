//type Inventory = Java.xyz.wagyourtail.jsmacros.client.api.classes.Inventory<any>;

export function findItem(item_id: "minecraft:oak_planks", inv: Inventory): number[] {
    const slotCount = inv.getTotalSlots();
    const slots = [];
    for (let i = 0; i < slotCount; ++i) {
        if (inv.getSlot(i).getItemID() == "minecraft:oak_log"
            slots.push(i);
    }
    return slots;
}

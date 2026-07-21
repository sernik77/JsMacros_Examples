const found = Hud.createDraw3D();

GlobalVars.putBoolean("chestESPState", !GlobalVars.getBoolean("chestESPState"))

const cubeSize = 26

Hud.registerDraw3D(found);

while (GlobalVars.getBoolean("chestESPState")) {
    let pos = Player.getPlayer().getPos();
    for (x = Math.round(pos.x) - cubeSize/2; x <= Math.round(pos.x) + cubeSize/2; x++) {
        for (y = Math.round(pos.y) - cubeSize/2; y <= Math.round(pos.y) + cubeSize/2; y++) {
            for (z = Math.round(pos.z) - cubeSize/2; z <= Math.round(pos.z) + cubeSize/2; z++) {
                if (World.getBlock(x, y, z).getId() == "minecraft:chest") {
                    //Chat.log("cglow ".concat(x, ' ', y, ' ', z));
                    let flag = true;
                    for (const e of found.getBoxes()) {
                        if ((e.pos.x1 == x) && (e.pos.y1 == y) && (e.pos.z1 == z)) {
                            flag = false;
                            break;
                        }
                    }
                    //else
                    if (flag) {
                        found.addBox(x, y, z, x+1, y+1, z+1, 0xFFFFFF, 0xFFFFFF, 0xFF, 0x32, true);
                    }
                }
            }
        }
    }
    Time.sleep(20);
}
Hud.unregisterDraw3D(found)
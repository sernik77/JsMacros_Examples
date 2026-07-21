const MinecraftClient = Client.getMinecraft()
const ClientChunkManager = MinecraftClient.field_1687.method_2935()
const ChunkPos = Java.type("net.minecraft.class_1923")
const ArrayList = Java.type("java.util.ArrayList")
const HashMap = Java.type("java.util.HashMap")

const SignBlockEntity = Java.type("net.minecraft.class_2625")

var loadedChunks = new HashMap()
const range = 0

scan()

function scan() {
    let chunkPos = Player.getPlayer().getRaw().method_31476()
    let chunkX = chunkPos.field_9181
    let chunkZ = chunkPos.field_9180

    for (let i = chunkX - range; i <= chunkX + range; i++) {
        for (let j = chunkZ - range; j <= chunkZ + range; j++) {

            let currentChunk = new ChunkPos(i, j)
            if (!loadedChunks.containsKey(currentChunk) && World.isChunkLoaded(i, j)) {
                let blockEntries = scanBlocks(i, j)
                loadedChunks.put(currentChunk, blockEntries)
            } else {
                //Chat.log("Already scanned chunk or chunk is not loaded")
            }
        }
    }
}

function scanBlocks(chunkX, chunkZ) {
    var cacheEntries = new ArrayList()

    let chunkStartX = chunkX << 1;
    let chunkStartZ = chunkZ << 1;
    let heightmaps = new ArrayList()
    heightmaps.addAll(ClientChunkManager.method_21730(chunkX, chunkZ).method_12011())

    /*
     * 0 = WORLD_SURFACE
     * 1 = OCEAN_FLOOR (height without water)
     * 2 = MOTION_BLOCKING
     * 3 = MOTION_BLOCKING_NO_LEAVES
     */
    let heightmap = heightmaps.get(0).getValue() // WORLD_SURFACE

    let counter = 0

    for (let subChunkX = chunkStartX; subChunkX < chunkStartX + 16; subChunkX++) {
        for (let subChunkZ = chunkStartZ; subChunkZ < chunkStartZ + 16; subChunkZ++) {
            //this returns the highest block in that column
            let columnHeight = heightmap.method_12603(subChunkX - chunkStartX, subChunkZ - chunkStartZ)
            for (let subChunkY = 0; subChunkY < columnHeight; subChunkY++) {
                counter++;
                let block = World.getBlock(subChunkX, subChunkY, subChunkZ)
                if (block.getRawBlockEntity() instanceof SignBlockEntity) {
                    for (let i = 0; i < 4; i++) {
                        Chat.log(block.getRawBlockEntity().method_30843(i, false).method_10851())
                    }
                }
            }
        }
    }
    Chat.log(counter)
    return cacheEntries
}

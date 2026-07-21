const MinecraftClient = Client.getMinecraft();
const PlayerActionC2SPacketAction = Java.type("net.minecraft.class_2846$class_2847");
const startBreakAction = PlayerActionC2SPacketAction.field_12968
const stopBreakAction = PlayerActionC2SPacketAction.field_12973
const BlockPos = Java.type("net.minecraft.class_2338");
const Direction = Java.type("net.minecraft.class_2350");
const Facing = Direction.field_11033
const PlayerActionC2SPacket = Java.type("net.minecraft.class_2846");
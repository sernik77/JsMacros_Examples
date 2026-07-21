const EVENT_NAMES = ["EventAirChange", "EventArmorChange", "EventBlockUpdate", "EventBossbar", "EventChunkLoad", "EventChunkUnload", "EventCustom", "EventDamage", "EventDeath", "EventDimensionChange", "EventDisconnect", "EventEXPChange", "EventHeldItemChange", "EventHungerChange", "EventItemDamage", "EventItemPickup", "EventJoinServer", "EventKey", "Key", "EventOpenScreen", "EventPlayerJoin", "EventPlayerLeave", "EventProfileLoad", "EventRecvMessage", "EventSendMessage", "EventSignEdit", "EventSound", "EventTick", "EventTitle"]
const listenerEntries = EVENT_NAMES
  .flatMap((EVENT) =>
    Array.from(client.listeners(EVENT) || []).map((LISTENER) =>
      [EVENT, LISTENER]
    )
  );

listenerEntries.forEach(([EVENT, LISTENER]) => {
  jsmacros.off(EVENT, LISTENER)
})

hud.listDraw2Ds().forEach(d2d => hud.unregisterDraw2D(d2d))
hud.listDraw3Ds().forEach(d3d => hud.unregisterDraw3D(d3d))
world.getEntities().forEach(e => {
  e.setGlowing(false)
});
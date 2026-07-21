# JsMacros Examples — Macro Catalog

All example macros for [JsMacros](https://www.curseforge.com/minecraft/mc-mods/jsmacros) + Meteor Client.

These are raw, community-style examples. Many are templates or experimental. Adapt them to your needs.

---

## Utility & Templates

| File | Description |
|------|-------------|
| **LINE USES.js** | Useful code snippets: loops, inventory interaction, delays (`Client.waitTick` / `Time.sleep`), crafting helpers, slot mapping notes. |
| **Listener Template.js** | Minimal template for chat listeners that react to a specific nickname + message. |
| **CUSTOM-EVENT.js** | Example of creating a custom event and passing data to another script. |
| **KeyBindMacro.js** | Tiny example of simulating a keybind press (hotbar slot 9). |
| **UNTESTED.js** | Experimental / incomplete helper to find inventory slots containing a specific item (TypeScript-ish, needs cleanup). |

## Chat & Remote Control

| File | Description |
|------|-------------|
| **ChatListener.js** | Listens for messages from a configured nickname. `!` prefix echoes the rest of the message; `@` prefix runs the named script. |
| **Custom Command "NO u_".js** | Intercepts outgoing chat starting with `.` and runs a corresponding script from a subfolder (custom command system). |
| **RC.js** | Remote-control listener. Maps chat commands from specific players to groups of scripts (audio, baritone, combat, etc.). |
| **MacroBlock.js** | Bridges Command Blocks ↔ JsMacros. Listens for a renamed "Macro Block" saying "Trigger" and runs a script (S2C style). |
| **RecvMessage Example.js** | RecvMessage event example: triggers a cow-breeding script on a chat keyword, plus cycles Meteor aim-assist priorities. |

## Events

| File | Description |
|------|-------------|
| **EVENT-DEATH.js** | On death: logs coordinates (X/Z). Easy place to add Baritone stop or rage-quit. |
| **DIMMENSION-CHANGE.js** | On dimension change: plays sounds, sends messages, can run scripts depending on Nether / Overworld. |
| **ENTITY-LOAD.js** | EntityLoad listener — basic creeper alert (partially working). |
| **SOUND-EVENT.js** | Sound event examples: react to chicken ambient, witch celebrate, creeper primed (enables Meteor surround). |
| **FakeSoundEvent.js** | Listens for a non-existent sound (`minecraft:x`) — useful with `/playsound` or command blocks to trigger macros. Runs `XDraw.js` as demo. |
| **PlayerJoin.js** | Template that runs a script when a player with a specific UUID joins. |
| **Listeners.js** | Cleanup utility: removes *all* registered event listeners, clears Draw2D/Draw3D overlays, and disables entity glowing. |

## HUD & Drawing

| File | Description |
|------|-------------|
| **FPS HUD.js** | Clean overlay that shows current FPS, updated every tick. Properly handles resize via `onInit`. |
| **POSITION.js** | Simple screen HUD displaying live Pitch & Yaw + Back button. |
| **POSITION-LOGGER.js** | Dumps mouse position, full player input state, pitch/yaw and XYZ to chat. |
| **HUD1.js** | Creative "Master Panel" HUD: gamemode buttons, /give helpers (command block, structure block, barrier…), placeholder plugin buttons. |
| **HUD-MAIN.js** | Palette-style HUD showing pitch/yaw (with phase effect), current profile, game mode, abilities and ray-traced block. |
| **NAXA_Fancy_Hud.js** | Fancy themed main client HUD (NAXA) with quick-access buttons for tools, commands, debug, mapping, etc. |
| **EMOJI.js** | Custom emoji/kaomoji panel screen. Buttons send various faces / symbols or play sounds (lightning, TNT). |
| **Experimental HUD OBJECTS.js** | Large experimental file exploring Draw2D, screens, buttons, positioning arrays, offset calculations, multi-phase text, pitch/yaw frames. Good reference for advanced HUD layout. |
| **XDraw.js** | Temporary Draw2D test frame + text + sound. Designed to be triggered by `FakeSoundEvent.js`. |

## Crafting & Inventory

| File | Description |
|------|-------------|
| **AUTOCRAFT TEMPLATE.js** | Minimal working template: finds and crafts oak planks from logs in inventory. |
| **CRAFT OAK PLANKS.js** | More complete version: crafts planks → sticks → crafting table, then places the table. |
| **Craft 2x2.js** | Simple 2×2 crafting loop (older / mixed syntax). |
| **SnowFactory.js** | Auto-crafts snow blocks in a loop and drops them. |
| **DRAG LOOP.js** | Inventory quick-move loop (useful starting point for shulker packing / bulk moving). |

## Movement & Building

| File | Description |
|------|-------------|
| **Macro Recorder** | (by Etheradon) Records player movement + rotation until you stand on yellow wool, then waits for green wool and replays the input sequence. |
| **TowerUp1.js** | Places one block under the player while jumping + sneaking (basic tower-up). |
| **SnakeMode.js** | Builds a short vertical structure by jumping + placing, then briefly enables Meteor scaffold + auto-walk. |
| **ROTATE.js** | Fun spin macro: repeatedly adds yaw rotation + shows a title. |

## World Interaction & ESP

| File | Description |
|------|-------------|
| **RayTraceWAG.js** | Toggleable Chest ESP: scans a cube around the player and draws boxes on every chest found. |
| **RayTraceETH.js** | Low-level stubs for sending start/stop break packets (experimental, uses obfuscated MC classes). |
| **Sign Scanner.js** | Scans currently loaded chunks for sign block entities and logs all four lines of text. |
| **StashFinder.js** | Quick starter that enables BlockESP / stash-finder modules and sends Baritone to look for shulkers. |
| **ReactiveCreeperShield.js** | On creeper primed sound → enables Meteor Surround (obsidian shield). Requires obsidian in hotbar + Double Height. |

## Auto / Periodic

| File | Description |
|------|-------------|
| **AUTO-SAVE.js** | Automatically saves the current JsMacros profile every 20 minutes (one in-game day) for a set number of times. Requires a profile named `AUTO-SAVE`. |

## Mixed / Experimental

| File | Description |
|------|-------------|
| **Mixed Up Classes.js** | Breadcrumb trail system (Draw3D lines + optional boxes following the player). Uses a Lua-like API style — interesting hybrid / port example. |

---

### Notes

- Many macros expect Meteor Client commands (`.t surround`, `.settings`, `.b`, etc.).
- Some files contain hard-coded nicknames, UUIDs or profile names — change them.
- Event-based macros should be registered under the corresponding event in the JsMacros GUI (or via `JsMacros.on(...)`).
- Feel free to break, improve and share back.

Happy macroing!  
— sernik77 / Serainox

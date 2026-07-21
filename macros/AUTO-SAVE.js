//AUTO-SAVE    //10 SAVES, ONE EACH 20 MIN.
//20 tick is 1 sec (An in-game day lasts 24,000 ticks or 20 minutes)
// FOR IT TO WORK, FIRST CREATE NEW PROFILE CALLED AUTO-SAVE (CAPITAL)

// RUN ONCE UPON EXECUTION
Chat.log("AUTO-SAVE ON")
Client.waitTick(2)
Chat.log("AUTO SAVING PROFILE EACH 20 MIN or ONE IG DAY")

// LOOP X TIMES 
const loop_count = 10;    // Number of loops instead of x 
for(let i = 0; i < loop_count; ++i) {

Client.waitTick(24000)    // 24K ticks ~ 20 min
Chat.log("AUTO-SAVING...")
Client.waitTick(2)
Chat.say(".profiles AUTO-SAVE save")
Client.waitTick(2)
Chat.log("SAVED as AUTO-SAVE")
}

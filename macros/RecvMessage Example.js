//.b wp USER ID to create Waypoint // .b wp g ID to set goal to Waypoint
// Use as RecvMessage Event
// Listening for "<username> BreedEm" in chat
var N1 = '<username> '
var G1 = 'BreedEm'

if (event.text.getString().includes(N1 + G1))  
    JsMacros.runScript("COW.js") 
    // External macro to locate cows to breed using Baritone #follow or #goal
    // Make sure to toggle breaking & placing blocks if breeding in base
    // Can use Meteor's breeder module. [NOT required]
    
    
const loop_count = 4;
for(let i = 0; i < loop_count; ++i) {

//AIM-ASSIST "look randomization""??
Chat.say(".settings aim-assist priority ClosestAngle")
Client.waitTick(10)
Chat.say(".settings aim-assist priority LowestDistance")
Client.waitTick(10)
Chat.say(".settings aim-assist priority HighestDistance")
Client.waitTick(10)
Chat.say(".settings aim-assist priority LowestHealth")
Client.waitTick(10)

}






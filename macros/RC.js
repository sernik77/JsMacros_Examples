var N1 = '<serainox> '
var N2 = '<OreoWusky> '

//to keep space betwen G and S vars, include space after nickname in var N
var GX = 'XXX' //ALTO / BARITONE STOP
var G1 = 'A'  //Audio-Visual
var G2 = 'B'  //Baritone
var G3 = 'C'  //Combat
var G4 = 'D'  //D
var G5 = 'E'  //E
var G6 = 'F'  //F...

var S1 = '1'
var S2 = '2'
var S3 = '3'
var S4 = '4'
var S5 = '5'
var S6 = '6'

// TERMINATOR ALTO BARI
    if (event.text.getString().includes(N1 + GX))  // XXX
    JsMacros.runScript("XXXTERMINATOR.js")
    
// GROUP A - AUDIO
    if (event.text.getString().includes(N1 + G1 + S1))  // A1
    JsMacros.runScript("AUDIO1.js")   
    if (event.text.getString().includes(N1 + G1 + S2))  // A2
    JsMacros.runScript("AUDIO2.js")   
    if (event.text.getString().includes(N1 + G1 + S3))  // A3
    JsMacros.runScript("AUDIO3.js")

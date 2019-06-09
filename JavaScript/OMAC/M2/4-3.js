/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)

 */
var n = 60;
while (n >= 0){
    console.log({'50':'Orbiter transfers from ground to internal power',
        '31':'Ground launch sequencer is go for auto sequence start',
        '16':'Activate launch pad sound suppression system',
        '10':'Activate main engine hydrogen burnoff system',
        '6':'Main engine start','0':'Solid rocket booster ignition and liftoff!'}[n+'']||`T-${n} seconds`);
    n--;
}

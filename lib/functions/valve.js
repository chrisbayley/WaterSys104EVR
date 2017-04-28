// name: Valve
// outputs: 2
// Simulates a tap.
// send it isOn messages to set it state
// send it a 'flow' and the flow appears on the 
// output of the tap along with it's compliment 
// which represents the taps inflow
rc = null;
var isOn = context.get('isOn')||false;

if (msg.topic == "isOn") {
    switch (msg.payload) {
        case true:
        case 1:
            isOn = true;
            break;
        default:
            isOn = false;
    }
    context.set('isOn',isOn);
}
    
else if (isOn){
    var nmsg = {    topic: msg.topic,
                    payload: -msg.payload };
    rc = [msg,nmsg];
}

node.status(
    (isOn)? {fill:"green",shape:"dot",text:"on"}
		    :{fill:"grey",shape:"dot",text:"off"}
);

return rc;
// name: Schmitt trigger
// outputs: 1
// Schmitt trigger turns on at hight% and turns off at low%

const onThreshold = 25;
const offThreshold = 20;

var myState = context.get('myState')||false;

var level = msg.payload;

msg.topic = "isOn";

if ((level > onThreshold) && !myState) {
    myState = true;
} else if ((level < offThreshold) && myState) {
    myState = false;
} else {
    return null;
}

context.set('myState',myState);

msg.payload = myState;
return msg;
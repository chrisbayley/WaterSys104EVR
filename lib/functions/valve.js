// name: Valve
// outputs: 2
var isOn = context.get('isOn')||false;

if (msg.topic == "isOn") {
    isOn = (msg.payload)? true:false;
    context.set('isOn',isOn);
    return null;
}
    
if (isOn){
    var nmsg = {    topic: msg.topic,
                    payload: -msg.payload };
    return [msg,nmsg];
}

return null;
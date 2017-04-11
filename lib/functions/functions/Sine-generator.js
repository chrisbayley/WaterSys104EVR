// name: Sine generator
// outputs: 1
var angle = context.get('angle')||0;

msg.payload = (1 + Math.sin(angle))/2;

angle += 10 * Math.PI / 180;

context.set('angle',angle);
return msg;
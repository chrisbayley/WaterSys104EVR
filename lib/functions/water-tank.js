// name: water tank
// outputs: 1
var fill = context.get('fill')||0;

fill = Math.max(Math.min(fill+msg.payload,100),0);

context.set('fill',fill);

msg.payload = fill;
return msg;
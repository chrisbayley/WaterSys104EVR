// name: valve controller
// outputs: 3
const NUM_OPTIONS = 3;
var msgs = [];

for (var i=1;i<=NUM_OPTIONS;++i)
    msgs.push({payload:false});
    
if (msg.payload <= NUM_OPTIONS)
    msgs[msg.payload-1].payload = true;

return msgs;
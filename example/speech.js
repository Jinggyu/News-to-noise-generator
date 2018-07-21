
var fs = require("fs");
const say = require('say')
console.log("run speech generator!")
// regenerate audio every 12 minute
setInterval(function() {
    for (i=0; i<10; i++) {
        var textIndex = `text${i}`;
        var newsIdex = `./News${i}.txt`;
        var audioName = `${i}.wav`
        textIndex = fs.readFileSync(newsIdex);
        say.export(textIndex, 'samantha', 0.6, audioName);
        console.log (`create ${i}.wav`)
    }

}, 6* 1000); 


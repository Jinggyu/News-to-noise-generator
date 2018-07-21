
var fs = require("fs");
var files= fs.readdirSync('./');
var filesname = Object.values (files);

setInterval(function() {

for (i=0; i<filesname.length;i++) {
    if (filesname[i].includes('google.Chrome')){
     var filePath = './'+ filesname[i];
     fs.unlinkSync(filePath);
     console.log ('got one!')
    } else {
        console.log ('nothing to clear!')
    }
   
   }  
}, 100 * 1000); // 100 * 1000 milsec 
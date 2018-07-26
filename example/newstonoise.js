
var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=artificial intelligence&sort=newest&api-key=58b212fa68ff4ebba43aa3f66ba494f6';
var sentences =[];
var pusharticle = ["today's tech news"];

  
function preload(){
    track1 = loadSound('./0.wav');
    track2 = loadSound('./1.wav');
    track3 = loadSound('./2.wav');
    track4 = loadSound('./3.wav');
    track5 = loadSound('./4.wav');
    track6 = loadSound('./5.wav');  
    track7 = loadSound('./6.wav');
    track8 = loadSound('./7.wav');
    track9 = loadSound('./8.wav');
    track10 =loadSound('./9.wav');
    console.log ('finish loading!!!');
  }
 
        function setup()
        { 
            noCanvas();
            loadJSON (url,gotData);
            // reload audio files every 10 mins;
            setInterval(function(){preload();}, 600000); 
            noLoop();   
        }
        
        function gotData(data) {  
            var articles = data.response.docs;
            for (var i = 0; i < articles.length; i++) {
            createElement('h1', articles[i].headline.main);
            //createP(articles[i].snippet);
            createP(articles[i].snippet);
            sentences.push (articles[i].headline.main + ' ' + articles[i].snippet);
            }
          }
        
          //generate .txt after 2 minute (waiting for loading)
        function draw () { 
            setTimeout(function() {
            console.log (sentences);
            for (i = 0; i < 10; i++){
                pusharticle.splice (0,1,sentences[i]);
                save(pusharticle, `News${i}.txt`);
            }
        }, 120 * 1000); 

         
                                       // Processing audios
        //********************Randomly selected track has it's own decay ways (decays locally)***************************
//******Unselected track doesn't have its own decaying way but decays globally**********************************************
//********************************end up with reverb and stretch*****************************************  
        var n=11;
        var intervaltime = 8000;
        
        
         //  play tracks 
          function playTracks (tracks){
              tracks.play();
          }
         
         // play track every 8 seconds
        setInterval(decrease, intervaltime);
        function decrease() {
          if (n>1){
             n=n-1;
          } else {
            n=10;
          }
             tracksId =  eval('track'+n);
             playTracks(tracksId);
             console.log('track'+n);
        }
        
        var reverb;
        var delay;
        
          // create effect groups
          groups = {
            
            group1: function (track,startTime){
            reverb = new p5.Reverb();
            setTimeout(function(){
            //reverb||
            reverb.amp(1) ;
            reverb.process(track, 3, 0.2);
            }, startTime);
            
        },
        
          
            group2: function(track,startTime){
              setTimeout(function(){
              //delay||
              delay = new p5.Delay();
              delay.process(track, .12, .7, 600); //process(Signal, [delayTime], [feedback], [lowPass])
              delay.setType('pingPong'); 
              delay.amp(0.5);
              console.log('hi there! delay!')
              }, startTime);
            },
            
            
            group3: function(track1,track2,track3){
             // track rate:
             setTimeout(function(){
                 track1.rate(0.3);   // neeed change
                 console.log('hi there! stretch1!')
             }, 50000); //50s
             
              setTimeout(function(){
                 track2.rate(0.02);
                 console.log('hi there! stretch2!')
             }, 80000); //80s
             
               setTimeout(function(){
                 track3.rate(0.05);
                 console.log('hi there! stretch3!');
             }, 120000); //120s
          },
          
           group4: function(track){
             reverb = new p5.Reverb();
            setTimeout(function(){
           // track.disconnect();
            //reverb||
            reverb.amp(1) ;
            reverb.process(track, 60, 0.8);
             console.log('hi there! reverb2!');
            }, 65000); //65s
          }
          }
        
          
          // distribute tracks to the groups
           
          //******** feeding group1&group2 effects to random tracks**********
          var numberarray = [];
          for (var j=0; j<11; j++){
          var number = Math.floor (Math.random()*10+1);
          numberarray.push(number);
          }
         // return numberarray;
          var number1arr = [numberarray[0],numberarray[2],numberarray[3],numberarray[4]];
          var number2arr = [numberarray[10],numberarray[5],numberarray[8]];
         
          for (var h=0; h<4; h++){
            number1 = number1arr[h];
            var trackSeleted1 = eval ('track'+ number1);
            //console.log(number1);
            var addTime = (11-number1)*intervaltime + 6000;
            groups.group1(trackSeleted1,addTime);
            
          }
          
          for (var g=0; g<3; g++){
            number2 = number2arr[g];
            var trackSeleted2 = eval ('track'+ number2);
            var addTime2 = (11-number2)*intervaltime + 7000;
            groups.group2(trackSeleted2,addTime2);
          }
         
          //******** feeding group3 effects step by step*****************
          for (var k=8; k<=10; k++){
            var number3 = k;
            var number4 = k-3;
            var number5 = k-6;
            var trackSeleted3 = eval('track' + number3);
            var trackSeleted4 = eval('track' + number4);
            var trackSeleted5 = eval('track' + number5);
            groups.group3(trackSeleted3,trackSeleted4,trackSeleted5);
          }
        //******** feeding group4 effects to the early tracks*****************
         for (var m=1; m<=10; m++){
           var trackSeleted10 = eval ('track'+ m);
           //console.log(m);
           groups.group4(trackSeleted10);
         }

        }
      
    
   
     
   




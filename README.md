
# News-to-noise_generator
This is a real-time implementation simply transfers web contents (New York times articles) to spoken voice, and utilizes the generated speech creating a sound art piece. In this example, the generated speech are real-timely layered in orders (according to its posting time) and dissolved until the sound lost it's semantics. 

### Structure 
<img width="476" alt="simple_chart" src="https://user-images.githubusercontent.com/41480919/43035246-5724dcd0-8cba-11e8-9b2f-f1b1ed77c88f.png">


## Built With
* [P5.js](https://p5js.org/) 
* Javascript

## Getting Started
The three js code functions seperatly:
* **speech.js：** transfer local .txt to audio files on your computer (check out the [applicable platform](https://github.com/Marak/say.js))
* **project.js:** &nbsp;&nbsp;is the main code that generates texts via API as well as does audio processing (sound composition) 
* **clear.js:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;help to clear caches (if needed)

## Prerequisites & Installing
* To run speech.js, installing say.js and node.js. Follow the [instruction](https://github.com/Marak/say.js)

* Run web.html using Local server. Here are two simple options:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**|Python 2|:** 
&nbsp;&nbsp;&nbsp;Typing in terminal:
```python -m SimpleHTTPServer```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then visit: http://localhost:8000
<br /> <br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**|Node|:** 
&nbsp;&nbsp;&nbsp;Typing in terminal: 
```npm install -g http-server```. 
&nbsp;&nbsp; Then cd to the folder and type:
```http-server```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visit: http://localhost:8080/


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More info.: https://github.com/processing/p5.js/wiki/Local-server
<br />

## Contributing

Please read [README.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to me. :-P


## Authors & References
 * Built by Jing Yu 
 * Using [Say.js](https://github.com/Marak/say.js); 
 * Refer to Daniel Shiffman's [tutorial](https://shiffman.net/a2z/data-apis/) of API & P5.js


## Acknowledgments

The project is made for an art exhibition at TAIKANG SPACE.

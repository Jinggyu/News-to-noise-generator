
# News-to-noise_generator
The code in this repository was designed for a sound art exhibition; the text content of New York Times articles are translated in real-time to speech (TTS). Generated audio is layered by posting-time and the semantics are lost through each story's dissolution. 

### Structure 
<img width="476" alt="simple_chart" src="https://user-images.githubusercontent.com/41480919/43041954-6105b8ae-8d3d-11e8-9403-ab73976ecfc6.png">

## Getting Started
The three js code functions seperatly:
* **speech.js：** transfer local .txt to audio files on your computer (check out the [Applicable platform](https://github.com/Marak/say.js))
* **project.js:** &nbsp;&nbsp;is the main code that generates texts via API as well as does audio processing (sound composition).  
* **clear.js:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;help to clean caches (if needed)

## Prerequisites & Installing
* To run speech.js, install [say.js](https://github.com/Marak/say.js) and [node.js](https://nodejs.org/en/). To run project.js, download p5 library. Follow the [Instruction](https://github.com/Marak/say.js)

* Run web.html using Local Server. Here are two simple options:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**|Python 2|:** 
&nbsp;&nbsp;&nbsp;Typing in terminal:
```python -m SimpleHTTPServer```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then visit: http://localhost:8000
<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**|Node|:** 
&nbsp;&nbsp;&nbsp;Typing in terminal: 
```npm install -g http-server```. 
&nbsp;&nbsp; Then cd to the folder and type:
```http-server```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visit: http://localhost:8080/
<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**|OR|** follow the step here: https://github.com/processing/p5.js/wiki/Local-server
<br />

## Contributing

Feel free for submitting pull requests to me ヽ( ・∀・)ノ★*"`'*-.,_,.-*'`"*-.,_


## Authors & References
 * Built by Jing Yu 
 * Refer to Daniel Shiffman's [tutorial](https://shiffman.net/a2z/data-apis/) of APIs


## Acknowledgments

The project is made for an art exhibition at TAIKANG SPACE.

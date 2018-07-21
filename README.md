
# News-to-noise_generator
This is a real-time implementation simply transfers web contents (New York times articles) to spoken voice, and utilizes the generated speech creating a sound art piece. In this example, the generated speech are real-timely layered in orders (according to its posting time) and dissolved until the sound lost it's semantics. 

#### Structure 
<img width="476" alt="simple_chart" src="https://user-images.githubusercontent.com/41480919/43035246-5724dcd0-8cba-11e8-9b2f-f1b1ed77c88f.png">



## Built With
* [P5.js](https://p5js.org/) 
* Javascript

## Getting Started
The three js code functions seperatly:
* **speech.js：** transfer local .txt to audio files on your computer (check out the [applicable platform](https://github.com/Marak/say.js))
* **project.js:** &nbsp;&nbsp;is the main code that generates texts via API as well as does audio processing (sound composition) 
* **clear.js:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;help to clear caches (if needed)

### Prerequisites
* To run speech.js, installing say.js and node.js. Follow the [instruction](https://github.com/Marak/say.js)
* Note the saving/reading directory 

### Installing
Run web.html using Local server. Here are two simple options:

|Python 2|  Typing in terminal:
```
python -m SimpleHTTPServer
```
then visit

```
http://localhost:8000
```
OR,

|Node| Typing in terminal: 
```
npm install -g http-server
```
then cd to the folder and type:
```
http-server
```
then visit 
```
http://localhost:8080/
```

Also you can follow the step [here](https://github.com/processing/p5.js/wiki/Local-server)

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system



## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 
This is a project made for an art exhibition at TAIKANG SPACE.

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)
* [Say.js](https://github.com/Marak/say.js)
See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

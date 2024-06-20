//target the body from the html
const body = document.body;

//create a container div that contains the app name, timer and buttons

const appTitle = document.createElement('h1');
appTitle.textContent = "Stop Watch";
body.appendChild(appTitle);

const container = document.createElement('div');
container.setAttribute('class','container');

const time = document.createElement("div");
time.setAttribute('id', 'time');
time.textContent = "00:00";
container.appendChild(time);

const buttons = document.createElement("div");
buttons.setAttribute('class', 'buttons');

    const startButton = document.createElement('button');
    startButton.setAttribute('id', 'start');
    startButton.textContent = "start";
    buttons.appendChild(startButton);

    const stopButton = document.createElement('button');
    stopButton.setAttribute('id', 'stop');
    stopButton.textContent = "stop";
    buttons.appendChild(stopButton);

    const resetButton = document.createElement('button');
    resetButton.setAttribute('id', 'reset');
    resetButton.textContent = "reset";
    buttons.appendChild(resetButton);

container.appendChild(buttons);

body.appendChild(container);

//Logic for the working of the stop watch
let timer;
let seconds = 0;
let minutes = 0;
let running = false;

function Timer(){
    seconds++;
    if(seconds == 60){
        seconds=0;
        minutes++;
    }

    let sec = seconds < 10 ? '0' + seconds : seconds;
    let min = minutes < 10 ? '0' + minutes : minutes;

    time.textContent = `${min}:${sec}`;
}

//click events for the buttons
startButton.addEventListener('click', () => {
    if(!running) {
        body.style.backgroundImage = "url('./images/green-background.png')";
        Timer();
        timer = setInterval(Timer, 1000);
        running = true;
    }
});

stopButton.addEventListener('click', () => {
    body.style.backgroundImage = "url('./images/red-background.png')";
    clearInterval(timer);
    running = false;
});

resetButton.addEventListener('click', () => {
    body.style.backgroundImage = "url('./images/grey-background.png')";
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    time.textContent = '00:00';
});
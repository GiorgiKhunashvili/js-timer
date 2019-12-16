const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const circle = document.querySelector("circle");
const restartButton = document.getElementById("restart");

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, restartButton, {
    onStart(totalDuration){
        duration = totalDuration;
    },
    onTick(timeRemaining){
        let timer = perimeter * timeRemaining / duration - perimeter;
        circle.setAttribute('stroke-dashoffset', timer);
        let pircent = duration * (40 / 100);
        if (timeRemaining < pircent){
            circle.setAttribute("stroke", "red");
        };
    },
    restart() {
        circle.setAttribute("stroke-dasharray", perimeter);
        circle.setAttribute('stroke-dashoffset', 0);
    },
    onComplete(){
        circle.setAttribute("stroke", "green")
    }
});


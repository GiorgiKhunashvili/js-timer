class Timer {
    constructor(durationInput, startButton, pauseButton, restartButton, callBacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.restartButton = restartButton;
        this.FirstInput = this.durationInput.value.slice(0);

        if (callBacks){
            this.onStart = callBacks.onStart;
            this.onTick = callBacks.onTick;
            this.onComplete = callBacks.onComplete;
            this.restart = callBacks.restart;
        }

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
        this.restartButton.addEventListener("click", this.restartTimer);
    };
    start = () => {
        if (this.onStart){
            this.onStart(this.getTimeRemaining)
        }
        this.FirstInput = this.getTimeRemaining;
        this.tick();
        this.intervalId = setInterval(this.tick, 20);

    };

    pause = () => {
        clearInterval(this.intervalId)
    }

    tick = () => {
        if (this.getTimeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        } else {
            this.setTimeRemaining = this.getTimeRemaining - 0.02;
            if (this.onTick){
                this.onTick(this.getTimeRemaining);
            }
        }

    };

    restartTimer = () => {
        this.pause();
        this.setTimeRemaining = parseFloat(this.FirstInput);
        if(this.restart){
            this.restart();
        }
    }

    
    get getTimeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    
    set setTimeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}

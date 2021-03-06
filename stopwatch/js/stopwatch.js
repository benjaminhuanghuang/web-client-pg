function Stopwatch(opts) {
    var time = 0;
    var interval;
    var offset;

    var elem = opts.elem;
    var delay = opts.delay;


    function update() {
        if (this.isOn) {
            time += delta();
        }
        var formattedTime = timeFormatter(time);
        console.log(formattedTime);
        elem.textContent = formattedTime;
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormatter(timeInMilliseonds) {
        var time = new Date(timeInMilliseonds);
        var minuts = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();

        if (minuts.length < 2) {
            minuts = "0" + minuts;
        }
        if (seconds.length < 2) {
            seconds = "0" + seconds;
        }

        while (milliseconds.length < 3) {
            milliseconds = "0" + milliseconds;
        }

        return minuts + " : " + seconds + " . " + milliseconds;
    }


    this.isOn = false;

    this.start = function () {
        if (!this.isOn) {
            //interval = setInterval(update, 10);  Error!
            interval = setInterval(update.bind(this), delay);
            offset = Date.now();
            this.isOn = true;
        }
    }

    this.stop = function () {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    }

    this.reset = function () {
        if (!this.isOn) {
            time = 0;
            update();
        }
    }


}

//var watch = new Stopwatch();

//watch.start();
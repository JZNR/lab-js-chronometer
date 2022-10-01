class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    if (seconds < 60) return seconds;
  }

  computeTwoDigitNumber(value) {
    value = value.toString();
    if (value.length === 1) {
      value = "0" + value;
    }
    return value;
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return minutes + ":" + seconds;
  }
}

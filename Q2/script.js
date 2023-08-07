let stepCounter = {
  step: 0,
  increase: function () {
    this.step++;
    return this;
  },
  decrease: function () {
    this.step--;
    return this;
  },
  reset: function () {
    this.step = 0;
    return this;
  },
  read: function () {
    console.log(this.step);
    return this;
  },
};

stepCounter.read();

stepCounter.reset().increase().decrease().read();

let user = {
  name: "john",
  age: 30,
  sayHello: function () {
    console.log("Hello " + this.name);
  },
};

user.sayHello();

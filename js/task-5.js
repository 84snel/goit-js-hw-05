class Car {
  constructor({ speed = 0, isOn = false, distance = 0, maxSpeed, price }) {
    this.maxSpeed = maxSpeed; // максимальная скорость
    this.speed = speed; // текущая скорость, изначально 0
    this.isOn = isOn; // заведен ли автомобиль, значения true или false. Изначально false
    this.distance = distance; // общий киллометраж, изначально 0
    this._price = price; // цена автомобиля
  }

  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance} и price: ${car._price}`,
    );
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.isOn === false) return alert('автомобиль не заведен');
    let whatSpeed =
      this.speed + value > this.maxSpeed
        ? (this.speed = this.maxSpeed)
        : (this.speed += value);
  }

  decelerate(value) {
    if (this.isOn === false) return alert('автомобиль не заведен');
    let whatSpeed =
      this.speed - value < 0 ? (this.speed = 0) : (this.speed -= value);
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance += this.speed * hours;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

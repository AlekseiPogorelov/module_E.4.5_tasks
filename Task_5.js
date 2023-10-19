class Appliance {
  constructor (name, toque) {
    this.name = name,
    this.voltage = 220
    this.toque = toque,
    this.connect = false
  }
  getName() {
    console.log(`Наименование ${this.name}`);
  }
  
  getPower() {
    console.log(`Потребляемая мощность ${this.voltage*this.toque} W`);
  }
  
  getOn() {
    if(this.connect===false) {
      this.connect = true;
      console.log(`Устройство подключено`);
    }
    else {}
  } 
  
  getOff() {
    if(this.connect===true) {
      this.connect = false;
      console.log(`Устройство выключено`);
    }
    else {}
  }
}

class Conditioner extends Appliance {
  constructor(name, toque, сooling=false, color='Белый'){
    super(name);
    this.toque = toque;
    this.сooling = сooling;
    this.color = color;
  }
  
  getColor() {
    console.log(`Цвет ${this.color}`);
  }
  
  getCoolingOn() {
    if(this.сooling===false) {
      this.сooling = true;
      console.log(`Охлаждние включено`);
    }
    else {}
  } 
  
  getCoolingOff() {
    if(this.сooling===true) {
      this.сooling = false;
      console.log(`Охлаждение выключено`);
    }
    else {}
  }
}
  
class CoffeeMaker extends Appliance {
  constructor(name, toque, heating=false, illumination='Синий цвет') {
    super(name);
    this.toque = toque;
    this.heating = heating;
    this.illumination = illumination;
  }
  
  getHeatingOn() {
    if(this.heating===false) {
      this.heating = true;
      console.log(`Подогрев включен`);
    }
    else {}
  } 
  
  getHeatingOff() {
    if(this.heating===true) {
      this.heating = false;
      console.log(`Подогрев выключен`);
    }
    else {}
  } 

  getIllumination() {
    console.log(`Подсветка ${this.illumination}`);
  }
}

  const ConditionerNew = new Conditioner('Whirlpool', 12, true);
  const CoffeeMakerNew = new CoffeeMaker('HOLT', 10, false, 'Синий цвет');
  
  ConditionerNew.getName();
  ConditionerNew.getPower();
  ConditionerNew.getColor();
  ConditionerNew.getOn();
  ConditionerNew.getCoolingOn();
  ConditionerNew.getCoolingOff();
  ConditionerNew.getOff();
  
  CoffeeMakerNew.getName();
  CoffeeMakerNew.getPower();
  CoffeeMakerNew.getOn();
  CoffeeMakerNew.getHeatingOff();
  CoffeeMakerNew.getHeatingOn();
  CoffeeMakerNew.getIllumination();
  CoffeeMakerNew.getOff();
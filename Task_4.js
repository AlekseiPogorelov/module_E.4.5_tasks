function Appliance(name, toque) {
    this.name = name,
    this.voltage = 220,
    this.toque = toque,
    this.connect = false
  }
  Appliance.prototype.getName = function() {
    console.log(`Наименование ${this.name}`);
  }
  
  Appliance.prototype.getPower = function() {
    console.log(`Потребляемая мощность ${this.voltage*this.toque} W`);
  }
  
  Appliance.prototype.getOn = function() {
    if(this.connect===false) {
      this.connect = true;
      console.log(`Устройство подключено`);
    }
    else {}
  } 
  
  Appliance.prototype.getOff = function() {
    if(this.connect===true) {
      this.connect = false;
      console.log(`Устройство выключено`);
    }
    else {}
  } 
  
  function Conditioner(name, toque, сooling=false, color='Белый') {
    this.name = name,
    this.toque = toque,
    this.сooling = сooling,
    this.color = color
  
  }
  Conditioner.prototype = new Appliance();
  
  Conditioner.prototype.getColor = function() {
    console.log(`Цвет ${this.color}`);
  }
  
  Conditioner.prototype.getCoolingOn= function() {
    if(this.сooling===false) {
      this.сooling = true;
      console.log(`Охлаждние включено`);
    }
    else {}
  } 
  
  Conditioner.prototype.getCoolingOff = function() {
    if(this.сooling===true) {
      this.сooling = false;
      console.log(`Охлаждение выключено`);
    }
    else {}
  } 
  
  function CoffeeMaker(name, toque, heating=false, illumination='Синий цвет') {
    this.name = name,
    this.toque = toque,
    this.heating = heating,
    this.illumination = illumination
  }
  CoffeeMaker.prototype = new Appliance();
  
  CoffeeMaker.prototype.getHeatingOn= function() {
    if(this.heating===false) {
      this.heating = true;
      console.log(`Подогрев включен`);
    }
    else {}
  } 
  
  CoffeeMaker.prototype.getHeatingOff = function() {
    if(this.heating===true) {
      this.heating = false;
      console.log(`Подогрев выключен`);
    }
    else {}
  } 

  CoffeeMaker.prototype.getIllumination = function() {
    console.log(`Подсветка ${this.illumination}`);
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
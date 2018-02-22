class SmartCalculator {
  constructor(initialValue) {
    this.value=''+initialValue;
    this.result=0;
  }

  remember(obj,num) {
    num.value=obj.value;
    num.remember=obj.remember;
    num.add=obj.add;
    num.subtract=obj.subtract;
    num.multiply=obj.multiply;
    num.devide=obj.devide;
    num.pow=obj.pow;
  }

  add(number) {
    this.value+='+'+number;
    this.result=eval(this.value);
    let num=new Number(this.result);
    let obj=new SmartCalculator(this.value);
    this.remember(obj,num);
    return num;
  }

  subtract(number) {
    this.value+='-'+number;
    this.result=eval(this.value);
    let num=new Number(this.result);
    let obj=new SmartCalculator(this.value);
    this.remember(obj,num);
    return num;
  }

  multiply(number) {
    this.value+='*'+number;
    this.result=eval(this.value);
    let num=new Number(this.result);
    let obj=new SmartCalculator(this.value);
    this.remember(obj,num);
    return num;
  }

  devide(number) {
    this.value+='/'+number;
    this.result=eval(this.value);
    let num=new Number(this.result);
    let obj=new SmartCalculator(this.value);
    this.remember(obj,num);
    return num;
  }

  pow(number) {
    this.value+='**'+number;
    this.result=eval(this.value);
    let num=new Number(this.result);
    let obj=new SmartCalculator(this.value);
    this.remember(obj,num);
    return num;
  }
}

module.exports = SmartCalculator;

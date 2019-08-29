class Calculator{
    constructor(){
        this.array = [];
        this.Last = 0;
    }

    add(){
        let sum = 0;

        for(var i = 0; i < arguments.length; i++){
            sum += (arguments[i]);
             this.Last = sum;
        }
        return sum;
    }
   last(){
       return this.Last;
   }
   set_slot(b){
       return this.array.push(this.Last);
    ///  return this.array[b -1];
   }
   get_slot(b){
       return this.array[b - 1];
   }
}

let Calculator_instance = new Calculator();
console.warn(Calculator_instance.add(1, 3))
console.warn(Calculator_instance.last());
console.warn(Calculator_instance.set_slot(1));
console.warn(Calculator_instance.get_slot(1));

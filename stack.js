class Stack {
  constructor(){
    this.array = [];
  }
  pop(){
    var returnElement = this.array[this.array.length - 1]
    this.array = this.array.slice(0,this.array.length - 1);
    return returnElement;
  }
  push(element){
    this.array[this.array.length] = element;
  }
  top(){
    return this.array[this.array.length - 1];
  }
  isEmpty(){
    if(this.array.length == 0){
      return true;
    } else {
      return false;
    }
  }
  clear(){
    this.array = [];
  }
}

module.exports.stack = Stack

class Queue {
  constructor(){
    this.queue = [];
  }
  isEmpty(){
    if(this.queue.length == 0){
      return true;
    } else {
      return false;
    }
  }
  enqueue(element){
    this.queue[this.queue.length] = element;
  }
  dequeue(){
    var returnElement = this.queue[0];
    for(var i = 0, l = this.queue.length; i < l; i++){
      this.queue[i] = this.queue[i+1];
    }
    this.queue.pop();
    return returnElement;
  }
  first(){
    return this.queue[this.queue.length - 1];
  }
  clear(){
    this.queue = [];
  }
}

module.exports.queue = Queue;

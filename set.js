class Set {
  constructor(){
    this.elements = {
    }
  }
  insert(element){
    for(var item of Object.keys(this.elements)){
      if(this.elements[item] == item){
        break;
      }
    }
    var i = Object.keys(this.elements).length
    this.elements[i] = element;
  }
  remove(element){
    var valuearray = [];
    for(var item of Object.keys(this.elements)){
      valuearray.push(this.elements[item]);
    }
    var i = valuearray.indexOf(element);
    delete this.elements[i];
  }
  has(element){
    for(var item of Object.keys(this.elements)){
      if(this.elements[item] === element){
        return true;
      }
    }
    return false;
  }
  all(){
    var returnArray = []
    for(var item of Object.keys(this.elements)){
      returnArray.push(this.elements[item]);
    }
    return returnArray;
  }
  length(){
    var i = Object.keys(this.elements).length;
    console.log("console log " + i);
    return i;
  }
}


module.exports.set = Set;

// higher Order functions

//function in which one or more than one function/s are passed as argument/s
// those arguments are called callbacks

// SetTimeout(()=>{},0)
const array = [1,2,3];
Array.prototype.myMap = myMap;//prototyping

function myMap(cb){
    let output =[];
    for(let i=0;i<this.length;i++){
       output.push(cb(this[i],i,this));
    }
 return output;
}

function myFilter(cb){
  let output=[];
  for(let i=0;i<this.length;i++){
    if(cb(this[i],i,this))// if true then push
        output.push(this[i]);
  }
  return output;
}

function myReduce(cb,initialValue){
 let acc = initialValue;
 for(let i=0;i<this.length;i++){
   acc = acc?cb(acc,this[i],i,this):this[i];// checks if acc is null
 }
return acc;
}

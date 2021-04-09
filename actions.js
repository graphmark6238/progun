function mixe(arr){
    var temp = 0;
    var random = 0;
    for(var i = 0; i<arr.length;i++){
      randome = Math.floor(Math.random()*arr.length);
      temp = arr[i];
      arr[i] = arr[randome];
      arr[randome]=temp;
    }
    return arr;
  }

  
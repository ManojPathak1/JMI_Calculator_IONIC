starter.service("HomeService", function(){
  this.isValid = function(pointers){
    var i=0;
    var isUndefined = false;
    var count = 0;
    for(i=0; i<pointers.length; i++) // Loop for generating number.
    {
      var ptr = pointers[i];
      if(!isNaN(ptr) && ptr!=null) // It is a number
      {
        if(!(ptr<=10)) // Number is greater than 10.
        {
          return false;
        }
        else
        {
          count++; // Count
        }
      }
      else if(ptr==undefined || ptr===null) // It is undefined. No number is entered.
      {
        isUndefined = true;
        i++; // This is the change i did.
        break;
      }
    }
    if(isUndefined)
    {
      for (; i<pointers.length; i++)
      {
        var ptr = pointers[i];
        if (!isNaN(ptr) && ptr!=null) // It is a number.  and not equal to null. Change made after backup.
        {
          return false;
        }
      }
    }
    if(count==0)
    {
      return {status:"EMPTY"};
    }
    return {status:true, count:count};
  };
});

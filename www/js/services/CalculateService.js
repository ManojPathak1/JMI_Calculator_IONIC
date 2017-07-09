starter.service("CalculateService", function(DataFactory){
  this.getPointer = function(){
    var pointers = DataFactory.pointers;
    var count = DataFactory.count;
    switch(count)
    {
      case 1 : return pointers[0];
      case 2 : return (pointers[0]+pointers[1])/2;
      case 3 : return ((pointers[0]+pointers[1])*0.25+pointers[2]*0.50);
      case 4 : return ((pointers[0]+pointers[1])*0.25+(pointers[2]+pointers[3])*0.50)/1.5;
      case 5 : return ((pointers[0]+pointers[1])*0.25+
                      (pointers[2]+pointers[3])*0.50+pointers[4]*0.75)/2.25;
      case 6 : return ((pointers[0]+pointers[1])*0.25+
        (pointers[2]+pointers[3])*0.50+(pointers[4]+pointers[5])*0.75)/3;
      case 7 : return ((pointers[0]+pointers[1])*0.25+
        (pointers[2]+pointers[3])*0.50+(pointers[4]+pointers[5])*0.75+pointers[6])/4;
      case 8 : return ((pointers[0]+pointers[1])*0.25+
        (pointers[2]+pointers[3])*0.50+(pointers[4]+pointers[5])*0.75+pointers[6]+pointers[7])/5;
    }
  }
  this.getPercentage = function(){
    var ap = this.getPointer();
    var percentage = (20*ap*ap*ap-380*ap*ap+2725*ap-1690)/84;
    return percentage;
  }
});

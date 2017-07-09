starter.service('ChartService', function (DataFactory, $q) {
  this.getData = function (ap) {
    var defer = $q.defer();
    var data = DataFactory.pointers;
    var d = [];
    var d1 = [];
    var d2 = [];
    var l = [];
    var i=1;
    angular.forEach(data, function(ptr){
      if(ptr!=undefined)
      {
        d1.push(ptr);
        d2.push(ap);
        l.push("Semester "+i);
        i++;
      }
    });
    d = [d1, d2];
    var o = {data:d, label:l};
    defer.resolve(o);
    return defer.promise;
  }
});

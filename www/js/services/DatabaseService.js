starter.service('DatabaseService', function($ionicPopup, $cordovaSQLite, $q){
  var ref = this;
  this.save = function(cCPI, cp){
    // console.log(cCPI+" "+cp);
    var query = "INSERT INTO result (ccpi, cp) VALUES (?,?)";
    $cordovaSQLite.execute(db, query, [cCPI, cp])
      .then(function(result){
        $ionicPopup.alert
        ({
          title: 'Success !',
          template: 'Result saved successfully !'
        });
        ref.deleteAll();
      }, function(error){
        $ionicPopup.alert
        ({
          title: 'Failure !',
          template: 'Please fill the information.'
        });
        console.log(error);
      })
  };
  this.deleteAll = function(){
    var deleteQuery = "DELETE FROM RESULT WHERE id NOT IN (SELECT MAX(id) FROM RESULT)";
    $cordovaSQLite.execute(db, deleteQuery, []).
    then(function(result){
      //console.log("All elements deleted.");
    }, function(error){
      console.log(error);
    })
  }
  this.getData = function(){
    var defer = $q.defer();
    var query = "SELECT * FROM RESULT WHERE ID = (SELECT MAX(ID) FROM result)";
    $cordovaSQLite.execute(db, query, [])
    .then(function(result){
      if(result.rows.length>0)
      {
       // console.log(result.rows.item(0).ccpi+" "+result.rows.item(0).cp);
        defer.resolve({status:true, ccpi:result.rows.item(0).ccpi, cp:result.rows.item(0).cp});
      }
      else
      {
        console.log("No result found !");
        defer.resolve({status:false});
      }
    }, function (err) {
      console.log(err);
      defer.reject(err);
    });
    return defer.promise;
  }
})

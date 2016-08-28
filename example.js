
function getTempCallback(location, callback){
  callback(undefined,78);
  callback("cityNotFount");

}

getTempCallback('city', function(err, temp){
if(err){
  console.log('error', err);

}
else{
  console.log("success", temp)
}

});

function getTempPromise (location){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(79);
      reject('city not found');

    }, 1000)
  });
}

getTempPromise('philadelphia').then(function(temp){
  console.log("success", temp);

}, function(err){
  console.log('error', err);

})

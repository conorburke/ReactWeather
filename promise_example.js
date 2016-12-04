function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    } else {
      reject("A and B need to be numbers");
    }
  })
}

addPromise(2,3).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});

addPromise('conor',9).then(function(sum){
  console.log('this should not show', sum)
}, function(err){
  console.log('this should appear', err)
});
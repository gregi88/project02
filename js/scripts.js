(function() {

  var table = document.querySelector("#myTable"),
  ths = table.querySelectorAll("thead th"),
  trs = table.querySelectorAll("tbody tr");

// ths gives us nodeList that is array like object
//console.log(ths);



// converting array like object in to array
/*
var thsArrshort = Array.from(ths);
console.log(thsArrshort);
*/



// what really stays behind Array.from();

function makeArray(nodeList){
  var arr = [];

  for (var i = 0; i < nodeList.length; i++) {
    arr.push(nodeList[i]);
  }
  return arr;
}



// function functionName(e) is event handling function (on event object is created)
// (e) is object handler
// e.preventDefault()
function sortBy(e) {


  var target = e.target,
      thsArr = makeArray(ths),
      trsArr = makeArray(trs),
      indexOfThs = thsArr.indexOf(target);
      // console.log(thsArr);
      console.log(indexOfThs);

trsArr.sort(function(a,b){ return a-b});






  //console.log(target);
  //console.log(ths.indexOf);

}

for (var i = 0; i < ths.length; i++) {
  ths[i].onclick = sortBy;
}

})();

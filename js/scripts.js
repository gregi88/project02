(function() {

  var table = document.querySelector("#myTable"),
      ths = table.querySelectorAll("thead th"),
      trs = table.querySelectorAll("tbody tr");


// we need to get index of clicked ths but we first we need to
// transform array like object (nodeList) in to array

// ths gives us nodeList
//console.log(ths);

// convertin NodeList in to array


function makeArray(nodeList){

  array = [];

  for (var i = 0; i < nodeList.length; i++) {
    array.push(nodeList[i]);
  }

  return array;

}

function clearClassName(nodeList){
  for (var i = 0; i < nodeList.length; i++) {
    nodeList[i].className = "";
  }
}



function sortBy(e){

      //catching event on clicket target element
  var target = e.target;
       //console.log(target);
      // converted nodeList of ths
  var thsArray = makeArray(ths);
      //console.log(thsArray);

      // converted nodeList of trs
  var trsArray = makeArray(trs);
      //console.log(trsArray);

      //getting index of clicked ths
  var index = thsArray.indexOf(target);
      //console.log(index);

      // empty document fragment
  var docF = document.createDocumentFragment();
      //console.log(docF);

  var order = (target.className === "" || target.className === "desc") ? "asc" : "desc";
      //console.log(order);
  //console.log(target.indexOf);

  clearClassName(ths);

    trsArray.sort(function(a,b){
      //getting tr elements
        //console.log(a);
        //console.log(b);

        var tdA = a.children[index].textContent,
            tdB = b.children[index].textContent;

        //console.log(tdA);

        if(tdA < tdB){
          // to sort descendind change to 1
          return order === "asc" ? -1 : 1;
        } else if(tdA > tdB){
          // to sort descendind change to -1
          return order === "asc" ? 1 : -1;
        }else {
          return 0;
        }
    });

    //console.log(trsArray);

// adding tr to docF to dispaly it on page

    trsArray.forEach(function(tr){
      docF.appendChild(tr);
    });

    target.className = order;

    table.querySelector("tbody").appendChild(docF);



}

for (var i = 0; i < ths.length; i++) {

  ths[i].onclick = sortBy;

}



})();

document.addEventListener("click",()=>{


  var ma1 = parseInt(document.getElementById("m1").innerText);
  var ma2 = parseInt(document.getElementById("m2").innerText);
  var ma3 = parseInt(document.getElementById("m3").innerText);
  var math = ma1+ma2+ma3;
  
  var d1 = parseInt(document.getElementById("db1").innerText);
  var d2 = parseInt(document.getElementById("db2").innerText);
  var d3 = parseInt(document.getElementById("db3").innerText);
  var dbms = d1+d2+d3;
  
  var ds1 = parseInt(document.getElementById("ds1").innerText);
  var ds2 = parseInt(document.getElementById("ds2").innerText);
  var ds3 = parseInt(document.getElementById("ds3").innerText);
  var dst = ds1+ds2+ds3;
  
  var se1 = parseInt(document.getElementById("s1").innerText);
  var se2 = parseInt(document.getElementById("s2").innerText);
  var se3 = parseInt(document.getElementById("s3").innerText);
  var sen = se1+se2+se3;
  
  var py1 = parseInt(document.getElementById("p1").innerText);
  var py2 = parseInt(document.getElementById("p2").innerText);
  var py3 = parseInt(document.getElementById("p3").innerText);
  var pyt = py1+py2+py3;
  
  var mo1 = parseInt(document.getElementById("a1").innerText);
  var mo2 = parseInt(document.getElementById("a2").innerText);
  var mo3 = parseInt(document.getElementById("a3").innerText);
  var mob =mo1+mo2+mo3;

  var tot = [];
  tot[1] = math;
  tot[2] = dbms;
  tot[3] = dst;
  tot[4] = sen;
  tot[5] = pyt;
  tot[6] = mob;
  let i=0;
  var frow=document.getElementById(i);
  var fcol=document.createElement("th");
  fcol.innerText="TOTAL";
  frow.appendChild(fcol);

  for (k in tot){
    var row=document.getElementById(i+1);
    var col=document.createElement("td");
    col.innerText=tot[i+1];
    row.appendChild(col);
    i++;

  }
  
});

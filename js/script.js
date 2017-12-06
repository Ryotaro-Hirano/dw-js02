/* **********************************************************

	複数の処理をまとめよう
	〜同じ処理は２度書かない！〜

	※悩んだらjs001で学んだ、consoleやalertを活用しよう!!

*********************************************************** */
function changeText(id){
  var getID = document.getElementById(id);
  console.log(getID);
  var thisText = getID.innerText;
  document.getElementById('changeArea').innerText = thisText;
}

// function chageText() {
//   var getdata = new Date();
//   alert(getdata);
// }

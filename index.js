let data = 'asdf'

$(document).ready(function() {
  })
  
let openFile = function(event) {
  let input = event.target;
  let reader = new FileReader()
  
  reader.onload = function(){
    let dataURL = reader.result
    let output = document.getElementById('output')
    
    output.src = dataURL
    let html = `<a href="${output.src}" target="_blank">your data</a>`
    data  = reader.readAsDataURL(input.files[0])
    console.log(data)
    debugger
    
    document.getElementById('output').innerHTML = data
   }
}
  
// function parseFile() {
//   debugger
//   let myfile = document.querySelector('#myfile')
//   let reader = new FileReader()

//   reader.readAsText(myfile)
//   reader.onload = function () {
//     console.log(reader.result);
//   }
//   reader.onerror = function (error) {
//     console.log('Error: ', error);
//   }.fail(function(){
//     alert("FAILURE!!!!")
//   })
// }

 
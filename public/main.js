//Need to create code for the following:
  //Clicking button to generate fetch for getting random word from words collection
  //same but specifically for random saved word
  //have section be hidden and become visible upon clicking any of the three generate buttons
  //fix up the fetch triggered by clicking save icon
const save = document.getElementsByClassName("fa-save");


// Array.from(save).forEach(function(element){
//   element.addEventListener('click', function(){
//     console.log("hi")
//     const word = this.parentNode.parentNode.childNodes[1].innerText
//     const def = this.parentNode.parentNode.childNodes[3].innerText
//     fetch('saved', {
//       method: 'put',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         'word': word,
//         'def': def
//       })
//     })
//     .then(function (response) {
//       // window.location.reload()
//     })
//   });
// })

// var downVote = document.getElementsByClassName("fa-arrow-down");
// //have to fix the contents of downvote function
// Array.from(downVote).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('words', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

// function randSaved(){
//
// }
//
// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });

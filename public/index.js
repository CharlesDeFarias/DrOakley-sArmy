document.getElementById('loginB').addEventListener('click', showLogin);
document.getElementById('signupB').addEventListener('click', showSignup);

// document.getElementById('genRandSav').addEventListener('click', randSaved);
const save = document.getElementsByClassName("fa-save");
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
console.log("hi")
Array.from(save).forEach(function(element){
  element.addEventListener('click', function(){
    console.log("hi")
    const word = this.parentNode.parentNode.childNodes[1].innerText
    const def = this.parentNode.parentNode.childNodes[3].innerText
    fetch('saved', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'word': name,
        'def': def
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
})
function showLogin(){
  let logIn= document.getElementById('loginHidden')
  if(logIn.style.display==""){
    logIn.style.display = "block"
  }else{
    logIn.style.display =""
  }
}
function showSignup(){
  let signUp=document.getElementById('signupHidden').style
  if(signUp.display===""){
    signUp.display  = "block"
  }else{
    signUp.display = ""
  }
}
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

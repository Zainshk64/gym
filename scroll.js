// let sec = document.querySelectorAll("section");
// let menu =document.querySelectorAll(".right a")
// // console.log(menu);

// window.onscroll = () => {
//   sec.forEach(i => {
//     let top = window.scrollY;
//     let offset = i.offsetTop - 150;
//     let height = i.offsetHeight;
//     let id = i.getAttribute('id');
//     if (top >= offset && top < offset + height) {
//       menu.forEach(link => {
//         link.classList.remove('activ');
//         document.querySelector('.right a [href*=' + id + ']')
//           .classList.add('activ');
//       });
//     }
//   });
// };


function reveal()
 {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
 window.addEventListener("scroll", reveal);
//  nav scroling


let anchors = document.querySelectorAll('a[href*="#"]')

// for(let i=0; i<anchors.length; i++){
// anchors[i].addEventListener
// }

for(let anchor of anchors){
   anchor.addEventListener('click', function(event){
      event.preventDefault()
      let blockID = anchor.getAttribute('href')
      document.querySelector(blockID).scrollIntoView({
         behavior: "smooth",
         block: 'start'
      })

   })
}
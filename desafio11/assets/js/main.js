function togglePassword(){
  document.querySelectorAll(".eye").forEach(eye => eye.classList.toggle("hide"))

/*
 if(senha.getAttribute('type') == 'password'){
   senha.setAttribute('type', 'text')
 } else{
   senha.setAttribute('type', 'password')
 }
 */
 const type =
     senha.getAttribute("type") == "password" ? "text" : "password"
     senha.setAttribute("type", type)
      }


document.querySelector("#card_number_input").oninput = () =>{
document.querySelector(".cc-number").innerHTML =  document.querySelector("#card_number_input").value
}

document.querySelector("#card_name").oninput = () =>{
  document.querySelector(".label").innerHTML =  document.querySelector("#card_name").value
  }

  document.querySelector("#validate").oninput = () =>{
    document.querySelector(".validate").innerHTML =  document.querySelector("#validate").value
    }

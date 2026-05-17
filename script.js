const buttons = document.querySelectorAll(".about-btn");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const currentDetails =
      button.nextElementSibling;

    const allDetails =
      document.querySelectorAll(".details-box");

    allDetails.forEach(detail => {

      if(detail !== currentDetails){
        detail.style.display = "none";
      }

    });

    if(currentDetails.style.display === "block"){
      currentDetails.style.display = "none";
    }

    else{
      currentDetails.style.display = "block";
    }

  });

});
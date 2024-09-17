let form =  document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    //alert("Form submitted");   
    console.dir(form);

    let user = this.elements[0];
    let pass = this.elements[1];
    
    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});




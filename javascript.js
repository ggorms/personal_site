console.log("Hello Word!");

successMessage = () => {
    alert("You have successfully submitted the form!")
}

document.getElementById("submit").addEventListener("click", successMessage);
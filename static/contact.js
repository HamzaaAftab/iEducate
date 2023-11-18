function validateForm() {
    // Get values of required fields
    name1 = document.getElementById('name').value;
    email = document.getElementById('email').value;
    city = document.getElementById('city').value;
    address = document.getElementById('address').value;
    phNumber = document.getElementById('ph-number').value;
    date = document.getElementById('date').value;
    textArea = document.getElementById('textArea').value;

    // Check if any required field is empty
    if (name1 === "" || email === "" || city === "" || address === "" || phNumber === "" || date === "" || textArea === "") {
        alert("Please fill in all required fields");
        return false; // Prevent form submission
    }

    // If all required fields are filled, allow form submission
    return true;
}
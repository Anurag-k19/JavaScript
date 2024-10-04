const forms = document.querySelector('#bmiForm');

forms.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get values from input fields and convert them to float
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);

    const results = document.querySelector('#result');
    const answers = document.querySelector('#answer');

    // Validate height input
    if (height <= 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid Height.`;
        answers.innerHTML = ''; // Clear the answer if height is invalid
        return; // Exit the function
    }

    // Validate weight input
    if (weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight.`;
        answers.innerHTML = ''; // Clear the answer if weight is invalid
        return; // Exit the function
    }

    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is: <span>${bmi}</span>`;

    // Determine weight category
    if (bmi < 18.5) {
        answers.innerHTML = `Underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        answers.innerHTML = `Normal Weight`;
    } else {
        answers.innerHTML = `Overweight`;
    }
});

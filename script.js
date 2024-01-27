function convert() {
    let inputValue = document.getElementById("inputValue").value;
    let inputType = document.getElementById("inputType").value;
    let result = document.getElementById("result");

    if (inputType === "celsius") {
        // Convert Celsius to Fahrenheit
        result.innerHTML = `${inputValue}°C is ${(inputValue * 9/5 + 32).toFixed(2)}°F`;
    } else {
        // Convert Fahrenheit to Celsius
        result.innerHTML = `${inputValue}°F is ${((inputValue - 32) * 5/9).toFixed(2)}°C`;
    }
}

function calculateIt() {
    var yourName = document.getElementById('your-name').value;
    var crushName = document.getElementById('crush-name').value;
    if (yourName != "" && crushName != "") {
        let percentage = Math.floor(Math.random() * 100);
        document.getElementById("result-msg").innerText = yourName + " and " + crushName + "'s chance of togetherness: ";
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    }
}
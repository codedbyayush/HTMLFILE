function showPopup() {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "block";
    } else {
        alert("Thank you for submitting your recommendation!");
    }
}

function hidePopup() {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    }
}

function addRecommendation() {
    const input = document.getElementById("newRecommendation");
    const text = input ? input.value.trim() : "";

    if (text !== "") {
        const recommendation = document.createElement("div");
        recommendation.className = "recommendation";
        recommendation.textContent = '"' + text + '"';

        const list = document.getElementById("list");
        if (list) {
            list.appendChild(recommendation);
        }

        if (input) {
            input.value = "";
        }

        showPopup();
    } else {
        alert("Please enter a recommendation.");
    }
}

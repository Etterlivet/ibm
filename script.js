function addRecommendation() {
    const newRecommendationText = document.getElementById("new_recommendation").value;
    if (newRecommendationText) {
        const recommendationsContainer = document.getElementById("all_recommendations");

        // Create a new recommendation element
        const newRecommendation = document.createElement("div");
        newRecommendation.classList.add("recommendation");
        newRecommendation.innerHTML = `<span>&#8220;</span>${newRecommendationText}<span>&#8221;</span>`;
        
        // Add the new recommendation to the container
        recommendationsContainer.appendChild(newRecommendation);
        
        // Clear the textarea
        document.getElementById("new_recommendation").value = "";

        // Show confirmation popup
        showPopup(true);
    }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

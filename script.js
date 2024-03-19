document.getElementById("diseaseForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var diseaseName = document.getElementById("diseaseName").value.trim();
    var diseaseInfo = document.getElementById("diseaseInfo");
    
    // Check if disease name is entered
    if (diseaseName !== "") {
        // Display the solution for the entered disease
        showSolution(diseaseName, diseaseInfo);
    } else {
        // Clear the disease information if no disease name is entered
        diseaseInfo.innerHTML = "";
        diseaseInfo.style.display = "none";
    }
});

function showSolution(diseaseName, diseaseInfo) {
    // Clear previous content
    diseaseInfo.innerHTML = "";
    diseaseInfo.style.display = "block"; // Show disease information

    var solutionHTML = ""; // Initialize solution HTML

    // Solution for Tomato Bacterial Spot
    if (diseaseName.toLowerCase() === "tomato bacterial spot") {
        solutionHTML = `
         
        <h2><strong style="color:#050ce1;">${diseaseName}</strong></h2>
            <p><strong style="color: black;">Description:</strong> Characterized by small, dark spots on leaves and fruit, which may enlarge and develop a yellowish halo.</p>
            <p><strong style="color: black;">Precautionary Measures:</strong> Plant disease-resistant tomato varieties, maintain proper spacing between plants, and avoid overhead watering.</p>
            <p><strong style="color: black;">Suggestion:</strong> Remove and destroy infected plant parts promptly to prevent disease spread.</p>
            <p><strong style="color: black;">Recommended Pesticide:</strong> Copper-based fungicides.</p>
            <p><strong style="color: black;">Recovery Time:</strong> Recovery may take 10-14 days.</p>
            <p><strong style="color: black;">Severity:</strong> Moderate to serious if left untreated.</p>
        `;
    }
    
    // Solution for Tomato Early Blight
    else if (diseaseName.toLowerCase() === "tomato early blight") {
        solutionHTML = `
       
        <h2><strong style="color:#050ce1;">${diseaseName}</strong></h2>
            <p><strong style="color: black;">Description:</strong> Identified by concentric rings on leaves, starting from the bottom of the plant.</p>
            <p><strong style="color: black;">Precautionary Measures:</strong> Rotate crops, maintain soil health, and practice proper sanitation.</p>
            <p><strong style="color: black;">Suggestion:</strong> Remove infected leaves and apply mulch to reduce soil splash.</p>
            <p><strong style="color: black;">Recommended Pesticide:</strong> Chlorothalonil-based fungicides.</p>
            <p><strong style="color: black;">Recovery Time:</strong> Recovery may take 10-14 days.</p>
            <p><strong style="color: black;">Severity:</strong> Moderate if managed promptly.</p>
        `;
    }

    // Solution for Tomato Late Blight
    else if (diseaseName.toLowerCase() === "tomato late blight") {
        solutionHTML = `
       
        <h2><strong style="color:#050ce1;">${diseaseName}</strong></h2>
            <p><strong style="color: black;">Description:</strong> Causes dark, water-soaked lesions on leaves, stems, and fruit, often leading to plant death.</p>
            <p><strong style="color: black;">Precautionary Measures:</strong> Plant disease-resistant varieties, avoid overhead watering, and provide adequate air circulation.</p>
            <p><strong style="color: black;">Suggestion:</strong> Remove and destroy infected plants to prevent disease spread.</p>
            <p><strong style="color: black;">Recommended Pesticide:</strong> Fungicides containing mancozeb or chlorothalonil.</p>
            <p><strong style="color: black;">Recovery Time:</strong> Recovery may take 14-21 days.</p>
            <p><strong style="color: black;">Severity:</strong> Serious and can lead to crop loss if not managed effectively.</p>
        `;
    }

    // Solution for Tomato Leaf Mold
    else if (diseaseName.toLowerCase() === "tomato leaf mold") {
        solutionHTML = `
        
        <h2><strong style="color:#050ce1;">${diseaseName}</strong></h2>
            <p><strong style="color: black;">Description:</strong> Results in yellowing of leaves with fuzzy white or gray patches on the underside.</p>
            <p><strong style="color: black;">Precautionary Measures:</strong> Provide good air circulation, avoid overcrowding plants, and water early in the day.</p>
            <p><strong style="color: black;">Suggestion:</strong> Remove infected leaves and improve ventilation in the growing area.</p>
            <p><strong style="color: black;">Recommended Pesticide:</strong> Fungicides containing chlorothalonil or copper.</p>
            <p><strong style="color: black;">Recovery Time:</strong> Recovery may take 7-10 days.</p>
            <p><strong style="color: black;">Severity:</strong> Moderate if addressed promptly.</p>
        `;
    }

    else if (diseaseName.toLowerCase() === "tomato septoria leaf spot") {
        solutionHTML = `
        
        <h2><strong style="color:#050ce1;">${diseaseName}</strong></h2>
            <p><strong style="color: black;">Description:</strong> Identified by small, dark spots with lighter centers on lower leaves, which may spread upwards.</p>
            <p><strong style="color: black;">Precautionary Measures:</strong>  Remove infected leaves, practice crop rotation, and avoid overhead watering.</p>
            <p><strong style="color: black;">Suggestion:</strong>  Apply mulch to prevent soil splash and improve air circulation.</p>
            <p><strong style="color: black;">Recommended Pesticide:</strong>  Fungicides containing chlorothalonil or copper.</p>
            <p><strong style="color: black;">Recovery Time:</strong> Recovery may take 10-14 days.</p>
            <p><strong style="color: black;">Severity:</strong> Moderate if managed promptly.</p>
        `;
    }

    else if (diseaseName.toLowerCase() === "tomato spider mites") {
        solutionHTML = `
        
        <h2><strong style="color:#050ce1;">${diseaseName}</strong></h2>
            <p><strong style="color: black;">Description:</strong>  Causes stippling on leaves, leading to yellowing and eventual drying of leaves.</p>
            <p><strong style="color: black;">Precautionary Measures:</strong>   Maintain adequate humidity, avoid over-fertilization, and introduce natural predators like ladybugs.</p>
            <p><strong style="color: black;">Suggestion:</strong>   Regularly spray plants with water to reduce mite populations.</p>
            <p><strong style="color: black;">Recommended Pesticide:</strong>  Miticides containing abamectin or spinosad.</p>
            <p><strong style="color: black;">Recovery Time:</strong> Recovery may take 7-10 days.</p>
            <p><strong style="color: black;">Severity:</strong> Moderate if addressed promptly.</p>
        `;
    }

    else if (diseaseName.toLowerCase() ===  "tomato target spot") {
        solutionHTML = `
        
        <h2><strong style="color:#050ce1;">${diseaseName}</strong></h2>
            <p><strong style="color: black;">Description:</strong>   Characterized by concentric rings with a target-like appearance on leaves, leading to defoliation.</p>
            <p><strong style="color: black;">Precautionary Measures:</strong> Provide good air circulation, avoid overhead watering, and remove infected plant debris.</p>
            <p><strong style="color: black;">Suggestion:</strong>  Apply fungicides preventively during periods of high humidity.</p>
            <p><strong style="color: black;">Recommended Pesticide:</strong> Fungicides containing chlorothalonil or copper.</p>
            <p><strong style="color: black;">Recovery Time:</strong> Recovery may take 7-14 days.</p>
            <p><strong style="color: black;">Severity:</strong> Moderate if managed effectively.</p>
        `;
    }

    
    else if (diseaseName.toLowerCase() ===  "tomato yellow leaf curl virus") {
        solutionHTML = `
        
        <h2><strong style="color:#050ce1;">${diseaseName}</strong></h2>
            <p><strong style="color: black;">Description:</strong>   Causes yellowing and curling of leaves, stunted growth, and reduced fruit production.</p>
            <p><strong style="color: black;">Precautionary Measures:</strong> Plant disease-resistant varieties, control whiteflies, and remove infected plants.</p>
            <p><strong style="color: black;">Suggestion:</strong>   Use reflective mulch to deter whiteflies and apply insecticidal soap to control them.</p>
            <p><strong style="color: black;">Recommended Pesticide:</strong>  Insecticides containing neem oil or pyrethrin.</p>
            <p><strong style="color: black;">Recovery Time:</strong> No cure; management focuses on prevention and controlling whitefly populations.</p>
            <p><strong style="color: black;">Severity:</strong>  Serious and can lead to significant crop loss. </p>
        `;
    }

       
    else if (diseaseName.toLowerCase() ==="tomato tomato mosaic virus") {
        solutionHTML = `
        
        <h2><strong style="color:#050ce1;">${diseaseName}</strong></h2>
            <p><strong style="color: black;">Description:</strong>   Causes mosaic patterns and yellowing of leaves, stunted growth, and reduced fruit quality.</p>
            <p><strong style="color: black;">Precautionary Measures:</strong> Plant disease-resistant varieties, control aphids, and practice strict sanitation measures.</p>
            <p><strong style="color: black;">Suggestion:</strong>   Remove and destroy infected plants to prevent disease spread.</p>
            <p><strong style="color: black;">Recommended Pesticide:</strong>   No specific pesticide for viral diseases; focus on controlling aphid vectors.</p>
            <p><strong style="color: black;">Recovery Time:</strong> No cure; management focuses on prevention and controlling whitefly populations.</p>
            <p><strong style="color: black;">Severity:</strong>  Serious and can lead to significant crop loss. </p>
        `;
    }

    else if (diseaseName.toLowerCase() ==="tomato healthy") {
        solutionHTML = `
        <h2><strong style="color:#050ce1;">${diseaseName}</strong></h2>
            <p><strong style="color: black;">Description:</strong>   Represents a healthy tomato plant without any disease symptoms.</p>
            <p><strong style="color: black;">Precautionary Measures:</strong> Implement good cultural practices such as proper watering, fertilization, and pest management.</p>
            <p><strong style="color: black;">Suggestion:</strong>   Regularly monitor plants for signs of disease and promptly address any issues that arise.</p>
            <p><strong style="color: black;">Recommended Pesticide:</strong>   Not applicable for healthy plants.</p>
            <p><strong style="color: black;">Recovery Time:</strong> N/A as there is no disease to treat.</p>
            <p><strong style="color: black;">Severity:</strong>  N/A as the plant is healthy. </p>
        `;
    }



    // Add more conditions for other diseases if needed...

    else {
        // Display a message if the disease name is not recognized
        solutionHTML = "<p>Disease information not available.</p>";
    }

    // Display the solution HTML
    diseaseInfo.innerHTML = solutionHTML;
}

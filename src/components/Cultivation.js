import React, { useState } from 'react';
import '../css/Cultivation.css'; // Assuming you save the CSS as Cultivation.css

const cropData = {
  Tomatoes: {
    soilPreparation: "Tomatoes need well-draining, fertile soil with a pH between 6.0 and 6.8. Add organic matter like compost or manure to improve soil structure and fertility.",
    sowing: "Sow seeds 1/4 inch deep and 2-3 inches apart in rows that are 2-3 feet apart. Transplant seedlings when they have 2-3 sets of leaves.",
    watering: "Tomatoes need consistent moisture, especially when fruiting. Water deeply and regularly, but avoid overwatering.",
    sunlight: "Tomatoes need full sun (at least 6 hours of direct sunlight).",
    support: "Provide support for indeterminate varieties using trellises, stakes, or cages.",
    fertilization: "Feed tomatoes with a balanced fertilizer (e.g., 10-10-10 NPK) at planting time and again when fruiting begins.",
    pruning: "Remove lower leaves to prevent disease and promote air circulation. Remove suckers to direct energy towards fruiting.",
    pestManagement: "Keep an eye out for pests like hornworms, aphids, and whiteflies. Inspect plants for signs of disease regularly.",
  },
  Wheat: {
    soilPreparation: "Wheat prefers well-draining, fertile soil with a pH between 6.0 and 7.0.",
    sowing: "Sow seeds 1-2 inches deep and 6-12 inches apart in rows that are 12-18 inches apart.",
    watering: "Wheat needs consistent moisture, especially during germination and tillering.",
    sunlight: "Wheat needs full sun (at least 6 hours of direct sunlight).",
    fertilization: "Feed wheat with a balanced fertilizer at planting time and again when tillering begins.",
    weedControl: "Regularly remove weeds to prevent competition for water and nutrients.",
    pestManagement: "Watch for pests like aphids, armyworms, and rodents. Regularly inspect plants for signs of disease.",
  },
  "Rice": {
    "soilPreparation": "Rice prefers well-draining, fertile soil with a pH between 5.5 and 6.5. Add organic matter like compost or manure to improve soil structure and fertility.",
    "sowing": "Sow seeds 1-2 inches deep and 6-12 inches apart in rows that are 12-18 inches apart.",
    "watering": "Rice needs consistent moisture, especially during germination and tillering. Flood the field to control weeds and provide a consistent water supply.",
    "sunlight": "Rice needs full sun (at least 6 hours of direct sunlight).",
    "fertilization": "Feed rice with a balanced fertilizer (e.g., 10-10-10 NPK) at planting time and again when panicles emerge.",
    "pestManagement": "Keep an eye out for pests like stem borers, leaf folders, and rodents. Regularly inspect plants for signs of disease."
  },
  "Maize": {
    "soilPreparation": "Maize prefers well-draining, fertile soil with a pH between 6.0 and 7.0. Add organic matter like compost or manure to improve soil structure and fertility.",
    "sowing": "Sow seeds 1-2 inches deep and 6-12 inches apart in rows that are 2-3 feet apart.",
    "watering": "Maize needs consistent moisture, especially during germination and silking. Water deeply and regularly, but avoid overwatering.",
    "sunlight": "Maize needs full sun (at least 6 hours of direct sunlight).",
    "fertilization": "Feed maize with a balanced fertilizer (e.g., 10-10-10 NPK) at planting time and again when plants are about 6 inches tall.",
    "pestManagement": "Watch for pests like aphids, earworms, and rodents. Regularly inspect plants for signs of disease."
  },
  "Sugarcane": {
    "soilPreparation": "Sugarcane prefers well-draining, fertile soil with a pH between 5.5 and 6.5. Add organic matter like compost or manure to improve soil structure and fertility.",
    "sowing": "Plant sets (cuttings) 2-3 inches deep and 12-18 inches apart in rows that are 2-3 feet apart.",
    "watering": "Sugarcane needs consistent moisture, especially during germination and tillering. Water deeply and regularly, but avoid overwatering.",
    "sunlight": "Sugarcane needs full sun (at least 6 hours of direct sunlight).",
    "fertilization": "Feed sugarcane with a balanced fertilizer (e.g., 10-10-10 NPK) at planting time and again when plants are about 6 inches tall.",
    "pestManagement": "Keep an eye out for pests like borers, aphids, and rodents. Regularly inspect plants for signs of disease."
  },
  "Potatoes": {
    "soilPreparation": "Potatoes prefer well-draining, loose soil with a pH between 4.5 and 7.0. Add organic matter like compost or manure to improve soil structure and fertility.",
    "sowing": "Plant seed potatoes (small, whole potatoes or pieces of potatoes with at least one 'eye' each) 2-4 inches deep and 12-18 inches apart in rows that are 2-3 feet apart.",
    "watering": "Potatoes need consistent moisture, especially during tuber formation. Water deeply and regularly, but avoid overwatering.",
    "sunlight": "Potatoes need full sun (at least 6 hours of direct sunlight).",
    "fertilization": "Feed potatoes with a balanced fertilizer (e.g., 10-10-10 NPK) at planting time and again when plants are about 6 inches tall.",
    "pestManagement": "Watch for pests like aphids, beetles, and rodents. Regularly inspect plants for signs of disease."
  },
  "Cotton": {
    "soilPreparation": "Cotton prefers well-draining, fertile soil with a pH between 5.5 and 7.0. Add organic matter like compost or manure to improve soil structure and fertility.",
    "sowing": "Sow seeds 1-2 inches deep and 6-12 inches apart in rows that are 2-3 feet apart.",
    "watering": "Cotton needs consistent moisture, especially during germination and flowering. Water deeply and regularly, but avoid overwatering.",
    "sunlight": "Cotton needs full sun (at least 6 hours of direct sunlight).",
    "fertilization": "Feed cotton with a balanced fertilizer (e.g., 10-10-10 NPK) at planting time and again when plants are about 6 inches tall.",
    "pestManagement": "Keep an eye out for pests like aphids, whiteflies, and spider mites. Regularly inspect plants for signs of disease."
  }
  // Add more crops here...
};

const Cultivation = () => {
  const [activeTab, setActiveTab] = useState('Tomatoes');

  const handleTabClick = (crop) => {
    setActiveTab(crop);
  };

  const renderCropDetails = () => {
    const crop = cropData[activeTab];
    return (
      <div className="tab-content">
        <h2>{activeTab}</h2>
        <ul>
          <li><strong>Soil Preparation:</strong> {crop.soilPreparation}</li>
          <li><strong>Sowing:</strong> {crop.sowing}</li>
          <li><strong>Watering:</strong> {crop.watering}</li>
          <li><strong>Sunlight:</strong> {crop.sunlight}</li>
          {crop.support && <li><strong>Support:</strong> {crop.support}</li>}
          <li><strong>Fertilization:</strong> {crop.fertilization}</li>
          {crop.pruning && <li><strong>Pruning:</strong> {crop.pruning}</li>}
          {crop.weedControl && <li><strong>Weed Control:</strong> {crop.weedControl}</li>}
          <li><strong>Pest and Disease Management:</strong> {crop.pestManagement}</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="container my-5">
      <h1>Cultivation Tips</h1>
      <div className="tabs">
        {Object.keys(cropData).map((crop) => (
          <button
            key={crop}
            onClick={() => handleTabClick(crop)}
            className={`tab-button ${activeTab === crop ? 'active' : ''}`}
          >
            {crop}
          </button>
        ))}
      </div>

      {renderCropDetails()}
    </div>
  );
};

export default Cultivation;

import React, { useState } from 'react';
import Header from './Header';
// import '../css/Reference.css'; // Import the CSS file for custom styles

const References = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      
      <div className="container my-5">
        <h1>References</h1>
        <p>
          The information provided on this website is taken from various sources. The Indian Council of Agricultural Research (ICAR) provides comprehensive resources for various crops, including tomatoes, wheat, rice, maize, sugarcane, potatoes, cotton, groundnuts, soybean, sunflower, tobacco, jute, coconut, tea, and coffee. Additionally, specialized institutes like the Indian Institute of Horticultural Research (IIHR), Indian Institute of Wheat and Barley Research (IIWBR), and Central Plantation Crops Research Institute (CPCRI) offer crop-specific information. The Krishi Vigyan Kendra (KVK) also provides region-specific guidance on crop cultivation. Furthermore, commodity-specific boards like the Tea Board of India and Coffee Board of India offer resources on tea and coffee cultivation, respectively. These resources cover aspects like crop management, pest and disease management, and harvesting techniques, tailored to the Indian context.
        </p>
        <h2>References for Crop-wise NPK Ratios in India:</h2>
        <ul className="references-list">
          <li>National Academy of Agricultural Sciences (NAAS): "Crop Response and Nutrient Ratio" (Policy Paper 42)</li>
          <li>Indian Council of Agricultural Research (ICAR): "Fertilizer Recommendations for Crops" (2019)</li>
          <li>Department of Agriculture, Cooperation and Farmers Welfare (DAC&FW): "Fertilizer Use Guidelines" (2020)</li>
          <li>Fertilizer Association of India (FAI): "Crop-wise Fertilizer Recommendations" (2020)</li>
          <li>Indian Institute of Soil Science (IISS): "Soil Fertility and Fertilizer Use" (2018)</li>
          <li>Central Soil Salinity Research Institute (CSSRI): "Fertilizer Recommendations for Salt-Affected Soils" (2019)</li>
          <li>Agricultural Scientists Recruitment Board (ASRB): "Fertilizer Management for Crops" (2019)</li>
          <li>National Institute of Agricultural Economics and Policy Research (NIAP): "Fertilizer Use and Crop Productivity" (2018)</li>
          <li>Indian Agricultural Research Institute (IARI): "Fertilizer Recommendations for Crops" (2019)</li>
          <li>Krishi Vigyan Kendra (KVK): "Fertilizer Use Guidelines for Crops" (2020)</li>
        </ul>
        <p>
          We value your feedback. Please let us know your thoughts about our services or any suggestions you may have.
        </p>
      </div>
    </div>
  );
};

export default References;

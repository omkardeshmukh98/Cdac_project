import React, { useState } from 'react';
import '../css/Cultivation.css'; // Assuming you save the CSS as Cultivation.css

const cropData = {
  Rice: {
    BacterialBlight: {
      Causes: "Bacterial blight is caused by the bacterium Xanthomonas oryzae, which is spread through contaminated water, soil, and infected plant material.",
      Symptoms: "Yellowing of leaves, wilting, and blighting of panicles are common symptoms of bacterial blight.",
      PreventionMethods: "Using resistant varieties, crop rotation, and applying bactericides can help prevent bacterial blight.",
    },
    BlastDisease: {
      Causes: "Blast disease is caused by the fungus Magnaporthe grisea, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "White or grayish-white lesions on leaves and stems are common symptoms of blast disease.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent blast disease.",
    },
    BrownSpotDisease: {
      Causes: "Brown spot disease is caused by the fungus Bipolaris oryzae, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Brown spots on leaves and stems are common symptoms of brown spot disease.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent brown spot disease.",
    },
  },
  Wheat: {
    BlackStemRust: {
      Causes: "Black stem rust is caused by the fungus Puccinia graminis, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Black or dark brown pustules on stems and leaves are common symptoms of black stem rust.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent black stem rust.",
    },
    BrownRust: {
      Causes: "Brown rust is caused by the fungus Puccinia recondita, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Brown or yellowish-brown pustules on leaves and stems are common symptoms of brown rust.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent brown rust.",
    },
    LeafRust: {
      Causes: "Leaf rust is caused by the fungus Puccinia triticina, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Yellow or orange pustules on leaves are common symptoms of leaf rust.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent leaf rust.",
    },
  },
  Maize: {
    DownyMildew: {
      Causes: "Downy mildew is caused by the fungus Peronosclerospora sorghi, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Yellowing of leaves, stunted growth, and white or grayish-white downy growth on leaves are common symptoms of downy mildew.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent downy mildew.",
    },
    EarRot: {
      Causes: "Ear rot is caused by the fungus Fusarium verticillioides, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Rotting of ears, pinkish-white or yellowish-white mold growth, and musty odor are common symptoms of ear rot.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent ear rot.",
    },
    LeafBlight: {
      Causes: "Leaf blight is caused by the fungus Exserohilum turcicum, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Yellowing or browning of leaves, and black or dark brown lesions are common symptoms of leaf blight.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent leaf blight.",
    },
  },
  Sugarcane: {
    RedRot: {
      Causes: "Red rot is caused by the fungus Colletotrichum falcatum, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Red or pinkish-red discoloration of stalks, and white or grayish-white cottony growth are common symptoms of red rot.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent red rot.",
    },
    Smut: {
      Causes: "Smut is caused by the fungus Ustilago scitaminea, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Black or dark brown spores on leaves and stalks are common symptoms of smut.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent smut.",
    },
    Wilt: {
      Causes: "Wilt is caused by the fungus Fusarium oxysporum, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Yellowing or wilting of leaves, and black or dark brown lesions on stalks are common symptoms of wilt.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent wilt.",
    },
  },
  Cotton: {
    BacterialBlight: {
      Causes: "Bacterial blight is caused by the bacterium Xanthomonas citri, which is spread through contaminated water, soil, and infected plant material.",
      Symptoms: "Yellowing or wilting of leaves, and black or dark brown lesions on stems are common symptoms of bacterial blight.",
      PreventionMethods: "Using resistant varieties, applying bactericides, and practicing good sanitation can help prevent bacterial blight.",
    },
    FusariumWilt: {
      Causes: "Fusarium wilt is caused by the fungus Fusarium oxysporum, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Yellowing or wilting of leaves, and black or dark brown lesions on stems are common symptoms of Fusarium wilt.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent Fusarium wilt.",
    },
    RootRot: {
      Causes: "Root rot is caused by the fungus Phytophthora nicotianae, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Yellowing or wilting of leaves, and black or dark brown lesions on roots are common symptoms of root rot.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent root rot.",
    },
  },
  Groundnut: {
    EarlyLeafSpot: {
      Causes: "Early leaf spot is caused by the fungus Cercospora arachidicola, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Small, circular, dark brown or black spots on leaves are common symptoms of early leaf spot.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent early leaf spot.",
    },
    LateLeafSpot: {
      Causes: "Late leaf spot is caused by the fungus Phaeoisariopsis personata, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Large, circular, dark brown or black spots on leaves are common symptoms of late leaf spot.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent late leaf spot.",
    },
    PeanutRust: {
      Causes: "Peanut rust is caused by the fungus Puccinia arachidis, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Yellow or orange pustules on leaves and stems are common symptoms of peanut rust.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent peanut rust.",
    },
  },
  Potatoes: {
    LateBlight: {
      Causes: "Late blight is caused by the fungus Phytophthora infestans, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Large, greasy-looking lesions on leaves and stems are common symptoms of late blight.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent late blight.",
    },
    Scab: {
      Causes: "Scab is caused by the bacterium Streptomyces scabies, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Small, rough, brown or black lesions on tubers are common symptoms of scab.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent scab.",
    },
  },
  Tomato: {
    BacterialSpot: {
      Causes: "Bacterial spot is caused by the bacterium Xanthomonas campestris, which is spread through contaminated water, soil, and infected plant material.",
      Symptoms: "Small, circular, dark brown or black spots on leaves and stems are common symptoms of bacterial spot.",
      PreventionMethods: "Using resistant varieties, applying bactericides, and practicing good sanitation can help prevent bacterial spot.",
    },
    EarlyBlight: {
      Causes: "Early blight is caused by the fungus Alternaria solani, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Small, circular, dark brown or black spots on leaves and stems are common symptoms of early blight.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent early blight.",
    },
    PowderyMildew: {
      Causes: "Powdery mildew is caused by the fungus Oidium lycopersici, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "White or grayish-white powdery growth on leaves and stems is a common symptom of powdery mildew.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent powdery mildew.",
    },
  },
  Banana: {
    Sigatoka: {
      Causes: "Sigatoka is caused by the fungus Mycosphaerella fijiensis, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Small, dark brown or black spots on leaves and stems are common symptoms of Sigatoka.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent Sigatoka.",
    },
    PanamaDisease: {
      Causes: "Panama disease is caused by the fungus Fusarium oxysporum, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Yellowing or wilting of leaves, and black or dark brown lesions on stalks are common symptoms of Panama disease.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent Panama disease.",
    },
    BlackSigatoka: {
      Causes: "Black Sigatoka is caused by the fungus Mycosphaerella eumusae, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Small, dark brown or black spots on leaves and stems are common symptoms of Black Sigatoka.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent Black Sigatoka.",
    },
  },
  Soybean: {
    Rust: {
      Causes: "Rust is caused by the fungus Phakopsora pachyrhizi, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "Orange or reddish-brown pustules on leaves are common symptoms of rust.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent rust.",
    },
    BacterialBlight: {
      Causes: "Bacterial blight is caused by the bacterium Xanthomonas campestris, which is spread through contaminated water, soil, and infected plant material.",
      Symptoms: "Small, dark brown or black spots on leaves are common symptoms of bacterial blight.",
      PreventionMethods: "Using resistant varieties, applying bactericides, and practicing good sanitation can help prevent bacterial blight.",
    },
    PowderyMildew: {
      Causes: "Powdery mildew is caused by the fungus Erysiphe glycines, which is spread through contaminated soil, water, and infected plant material.",
      Symptoms: "White or grayish-white powdery growth on leaves is a common symptom of powdery mildew.",
      PreventionMethods: "Using resistant varieties, applying fungicides, and practicing good sanitation can help prevent powdery mildew.",
    },
  },
};

function Disease() {
  const [selectedCrop, setSelectedCrop] = useState('');

  const handleCropChange = (e) => {
    setSelectedCrop(e.target.value);
  };

  return (
    <div className="cultivation-info">
      <h1>Disease Information</h1>
      <select onChange={handleCropChange} value={selectedCrop}>
        <option value="">Select Crop</option>
        {Object.keys(cropData).map((crop) => (
          <option key={crop} value={crop}>
            {crop}
          </option>
        ))}
      </select>
      {selectedCrop && (
        <div className="disease-info">
          <h2>Disease Information for {selectedCrop}</h2>
          {Object.keys(cropData[selectedCrop]).map((disease) => (
            <div key={disease} className="disease">
              <h3>{disease.replace(/([A-Z])/g, ' $1')}</h3>
              <p><strong>Causes:</strong> {cropData[selectedCrop][disease].Causes}</p>
              <p><strong>Symptoms:</strong> {cropData[selectedCrop][disease].Symptoms}</p>
              <p><strong>Prevention Methods:</strong> {cropData[selectedCrop][disease].PreventionMethods}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Disease;

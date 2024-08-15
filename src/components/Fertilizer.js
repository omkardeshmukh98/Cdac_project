import React, { useState } from 'react';
// import Header from './Header';

const Fertilizer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [area, setArea] = useState('');
  const [crop, setCrop] = useState('');
  const [results, setResults] = useState(null);

  const cropNPKRatios = {
    rice: { N: 4, P2O5: 2, K2O: 1 },
    wheat: { N: 6, P2O5: 3, K2O: 2 },
    maize: { N: 8, P2O5: 4, K2O: 2 },
    sugarcane: { N: 10, P2O5: 5, K2O: 3 },
    cotton: { N: 12, P2O5: 6, K2O: 4 },
    groundnut: { N: 10, P2O5: 5, K2O: 3 },
    soybean: { N: 12, P2O5: 6, K2O: 4 },
    sunflower: { N: 10, P2O5: 5, K2O: 3 },
    mustard: { N: 10, P2O5: 5, K2O: 3 },
    potato: { N: 12, P2O5: 6, K2O: 4 },
    tomato: { N: 10, P2O5: 5, K2O: 3 },
    chili: { N: 10, P2O5: 5, K2O: 3 },
    turmeric: { N: 10, P2O5: 5, K2O: 3 },
    ginger: { N: 10, P2O5: 5, K2O: 3 },
    bajra: { N: 8, P2O5: 4, K2O: 2 },
    jowar: { N: 8, P2O5: 4, K2O: 2 },
    ragi: { N: 10, P2O5: 5, K2O: 3 },
    moong: { N: 10, P2O5: 5, K2O: 0 },
  };

  const handleCalculate = () => {
    if (area && crop) {
      const { N, P2O5, K2O } = cropNPKRatios[crop];
      const totalN = N * area;
      const totalP2O5 = P2O5 * area;
      const totalK2O = K2O * area;

      const ureaRequired = (totalN / 0.46).toFixed(2);
      const dopRequired = (totalP2O5 / 0.18).toFixed(2);
      const mopRequired = (totalK2O / 0.60).toFixed(2);

      setResults({
        urea: ureaRequired,
        dop: dopRequired,
        mop: mopRequired,
      });
    }
  };

  return (
    <div>
      {/* <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
      <div className="container my-5">
        <h1>Fertilizer Calculator</h1>
        <p>
          Welcome to the Fertilizer Calculator page! Here you can calculate the optimal amount of fertilizer for your crops based on various factors such as crop type, soil quality, and more.
        </p>
        <div className="form-group">
          <label htmlFor="area">Land Area (in acres)</label>
          <input
            type="number"
            className="form-control"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Enter land area in acres"
          />
        </div>
        <div className="form-group">
          <label htmlFor="crop">Crop Type</label>
          <select
            className="form-control"
            id="crop"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
          >
            <option value="">Select Crop</option>
            {Object.keys(cropNPKRatios).map((cropKey) => (
              <option key={cropKey} value={cropKey}>
                {cropKey.charAt(0).toUpperCase() + cropKey.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleCalculate}>
          Calculate Fertilizer
        </button>
        {results && (
          <div className="mt-5">
            <h2>Results</h2>
            <p>Urea Required: {results.urea} kg</p>
            <p>DOP Required: {results.dop} kg</p>
            <p>MOP Required: {results.mop} kg</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fertilizer;

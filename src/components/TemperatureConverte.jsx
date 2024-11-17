import { useState } from "react";

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
  
    // Función para manejar el cambio en el input de Celsius
    const handleCelsiusChange = (e) => {
      const value = e.target.value;
      setCelsius(value);
  
      // Realizamos la conversión si el valor es válido
      if (value === '' || isNaN(value)) {
        setFahrenheit('');
      } else {
        const fValue = (parseFloat(value) * 9) / 5 + 32;
        setFahrenheit(fValue.toFixed(2));
      }
    };
  
    // Función para manejar el cambio en el input de Fahrenheit
    const handleFahrenheitChange = (e) => {
      const value = e.target.value;
      setFahrenheit(value);
  
      // Realizamos la conversión si el valor es válido
      if (value === '' || isNaN(value)) {
        setCelsius('');
      } else {
        const cValue = ((parseFloat(value) - 32) * 5) / 9;
        setCelsius(cValue.toFixed(2));
      }
    };

    return (
        <div className="temperature-converter">
          <h2>Conversor de Temperatura 🌡️</h2>
          <div className="input-container">
            <div>
              <label htmlFor="celsius">Celsius (°C):</label>
              <input
                type="text"
                id="celsius"
                value={celsius}
                onChange={handleCelsiusChange}
              />
            </div>
            <div>
              <label htmlFor="fahrenheit">Fahrenheit (°F):</label>
              <input
                type="text"
                id="fahrenheit"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
              />
            </div>
          </div>
        </div>
      );
    }

export default TemperatureConverter;
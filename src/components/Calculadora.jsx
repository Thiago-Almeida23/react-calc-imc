import React, { useState } from 'react';

function Calculadora() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);

  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
  };

  const handlePesoChange = (event) => {
    setPeso(event.target.value);
  };

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2)); 
  };

  return (
    <div className="col-md-5 mx-5">
      <h2 className="mb-4">Calculadora de IMC</h2>
      <form>
        <div className="row mb-3 ms-4">
          <label htmlFor="altura" className="col-sm-5 col-form-label">Altura (cm):</label>
          <div className="col-sm-4">
            <input
              type="number"
              className="form-control"
              id="altura"
              value={altura}
              onChange={handleAlturaChange}
            />
          </div>
        </div>
        <div className="row mb-3 ms-4">
          <label htmlFor="peso" className="col-sm-5 col-form-label">Peso (kg):</label>
          <div className="col-sm-4">
            <input
              type="number"
              className="form-control"
              id="peso"
              value={peso}
              onChange={handlePesoChange}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <button type="button" className="btn btn-primary" onClick={calcularIMC}>
              Calcular IMC
            </button>
          </div>
        </div>
      </form>
      {imc && (
        <div className="mt-4 ms-4">
          <h2>Seu IMC é: {imc}</h2>
        </div>
      )}
    </div>
  );
}

export default Calculadora;
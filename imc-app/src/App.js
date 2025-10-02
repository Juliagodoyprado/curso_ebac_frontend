import React, { useState } from 'react';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  function calcularIMC() {
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);

    if (!alturaNum || !pesoNum) {
      alert('Por favor, insira valores válidos para altura e peso.');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);

    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade grau I';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade grau II';
    } else {
      classificacao = 'Obesidade grau III (mórbida)';
    }

    setResultado({
      imc: imc.toFixed(2),
      classificacao,
    });
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Calculadora de IMC</h2>
      <div>
        <label>
          Altura (m):
          <input
            type="number"
            step="0.01"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 1.75"
          />
        </label>
      </div>
      <div>
        <label>
          Peso (kg):
          <input
            type="number"
            step="0.1"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
          />
        </label>
      </div>
      <button onClick={calcularIMC} style={{ marginTop: 10 }}>
        Calcular IMC
      </button>

      {resultado && (
        <div style={{ marginTop: 20 }}>
          <h3>Resultado:</h3>
          <p>IMC: {resultado.imc}</p>
          <p>Classificação: {resultado.classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
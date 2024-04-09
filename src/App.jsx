import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Calculadora from './components/Calculadora';
import Tabela from './components/Tabela';

function App() {
  const tabelaIMC = [
    { faixa: 'Menor que 18,5', classificacao: 'Abaixo do peso' },
    { faixa: '18,5 a 24,9', classificacao: 'Peso normal' },
    { faixa: '25 a 29,9', classificacao: 'Sobrepeso' },
    { faixa: '30 a 34,9', classificacao: 'Obesidade grau I' },
    { faixa: '35 a 39,9', classificacao: 'Obesidade grau II' },
    { faixa: '40 a 49,9', classificacao: 'Obesidade grau III' },
    { faixa: '50 a 59,9', classificacao: 'Obesidade grau IV' },
    { faixa: 'Acima de 60', classificacao: 'Obesidade grau V' },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-between">
        <Calculadora />
        <Tabela tabelaIMC={tabelaIMC} />
      </div>
    </div>
  );
}

export default App;
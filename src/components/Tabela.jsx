import React from 'react';

function Tabela({ tabelaIMC }) {
  return (
    <div className="col-md-5 mx-3"> 
      <h2 className="mb-4">Classificação de IMC</h2>
      <table className="table">
        <tbody style={{ borderCollapse: 'separate' }}>
          <tr style={{ border: '3px solid #ddd' }}>
            <td className="bold-text">IMC</td>
            <td className="bold-text">Classificação</td>
          </tr>
          {tabelaIMC.map(({ faixa, classificacao }) => (
            <tr key={faixa} style={{ border: '3px solid #ddd' }}>
              <td>{faixa}</td>
              <td>{classificacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;
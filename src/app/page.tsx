"use client";

import { useState } from "react";
import "./styles.css";

const SALARY_BASE_RATES = {
  inss: 0.20,
  fgts: 0.08,
  decimoTerceiro: 0.0833,
  ferias: 0.1111,
  systemS: 0.058,
  rat: 0.02,
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export default function Home() {
  const [salary, setSalary] = useState(5000);

  const additionalCosts = Object.values(SALARY_BASE_RATES).reduce(
    (sum, rate) => sum + rate,
    0
  );

  const totalAdditional = salary * additionalCosts;
  const totalCost = salary + totalAdditional;
  const percentageIncrease = ((additionalCosts) * 100).toFixed(2);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="badge">ANÁLISE FINANCEIRA & RH</div>
        <h1 className="title">
          Custos Trabalhistas do <span className="highlight">Gestor de RH</span>
        </h1>
        <p className="subtitle">Simulador de encargos, provisões e devolutiva à organização.</p>
        <p className="credit">Ostentação Prime / UNIFSA</p>
      </header>

      {/* Curiosity Section */}
      <section className="curiosity-section">
        <div className="curiosity-card">
          <h2 className="curiosity-title">💡 Você sabia que...</h2>
          <p className="curiosity-text">
            Os custos de um cargo não são apenas o salário que o funcionário recebe? Conheça mais a seguir!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-grid">
          {/* Left Section */}
          <div className="section-left">
            <div className="section-card">
              <div className="section-icon">📊</div>
              <h2>Média de Mercado</h2>
              <div className="market-info">
                <div className="market-item">
                  <label>SALÁRIO BASE ESTIMADO</label>
                  <p className="range">R$ 5k à R$ 10k</p>
                  <div className="contracts">
                    <span>CLT</span>
                    <span>PJ (varia)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="section-right">
            <div className="section-card">
              <div className="section-icon">%</div>
              <h2>Alíquotas de Encargos</h2>
              <div className="rates-grid">
                <div className="rate-item">
                  <span className="rate-percentage">{(SALARY_BASE_RATES.inss * 100).toFixed(0)}%</span>
                  <span className="rate-label">INSS Patronal</span>
                </div>
                <div className="rate-item">
                  <span className="rate-percentage">{(SALARY_BASE_RATES.fgts * 100).toFixed(0)}%</span>
                  <span className="rate-label">FGTS Mensal</span>
                </div>
                <div className="rate-item">
                  <span className="rate-percentage">{(SALARY_BASE_RATES.decimoTerceiro * 100).toFixed(2)}%</span>
                  <span className="rate-label">13º Salário</span>
                </div>
                <div className="rate-item">
                  <span className="rate-percentage">{(SALARY_BASE_RATES.ferias * 100).toFixed(2)}%</span>
                  <span className="rate-label">Férias + 1/3</span>
                </div>
                <div className="rate-item">
                  <span className="rate-percentage">~{(SALARY_BASE_RATES.rat * 100).toFixed(0)}%</span>
                  <span className="rate-label">RAT / SAT</span>
                </div>
                <div className="rate-item">
                  <span className="rate-percentage">{(SALARY_BASE_RATES.systemS * 100).toFixed(1)}%</span>
                  <span className="rate-label">Sistema S</span>
                </div>
              </div>
              <p className="disclaimer">* Alíquotas podem variar conforme FPAS e FAP da empresa.</p>
            </div>
          </div>
        </div>

        {/* Simulator Section */}
        <section className="simulator-section">
          <h2>Simulador de Custos</h2>
          <p className="simulator-description">Ajuste o salário base abaixo</p>

          <div className="simulator-card">
            <div className="slider-container">
              <label className="label">SALÁRIO BASE</label>
              <div className="salary-display">{formatCurrency(salary)}</div>
              <input
                type="range"
                min="3000"
                max="15000"
                step="100"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="slider"
              />
              <div className="slider-labels">
                <span>R$ 3k</span>
                <span>R$ 15k</span>
              </div>
            </div>

            {/* Cost Table */}
            <table className="costs-table">
              <thead>
                <tr>
                  <th>ITEM DE CUSTO</th>
                  <th>% REF.</th>
                  <th>VALOR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Salário Base</td>
                  <td>-</td>
                  <td>{formatCurrency(salary)}</td>
                </tr>
                <tr>
                  <td>INSS Patronal</td>
                  <td>{(SALARY_BASE_RATES.inss * 100).toFixed(0)}%</td>
                  <td>{formatCurrency(salary * SALARY_BASE_RATES.inss)}</td>
                </tr>
                <tr>
                  <td>FGTS</td>
                  <td>{(SALARY_BASE_RATES.fgts * 100).toFixed(0)}%</td>
                  <td>{formatCurrency(salary * SALARY_BASE_RATES.fgts)}</td>
                </tr>
                <tr>
                  <td>13º Proporcional</td>
                  <td>{(SALARY_BASE_RATES.decimoTerceiro * 100).toFixed(2)}%</td>
                  <td>{formatCurrency(salary * SALARY_BASE_RATES.decimoTerceiro)}</td>
                </tr>
                <tr>
                  <td>Férias + 1/3</td>
                  <td>{(SALARY_BASE_RATES.ferias * 100).toFixed(2)}%</td>
                  <td>{formatCurrency(salary * SALARY_BASE_RATES.ferias)}</td>
                </tr>
                <tr>
                  <td>Sistema S (Est.)</td>
                  <td>{(SALARY_BASE_RATES.systemS * 100).toFixed(1)}%</td>
                  <td>{formatCurrency(salary * SALARY_BASE_RATES.systemS)}</td>
                </tr>
                <tr>
                  <td>RAT (Exemplo)</td>
                  <td>{(SALARY_BASE_RATES.rat * 100).toFixed(0)}%</td>
                  <td>{formatCurrency(salary * SALARY_BASE_RATES.rat)}</td>
                </tr>
              </tbody>
            </table>

            {/* Results */}
            <div className="results">
              <div className="result-box">
                <label>CUSTO ADICIONAL MENSAL</label>
                <p className="result-value">+ {formatCurrency(totalAdditional)}</p>
                <p className="result-info">Acréscimo de ~{percentageIncrease}% sobre a base</p>
              </div>
              <div className="result-box highlight-box">
                <label>CUSTO TOTAL PARA A EMPRESA</label>
                <p className="result-value">{formatCurrency(totalCost)}</p>
                <p className="result-info">(Base + Encargos + Provisões)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Composition Section */}
        <section className="composition-section">
          <h2>Composição Visual</h2>
          <div className="composition-card">
            <p className="composition-label">TOTAL 100%</p>
            <ul className="composition-list">
              <li>Salário + IR/INSS ~64%</li>
              <li>Encargos (INSS/FGTS) ~22%</li>
              <li>Provisões (13º/Férias) ~14%</li>
            </ul>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="deliverables-section">
          <h2>Entregas do Projeto</h2>
          <div className="deliverables-card">
            <h3>Devolutiva à Organização</h3>
            <ul className="deliverables-list">
              <li>Cálculo completo do custo do cargo</li>
              <li>Infográfico digital para redes sociais</li>
              <li>Manual de integração</li>
              <li>Descrição de cargo</li>
            </ul>
          </div>
        </section>

        {/* References Section */}
        <section className="references-section">
          <h3>FONTES & REFERÊNCIAS</h3>
          <div className="references-grid">
            <div className="reference-item">
              <strong>CLT</strong>
              <p>Portal Gov.br</p>
            </div>
            <div className="reference-item">
              <strong>eSocial</strong>
              <p>Caixa Econômica</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>UNIFSA</h3>
          <p>CENTRO UNIVERSITÁRIO SANTO AGOSTINHO</p>
          <p className="org"><strong>Org:</strong> Ostentação Prime</p>
          <p className="advisor"><strong>Orientador:</strong> Rhubens Ewald M. Ribeiro</p>
          <p className="discipline"><strong>Disciplina:</strong> ACE: Os Aspectos Éticos, Legais e Humanos das Organizações - Prática</p>
          <div className="group-members">
            <h4>Membros do Grupo:</h4>
            <ul>
              <li>Ana Luiza</li>
              <li>Priscila</li>
              <li>David Bringel</li>
              <li>Marvel</li>
              <li>Kauã Santos</li>
              <li>Victor</li>
              <li>Pedro Sales</li>
            </ul>
          </div>
          <p className="location">Teresina (PI) • 2025.2</p>
        </div>
      </footer>
    </div>
  );
}

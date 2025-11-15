'use client';

import { useState } from 'react';
import './styles.css';

// SVG Icons Components
const ChartIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const LightbulbIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18h6M12 2a7 7 0 100 14A7 7 0 0012 2zM9 21h6"></path>
  </svg>
);

const PercentIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="6" cy="6" r="3"></circle>
    <circle cx="18" cy="18" r="3"></circle>
    <line x1="18" y1="6" x2="6" y2="18"></line>
  </svg>
);

const CalculatorIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="2" width="16" height="20" rx="2"></rect>
    <line x1="8" y1="6" x2="16" y2="6"></line>
    <line x1="8" y1="11" x2="16" y2="11"></line>
    <line x1="8" y1="16" x2="16" y2="16"></line>
  </svg>
);

const UsersIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
    <path d="M16 3.13a4 4 0 010 7.75"></path>
  </svg>
);

const BuildingIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v15h20V7l-10-5z"></path>
    <line x1="7" y1="11" x2="7" y2="17"></line>
    <line x1="12" y1="11" x2="12" y2="17"></line>
    <line x1="17" y1="11" x2="17" y2="17"></line>
  </svg>
);

export default function Home() {
  const [salary, setSalary] = useState(15000);

  const SALARY_BASE_RATES = {
    inss: 0.2,
    fgts: 0.08,
    decimoTerceiro: 0.0833,
    ferias: 0.1111,
    sistemaS: 0.058,
    rat: 0.02,
  };

  function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  const additionalCosts =
    salary * SALARY_BASE_RATES.inss +
    salary * SALARY_BASE_RATES.fgts +
    salary * SALARY_BASE_RATES.decimoTerceiro +
    salary * SALARY_BASE_RATES.ferias +
    salary * SALARY_BASE_RATES.sistemaS +
    salary * SALARY_BASE_RATES.rat;

  const percentageIncrease = ((additionalCosts / salary) * 100).toFixed(2);
  const totalCost = salary + additionalCosts;

  const costBreakdown = [
    { item: 'Salário Base', percentage: '-', value: salary },
    { item: 'INSS Patronal', percentage: '20%', value: salary * SALARY_BASE_RATES.inss },
    { item: 'FGTS', percentage: '8%', value: salary * SALARY_BASE_RATES.fgts },
    { item: '13º Proporcional', percentage: '8.33%', value: salary * SALARY_BASE_RATES.decimoTerceiro },
    { item: 'Férias + 1/3', percentage: '11.11%', value: salary * SALARY_BASE_RATES.ferias },
    { item: 'Sistema S (Est.)', percentage: '5.8%', value: salary * SALARY_BASE_RATES.sistemaS },
    { item: 'RAT (Exemplo)', percentage: '2%', value: salary * SALARY_BASE_RATES.rat },
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="header-badge">ANÁLISE FINANCEIRA & RH</div>
        <h1 className="title">
          Custos Trabalhistas do <span className="highlight">Gestor de RH</span>
        </h1>
        <p className="subtitle">Simulador de encargos, provisões e devolutiva à organização.</p>
        <p className="organization">Ostentação Prime / UNIFSA</p>
      </header>

      <section className="section curiosity-section">
        <div className="section-header">
          <LightbulbIcon />
          <h2>Você sabia que...</h2>
        </div>
        <p className="curiosity-text">
          Os custos de um cargo não são apenas o salário que o funcionário recebe? Conheça mais a seguir!
        </p>
      </section>

      <section className="section markets-section">
        <div className="market-card">
          <div className="card-icon">
            <ChartIcon />
          </div>
          <h3>Média de Mercado</h3>
          <div className="market-info">
            <p className="label">SALÁRIO BASE ESTIMADO</p>
            <p className="range">R$ 5k à R$ 10k</p>
          </div>
          <div className="market-types">
            <span className="badge">CLT</span>
            <span className="badge">PJ (varia)</span>
            <span className="badge">%</span>
          </div>
        </div>

        <div className="market-card">
          <div className="card-icon percent-icon">
            <PercentIcon />
          </div>
          <h3>Alíquotas de Encargos</h3>
          <div className="aliquots-grid">
            <div className="aliquot-item">
              <span className="aliquot-value">20%</span>
              <span className="aliquot-label">INSS Patronal</span>
            </div>
            <div className="aliquot-item">
              <span className="aliquot-value">8%</span>
              <span className="aliquot-label">FGTS Mensal</span>
            </div>
            <div className="aliquot-item">
              <span className="aliquot-value">8.33%</span>
              <span className="aliquot-label">13º Salário</span>
            </div>
            <div className="aliquot-item">
              <span className="aliquot-value">11.11%</span>
              <span className="aliquot-label">Férias + 1/3</span>
            </div>
            <div className="aliquot-item">
              <span className="aliquot-value">~2%</span>
              <span className="aliquot-label">RAT / SAT</span>
            </div>
            <div className="aliquot-item">
              <span className="aliquot-value">5.8%</span>
              <span className="aliquot-label">Sistema S</span>
            </div>
          </div>
          <p className="note">* Alíquotas podem variar conforme FPAS e FAP da empresa.</p>
        </div>
      </section>

      <section className="section simulator-section">
        <div className="section-header">
          <CalculatorIcon />
          <h2>Simulador de Custos</h2>
        </div>
        <p className="section-description">Ajuste o salário base abaixo</p>

        <div className="simulator-container">
          <div className="salary-input-group">
            <label className="input-label">SALÁRIO BASE</label>
            <div className="salary-display">{formatCurrency(salary)}</div>
            <input
              type="range"
              min="3000"
              max="15000"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="slider"
            />
            <div className="range-labels">
              <span>R$ 3k</span>
              <span>R$ 15k</span>
            </div>
          </div>

          <table className="cost-table">
            <thead>
              <tr>
                <th>ITEM DE CUSTO</th>
                <th>% REF.</th>
                <th>VALOR</th>
              </tr>
            </thead>
            <tbody>
              {costBreakdown.map((row, idx) => (
                <tr key={idx} className={idx === 0 ? 'base-row' : ''}>
                  <td>{row.item}</td>
                  <td>{row.percentage}</td>
                  <td>{formatCurrency(row.value)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cost-summary">
            <div className="summary-item">
              <p className="summary-label">CUSTO ADICIONAL MENSAL</p>
              <p className="summary-value">+ {formatCurrency(additionalCosts)}</p>
              <p className="summary-subtitle">Acréscimo de ~ {percentageIncrease}% sobre a base</p>
            </div>
            <div className="summary-item total">
              <p className="summary-label">CUSTO TOTAL PARA A EMPRESA</p>
              <p className="summary-value">{formatCurrency(totalCost)}</p>
              <p className="summary-subtitle">(Base + Encargos + Provisões)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section composition-section">
        <div className="section-header">
          <BuildingIcon />
          <h2>Composição Visual</h2>
        </div>
        <div className="composition-display">TOTAL 100%</div>
        <ul className="composition-list">
          <li>Salário + IR/INSS ~64%</li>
          <li>Encargos (INSS/FGTS) ~22%</li>
          <li>Provisões (13º/Férias) ~14%</li>
        </ul>
      </section>

      <section className="section deliverables-section">
        <h2>Entregas do Projeto</h2>
        <div className="deliverables-grid">
          <div className="deliverable-card">
            <h3>Devolutiva à Organização</h3>
            <ul>
              <li>Cálculo completo do custo do cargo</li>
              <li>Infográfico digital para redes sociais</li>
              <li>Manual de integração</li>
              <li>Descrição de cargo</li>
            </ul>
          </div>
          <div className="deliverable-card">
            <h3>FONTES & REFERÊNCIAS</h3>
            <div className="reference">
              <strong>CLT</strong>
              <p>Portal Gov.br</p>
            </div>
            <div className="reference">
              <strong>eSocial</strong>
              <p>Caixa Econômica</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-section">
          <h3>UNIFSA</h3>
          <p>CENTRO UNIVERSITÁRIO SANTO AGOSTINHO</p>
        </div>

        <div className="footer-section">
          <p><strong>Org:</strong> Ostentação Prime</p>
          <p><strong>Orientador:</strong> Rhubens Ewald M. Ribeiro</p>
          <p><strong>Disciplina:</strong> ACE: Os Aspectos Éticos, Legais e Humanos das Organizações - Prática</p>
        </div>

        <div className="footer-section">
          <h3>Membros do Grupo:</h3>
          <div className="members-grid">
            <p>Ana Luiza</p>
            <p>Priscila</p>
            <p>David Bringel</p>
            <p>Marvel</p>
            <p>Kauã Santos</p>
            <p>Victor</p>
            <p>Pedro Sales</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Teresina (PI) • 2025.2</p>
        </div>
      </footer>
    </div>
  );
}

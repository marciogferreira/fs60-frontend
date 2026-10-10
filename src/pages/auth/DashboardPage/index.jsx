
import { useState, useContext } from 'react';
import './dashboard.css'
import { AuthContext } from '../../../contexts/AuthContext'

const stats = [
  { title: 'Clientes', value: '2.450', change: '+12,5%', icon: 'bi-people', color: 'primary' },
  { title: 'Faturamento', value: 'R$ 84.500', change: '+8,2%', icon: 'bi-currency-dollar', color: 'success' },
  { title: 'Pedidos', value: '1.280', change: '+6,4%', icon: 'bi-bag-check', color: 'warning' },
  { title: 'Conversão', value: '3,8%', change: '+0,5 p.p.', icon: 'bi-graph-up-arrow', color: 'info' },
];

const months = [
  { label: 'Jan', value: 35 },
  { label: 'Fev', value: 48 },
  { label: 'Mar', value: 42 },
  { label: 'Abr', value: 65 },
  { label: 'Mai', value: 78 },
  { label: 'Jun', value: 60 },
  { label: 'Jul', value: 88 },
  { label: 'Ago', value: 72 },
  { label: 'Set', value: 95 },
  { label: 'Out', value: 82 },
  { label: 'Nov', value: 68 },
  { label: 'Dez', value: 100 },
];

const initialOrders = [
  { id: '#1024', client: 'Maria Silva', date: '10/10/2026', value: 1250, status: 'Concluído' },
  { id: '#1025', client: 'João Santos', date: '09/10/2026', value: 890, status: 'Pendente' },
  { id: '#1026', client: 'Ana Oliveira', date: '09/10/2026', value: 2400, status: 'Em análise' },
  { id: '#1027', client: 'Pedro Costa', date: '08/10/2026', value: 650, status: 'Concluído' },
];

export default function Dashboard() {

    const { logout } = useContext(AuthContext);
    const [active, setActive] = useState('Dashboard');
    const [filter, setFilter] = useState('Todos');
    const [search, setSearch] = useState('');

  const menu = [
    { label: 'Dashboard', icon: 'bi-grid-1x2' }
  ];

  const orders = initialOrders.filter((order) => {
    const matchesSearch =
      `${order.id} ${order.client} ${order.status}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === 'Todos' ||
      (filter === 'Concluídos' && order.status === 'Concluído') ||
      (filter === 'Pendentes' && order.status === 'Pendente');

    return matchesSearch && matchesFilter;
  });

  const money = (value) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  const statusClass = {
    'Concluído': 'text-bg-success',
    'Pendente': 'text-bg-warning',
    'Em análise': 'text-bg-info',
  };

  return (
    <>

      <div className="dashboard">
        <aside className="dashboard-sidebar">
          <div className="dashboard-brand">
            <i className="bi bi-layers-fill me-2" />
            AdminPanel
          </div>

          <small className="dashboard-menu-label">MENU PRINCIPAL</small>

          <nav className="nav flex-column gap-2">
            {menu.map((item) => (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`nav-link text-start ${
                  active === item.label ? 'active' : ''
                }`}
              >
                <i className={`bi ${item.icon} me-3`} />
                {item.label}
              </button>
            ))}
          </nav>

          <button
                key={'sair'}
                onClick={() => logout()}
                className={`nav-link text-start`}
              >
                <i className={`bi me-3`} />
                Sair
              </button>

          <div className="dashboard-sidebar-footer">
            <i className="bi bi-person-circle me-2" />
            Administrador
          </div>
        </aside>

        <main className="dashboard-main">
          <header className="dashboard-topbar">
            <div>
              <h4 className="fw-bold mb-1">{active}</h4>
              <small className="text-secondary">
                Bem-vindo ao painel administrativo
              </small>
            </div>
            <div className="dashboard-avatar">MF</div>
          </header>

          <>
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                <div>
                  <h5 className="fw-bold mb-1">Visão geral</h5>
                  <small className="text-secondary">
                    Acompanhe os principais indicadores
                  </small>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => window.print()}
                >
                  <i className="bi bi-printer me-2" />
                  Imprimir dashboard
                </button>
              </div>

              <div className="row g-3 mb-4">
                {stats.map((stat) => (
                  <div className="col-12 col-sm-6 col-xl-3" key={stat.title}>
                    <div className="card dashboard-stat h-100">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="text-secondary">{stat.title}</span>
                          <span className={`dashboard-stat-icon text-${stat.color}`}>
                            <i className={`bi ${stat.icon}`} />
                          </span>
                        </div>
                        <h3 className="fw-bold mb-2">{stat.value}</h3>
                        <small className="text-success">
                          <i className="bi bi-arrow-up-right me-1" />
                          {stat.change}
                        </small>
                        <small className="text-secondary ms-2">
                          vs. período anterior
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row g-3 mb-4">
                <div className="col-12 col-xl-8">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <h5 className="fw-bold mb-1">Desempenho mensal</h5>
                          <small className="text-secondary">
                            Indicador demonstrativo por mês
                          </small>
                        </div>
                        <span className="badge text-bg-light">2026</span>
                      </div>

                      <div className="dashboard-chart">
                        {months.map((month) => (
                          <div className="dashboard-chart-column" key={month.label}>
                            <div
                              className="dashboard-chart-bar"
                              style={{ height: `${month.value}%` }}
                              title={`${month.label}: ${month.value}%`}
                            />
                            <small>{month.label}</small>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-xl-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="fw-bold mb-1">Meta de vendas</h5>
                      <small className="text-secondary">
                        Progresso do objetivo mensal
                      </small>

                      <h2 className="fw-bold mt-4">78%</h2>

                      <div
                        className="progress mt-3"
                        role="progressbar"
                        aria-valuenow="78"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar"
                          style={{ width: '78%' }}
                        />
                      </div>

                      <div className="d-flex justify-content-between mt-3 gap-2">
                        <small className="text-secondary">Realizado</small>
                        <small className="fw-semibold">
                          R$ 78.000 / R$ 100.000
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                    <h5 className="fw-bold mb-0">Últimos pedidos</h5>

                    <div className="d-flex flex-wrap gap-2">
                      <input
                        className="form-control"
                        placeholder="Buscar pedido ou cliente"
                        aria-label="Buscar pedido ou cliente"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                      />

                      <select
                        className="form-select"
                        aria-label="Filtrar pedidos por status"
                        value={filter}
                        onChange={(event) => setFilter(event.target.value)}
                      >
                        <option>Todos</option>
                        <option>Concluídos</option>
                        <option>Pendentes</option>
                      </select>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table align-middle">
                      <thead>
                        <tr>
                          <th>Pedido</th>
                          <th>Cliente</th>
                          <th>Data</th>
                          <th>Valor</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.id}>
                            <td className="fw-semibold">{order.id}</td>
                            <td>{order.client}</td>
                            <td>{order.date}</td>
                            <td>{money(order.value)}</td>
                            <td>
                              <span className={`badge ${statusClass[order.status]}`}>
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                        {orders.length === 0 && (
                          <tr>
                            <td colSpan="5" className="text-center py-4">
                              Nenhum pedido encontrado.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>

          <footer className="text-center text-secondary py-4">
            AdminPanel © 2026 — Dashboard administrativo
          </footer>
        </main>
      </div>
    </>
  );
}

import App from './App';
import { Home } from './App'; // Importe Home como uma exportação nomeada, não como padrão

// Use App como padrão e Home como uma exportação nomeada
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

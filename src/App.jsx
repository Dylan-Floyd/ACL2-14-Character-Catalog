import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from './Routes.jsx'
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

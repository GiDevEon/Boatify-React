import Nbar from './components/common/navbar/Nbar';
import Landing from './components/landing/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';

function App() {
  return (
    <div className="container" id="backframe">
      <Nbar />
      <Landing />
    </div>
  );
}

export default App;

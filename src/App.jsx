import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Hello user!'} />
    </div>
  );
}

export default App;

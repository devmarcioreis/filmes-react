import './App.css';
import Row from './components/Row';
import Categories from './Api'

function App() {
  return (
    <div className="App">
      {
        Categories.map( (category) => {
          return <Row key={category.name} title={category.title} path={category.path} />
        })
      }
    
    </div>
  );
}

export default App;

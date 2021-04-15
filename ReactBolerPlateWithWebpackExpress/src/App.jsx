import Gallery from './components/Gallery/Gallery.jsx'
import Table from './components/Table/Table.jsx';
import tableModel from './testmodel.js'

function App() {
    return (
      <div className="App">
          <div>
              <Gallery></Gallery>
          </div>
          <div>
              <Table tableModel/>
          </div>
      </div>
    );
  }
  export default App;
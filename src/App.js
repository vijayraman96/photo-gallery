import './App.css';
import Description from './components/Description';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">FIREGRAM</h1>
      </header>
      <Description />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;

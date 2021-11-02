import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-split-preview">
        <div>
          {/* <video hidden={!(split === 'main' && typeMedia === 'video')} ref={videoRefPreview}></video>
          <img hidden={!(split === 'main' && typeMedia === 'image')} src={urlMedia} alt="" /> */}
        </div>
        <div>
          {/* <img hidden={!(split === 'aside' && typeMedia === 'image')} src={urlMedia} alt="" /> */}
        </div>
        <div>
          {/* <img hidden={!(split === 'footer' && typeMedia === 'image')} src={urlMedia} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default App;

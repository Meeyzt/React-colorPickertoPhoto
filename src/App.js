import "./App.css";
import { useRef, useState } from "react";
import { average, prominent } from "color.js";

function App() {
  const fileRef = useRef();
  const [image, setImage] = useState();
  const [color, setColor] = useState();

  const handleChange = () => {
    const file = fileRef.current.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      setImage(this.result);
      average(this.result, { format: "hex" }).then((color) => setColor(color));
    });
    reader.readAsDataURL(file);
  };

  return (
    <div className="App">
      {image && (
        <div className="container">
          <div className="imageHolder" style={{ backgroundColor: color }}>
            <label>{fileRef.current.files[0].name}</label>
            <hr />
            <img src={image} />
          </div>
        </div>
      )}
      <label className="uploadBtn">
        <span>+</span>
        <input type="file" onChange={handleChange} ref={fileRef} />
      </label>
    </div>
  );
}

export default App;

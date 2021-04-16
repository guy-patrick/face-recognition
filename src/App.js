import { useState } from "react";
import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage";
import { Signin } from "./components/Signin";
import { ImageLinkForm } from "./components/ImageLinkForm";
import { Rank } from "./components/Rank";
import { FaceRecognition } from "./components/FaceRecognition";
import { Switch, Route } from "react-router-dom";
import Clarifai from "clarifai";
import "tachyons";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "00610d3fb5a443f0be1177352fe8e607",
});

export const App = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [boxes, setBoxes] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setImageUrl(input);

    // api call
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((resp) => {
        setBoxes(calculateFaceLocation(resp));
      })
      .catch((err) => console.log(err));
  };

  const calculateFaceLocation = (data) => {
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    const regions = data.outputs[0].data.regions;
    const boxes = regions.reduce((acc, region) => {
      const {
        bottom_row,
        left_col,
        right_col,
        top_row,
      } = region.region_info.bounding_box;
      const box = {
        leftCol: left_col * width,
        topRow: top_row * height,
        rightCol: width - right_col * width,
        bottomRow: height - bottom_row * height,
      };
      return [...acc, box];
    }, []);

    return boxes;
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
      {/* {<Rank />
      <ImageLinkForm handleSubmit={handleSubmit} handleChange={handleChange} />
      <FaceRecognition imageUrl={imageUrl} boxes={boxes} />} */}
    </div>
  );
};

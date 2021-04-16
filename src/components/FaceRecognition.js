export const FaceRecognition = ({ imageUrl, boxes }) => (
  <div className="center ma">
    <div className="absolute mt2">
      <img id="inputimage" src={imageUrl} alt="" width="500px" heigh="auto" />
      {boxes.map(({ topRow, rightCol, bottomRow, leftCol }) => (
        <div
          key={topRow}
          className="bounding-box"
          style={{
            top: topRow,
            right: rightCol,
            bottom: bottomRow,
            left: leftCol,
          }}
        ></div>
      ))}
    </div>
  </div>
);

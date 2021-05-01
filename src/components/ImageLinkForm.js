function ImageLinkForm({ handleSubmit, handleChange }) {
  return (
    <div>
      <p className="f3">
        This Magic Brain will detect faces in your pictures. Give it a try
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            onChange={handleChange}
            className="f4 pa2 w-70 center"
            type="text"
          />
          <button
            type="submit"
            className="btn-detect w-30 grow f4 link ph3 pv2 dib white bg-light-purple "
            onClick={handleSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;

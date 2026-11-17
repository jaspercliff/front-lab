function Toolbar({ onPlayMovie, onUploadImage }) {
  // function Toolbar(props) { 解构赋值
  // const onPlayMovie = props.onPlayMovie;
  // const onUploadImage = props.onUploadImage;
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Toolbar

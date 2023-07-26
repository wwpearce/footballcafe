import './Screen.scss';

function Screen({ backgroundImage }) {
  const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

  return (
    <div className="Screen">
        <div className="Screen__content" style={style}>

        </div>
    </div>
  );
}

export default Screen;
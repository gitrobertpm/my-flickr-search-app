
const Slider = props => {
  return (
    <div className="slider-container" title={props.count} >
      <p className="slider-scale"><span className="scale-val">1</span> <span className="scale-title"># of results</span> <span className="scale-val">100</span></p>
      <input type="range" min="1" max="100" value={props.count} className="slider" onChange={props.update} />
      <p className="hint slider-hint">Hover for value</p>
    </div>
  );
}

export default Slider;
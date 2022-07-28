const Switch = (props) => {


  function handleSwitch(ev) {
    props.switchTheme()
  }
  return (
    <div className="switchComponent">
 
      <i class="fa-solid fa-sun"></i>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"

      />
    
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        onClick={handleSwitch}
      >
        <span className={`react-switch-button`} />
      </label>
      <i className="fa-solid fa-moon"></i>
    </div>
  );
};

  export default Switch;
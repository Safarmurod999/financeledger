
import "./Callback.css";
function Callback() {
  return <section id="callback">
    <div className="left"></div>
      <form className="right" onSubmit={(e)=>e.preventDefault()}>
        <div className="form-title">
        Request Callback
        </div>
        <div className="input-group">
        <input type="text" placeholder="Enter your name"/>
        <input type="email" placeholder="Enter your email*"/>
        <button type="submit">Send</button>
        </div>
      </form>
  </section>;
}

export default Callback;

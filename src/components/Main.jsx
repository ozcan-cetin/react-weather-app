import { useState } from "react";

const Main = () => {
    const [searchText, setSearchText] = useState("")
    const handleChange = (e) => {
        setSearchText(e.target.value);
        // console.log(searchText);
    }
    // console.log(searchText);
    
    return (
      <section className="main">
        <form>
          <input onChange={handleChange} type="text" placeholder="Search for a city" autoFocus />
          <button type="submit">SUBMIT</button>
          <span className="msg"></span>
        </form>
        <div className="container">
          <ul className="cities"></ul>
        </div>
      </section>
    );
  };
  
  export default Main;
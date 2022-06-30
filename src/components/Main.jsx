const Main = () => {
    return (
      <section className="main">
        <form>
          <input type="text" placeholder="Search for a city" autofocus />
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
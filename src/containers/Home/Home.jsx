import React from "react";
import './Home.scss';
import NavBackground from "../../assets/home_nav_background.jpg";

class Home extends React.PureComponent {
  render() {
    return (
      <div id="home">
        <figure>
          <div style={{ backgroundImage: `url(${NavBackground})` }} />
        </figure>
        Strona główna
      </div>
    );
  }
}

export default Home;

import { useContext } from "react";
import Searchbar from "../../components/searchbar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
function HomePage() {
  const {currentuser} = useContext(AuthContext);
  console.log(currentuser)
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place
          </h1>
          <p>
          Welcome to  <b>GHAR KHARIDO</b>  , your ultimate destination for real estate needs. Browse thousands of listings effortlessly, tailored to your preferences. Our intuitive interface simplifies finding your dream property, whether it's a cozy apartment or a spacious family home. Stay informed with real-time market insights and neighborhood guides. Connect with trusted agents dedicated to your success. Start your real estate journey today with <b>GHAR KHARIDO</b>
          </p>

          <Searchbar/>

          <div className="boxes">
               <div className="box">
                  <h1>16+</h1>
                  <h2>Years of Experience</h2>
               </div>
          
               <div className="box">
               <h1>200</h1>
               <h2>Award Gained</h2>
            </div>


            <div className="box">
            <h1>1200+</h1>
            <h2>Property Ready</h2>
         </div>


          </div>

        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css"; // For additional styling

function HomePage() {
  return (
    <section className="home-page d-flex flex-column align-items-center">
      {/* Title Text */}
      <h1 className="title-text">What makes us different makes them stronger</h1>

      {/* Frame Container */}
      <div className="content-frame d-flex justify-content-center">
        {/* Feature Box 1 */}
        <div className="frame-box d-flex flex-column align-items-start p-3">
          <div className="icon-frame">
            <img src="src/images/food 1.png" alt="Real Food" className="feature-icon" />
          </div>
          <h3 className="feature-title">Real Food</h3>
          <p className="feature-description">
            Wholesome recipes for dogs with real meat and veggies.
          </p>
        </div>

        {/* Feature Box 2 */}
        <div className="frame-box d-flex flex-column align-items-start p-3">
          <div className="icon-frame">
            <img src="src/images/pet-bowl.png" alt="Premium Ingredient" className="feature-icon" />
          </div>
          <h3 className="feature-title">Premium Ingredient</h3>
          <p className="feature-description">
            Elevating pet care with unmatched safety and quality.
          </p>
        </div>
      </div>

      {/* Second Content Frame */}
      <div className="second-content-frame d-flex justify-content-center">
        {/* Second Frame Box (1) */}
        <div className="second-frame-box d-flex flex-column">
          {/* Inner Frame Box (1) */}
          <div className="inner-frame-box">
            <h2 className="nutrition-heading">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>
            <p className="nutrition-subheading">
              Invest in your dog's future with our scientifically formulated superfood-powered supplements. 
              Give them the nutrition they deserve and watch them thrive with vitality, energy, 
              and the joy of a longer, healthier life.
            </p>
          </div>
          {/* Inner Frame Box (2) */}
          <div className="inner-frame-box">
            <h2 className="key-heading">
              Key Points:
            </h2>
            <p className="nutrition-subheading">
              Invest in your dog's future with our scientifically formulated superfood-powered supplements. 
              Give them the nutrition they deserve and watch them thrive with vitality, energy, 
              and the joy of a longer, healthier life.
            </p>
          </div>
        </div>

        {/* Additional Placeholder for Other Frame Boxes */}
        <div className="second-frame-box"></div>
        
      </div>
    </section>
  );
}

export default HomePage;

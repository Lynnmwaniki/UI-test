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
    </section>
  );
}

export default HomePage;

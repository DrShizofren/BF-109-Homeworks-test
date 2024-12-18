import React from "react";
import "./index.css";
import MyButton from "../Components/MyButton";

const Section1 = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="banner">
            <img
              src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
              alt=""
            />
            <div className="banner-hero">
              <h1>Business Name or Tagline</h1>
              <p>
                This is a template that is great for small businesses. It
                doesn't have too much fancy flare to it, but it makes a great
                use of the standard Bootstrap core components. Feel free to use
                this template for any project you want!
              </p>
              <MyButton name={"Call to Action!"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;

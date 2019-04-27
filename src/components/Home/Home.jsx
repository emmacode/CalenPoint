import React from "react";
import "./home.css";
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <section>
            <div className="home">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="text-white animated slideInLeft mb-4">
                      Welcome to CalenPoint
                    </h1>
                    <h4 className="text-white home-h4 mb-4">
                      Online Appointment <br /> Made Easy{" "}
                    </h4>
                    <p className="text-white home-p">
                      Create new appointment with CalenPoint no matter where you
                      are, join the simple life of CalenPoint
                    </p>
                  </div>
                  <div className="col-md-6">hello</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;

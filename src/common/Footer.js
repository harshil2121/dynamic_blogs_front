import Star_Large_Light from "../assets/images/shape/star-large-light.png";
import Circle_Slice from "../assets/images/shape/circle-slice.png";

function Footer(params) {
  return (
    <footer className="footer">
      <div className="footer-sec">
        <div className="shape-one">
          <img src={Circle_Slice} alt="shape" />
        </div>
        <div className="shape-two">
          <img src={Star_Large_Light} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe-area">
                <div className="content-wrapper">
                  <h2 className="subscribe-title">
                    Let's connect just subscribe to <br />
                    our newsletter today!
                  </h2>
                  <div className="subscribe-form-wrapper">
                    <div className="subscribe-form-widget">
                      <form>
                        <div className="mc4wp-form-fields">
                          <div className="single-field">
                            <input
                              type="email"
                              placeholder="Enter email address"
                            />
                          </div>
                          <button className="submit-btn" type="submit">
                            Submit now
                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-border"></div>
            </div>
          </div>
          <div className="footer-main">
            <div className="footer-widget">
              <div className="footer-widget-info">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="https://techwize.com/assets/images/logo/logo.svg"
                      alt="Footer Logo"
                      style={{ width: "200px" }}
                    />
                  </a>
                </div>
                <p className="desc">Get your business to the new heights.</p>
              </div>
            </div>
            <div className="footer-widget widget_nav_menu">
              <h2 className="footer-widget-title">Sales@example.com</h2>
              <p className="desc">Mail us now</p>
            </div>
            <div className="footer-widget widget_nav_menu">
              <h2 className="footer-widget-title">(234) 567.890.11</h2>
              <p className="desc">WhatsApp or Call</p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-border"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text">
                <p>Copyright © 2023 ITsolution. All rights reserved.</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="footer-bottom-menu">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

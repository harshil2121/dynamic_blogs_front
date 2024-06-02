function Header(params) {
  return (
    <header class="header-area">
      <div
        class="header-menu-area sticky-header fixed-header activate-animation sticky_menu animated fadeIn"
        style={{ marginTop: "0px" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-3 col-md-6 col-6 d-flex align-items-center">
              <div class="logo">
                <a href="index.html" style={{ maxWidth: "200px" }}>
                  <img
                    src="https://techwize.com/assets/images/logo/logo.svg"
                    alt="logo"
                    style={{ width: "200px" }}
                  />
                </a>
              </div>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-6 col-6 d-flex align-items-center justify-content-end justify-content-xxl-between">
              <div class="menu d-inline-block">
                <nav
                  id="main-menu"
                  class="main-menu"
                  style={{ display: "block" }}
                >
                  <ul>
                    <li class="dropdown active">
                      <a href="index.html">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">Home Page 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Page 2</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li class="dropdown">
                      <a href="pricing.html">Pages</a>
                      <ul class="submenu">
                        <li>
                          <a href="project.html">Project Page</a>
                        </li>
                        <li>
                          <a href="project-details.html">
                            Project Details Page
                          </a>
                        </li>

                        <li>
                          <a href="service.html">Service Page</a>
                        </li>
                        <li>
                          <a href="service-details.html">
                            Service Details Page
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="blog.html">Blog</a>
                      <ul class="submenu">
                        <li>
                          <a href="blog.html">Blog Page</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details Page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="header-btn">
                <a href="#" class="header-single-btn active">
                  Get a quote
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div class="mobile-menu-bar d-lg-none text-end">
                <a href="#" class="mobile-menu-toggle-btn">
                  <i class="fal fa-bars"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

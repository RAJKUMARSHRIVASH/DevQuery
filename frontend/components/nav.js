let navbar = () => {
  return `
  <header>
  <div class="navbar-container">
    <nav>
      <div class="navbar-brand">
        <div class="hamburger">
          <div class="hamburger-menu">
            <div class="ham-line"></div>
            <div class="ham-line"></div>
            <div class="ham-line"></div>
          </div>
          <div class="navbar-dropdown-menu">
            <a href="#" class="nav-link">Home</a>
            <h5>Public</h5>
            <ul class="nav-ul">
              <li class="nav-item">
                <i class="fas fa-globe-europe"></i>
                <a href="#" class="nav-link">DevQuery</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Tags</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Users</a>
              </li>
            </ul>
            <h5>Find a Job</h5>
            <ul class="nav-ul">
              <li class="nav-item">
                <a href="#" class="nav-link">Jobs</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Companies</a>
              </li>
            </ul>
            <h5>Teams <a href="#">What's this ?</a></h5>
            <a href="#" class="nav-link">
              <i class="fas fa-briefcase"></i>
              <span>Free 30 Day Trial</span>
            </a>
          </div>
        </div>

        <a href="../index.html" id="in_nav_icon" class="nav-icon">
          <img
            class="navbar-logo"
            src="../favicon/DevQuery.logo.png"
            alt="logo"
            id="in_logo"
          />
          <img class="nav-mini-logo"
            src="../favicon/mini.logo.png"
            alt="logo"
            id="in_mini_logo"
          />
        </a>
      </div>
      <div class="nav-links">
        <ul>
          <li><a href="../html/users.html" id="users-page">Users</a></li>
          <li><a href="../html/home.html" id="in_quetions">Questions</a></li>
          <li><a href="../html/ask.html" id="in_ask">Ask</a></li>
        </ul>
      </div>
      <div class="navbar-search">
        <div class="searchbox">
          <i class="fas fa-search"></i>
          <input id="ques" type="text" placeholder="Search a Query..." />
          <button id="searching" style="background-color:rgb(10, 149, 255);display:none;border:0px;width:60px;height:20px;border-radius:3px;color:white" >Search</button>
        </div>
        <div class="searchbox-hints">
          <div class="searcharrow"></div>
          <div class="searchbox-hint-body">
            <div class="hints-column">
              <div class="hint-text">
                <span>[tag] </span> search within a tag
              </div>
              <div class="hint-text">
                <span>user:1234 </span> search by author
              </div>
              <div class="hint-text">
                <span>"words here"</span> exact phrase
              </div>
            </div>
            <div class="hints-column">
              <div class="hint-text">
                <span>answers:0</span> unanswered questions
              </div>
              <div class="hint-text">
                <span> score:3 </span> posts with a 3+ score
              </div>
              <div class="hint-text">
                <span>isaccepted:yes </span> search within status
              </div>
            </div>
          </div>
          <div class="searchbox-footer">
            <a href="../html/ask.html" class="btn" id="id_askbtn">Ask a question</a>
            <a href="#" class="search-help">Search help</a>
          </div>
        </div>
      </div>
      <div class="nav-right-buttons">
        <div class="search-btn">
          <i class="fas fa-search"></i>
        </div>

        <a href="../html/login.html" class="btn btn-login" id="in_login">Log in</a>
        <a href="../html/register.html" class="btn btn-register" id="in_signup">Sign up</a>
      </div>
      <div id="user-info"><h3>Hello<br><span id="user-name"></span></h3></div>
    </nav>
  </div>
</header>
  `;
};

let footer = () => {
  return `
    <footer class="footer">
    <img
      src="https://cdn.sstatic.net/Img/home/robot.svg?v=dfa16a330cbd"
      alt=""
      class="footer-robot-img"
    />
    <div class="container">
      <div class="footer-content">        
        <div class="footer-nav">
          <div class="footer-nav-col">
            <div class="footer-links-title">
              <a href="#">DevQuery</a>
            </div>
            <ul class="footer-links">
              <li class="footer-link-item">
                <a href="#" class="footer-link">Questions</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Jobs</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Developer Jobs Directory</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Salary Calculator</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Help</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Mobile</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Disable Responsiveness</a>
              </li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <div class="footer-links-title"><a href="#">Products</a></div>
            <ul class="footer-links">
              <li class="footer-link-item">
                <a href="#" class="footer-link">Teams</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Talent</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Advertising</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Enterprise</a>
              </li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <div class="footer-links-title"><a href="#">Company</a></div>
            <ul class="footer-links">
              <li class="footer-link-item">
                <a href="#" class="footer-link">About</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Press</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Work Here</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Legal</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Privacy Policy</a>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <div class="footer-links-title">
              <a href="#">Query Exchange Network</a>
            </div>
            <ul class="footer-links">
              <li class="footer-link-item">
                <a href="#" class="footer-link">Technology</a>
                <div class="footer-arrow-icon">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Life / Arts</a>
                <div class="footer-arrow-icon">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Culture / Recreation</a>
                <div class="footer-arrow-icon">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Science</a>
                <div class="footer-arrow-icon">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </li>
              <li class="footer-link-item">
                <a href="#" class="footer-link">Other</a>
                <div class="footer-arrow-icon">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-another-links">
          <div class="social-media">
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
    `;
};

export { navbar, footer };

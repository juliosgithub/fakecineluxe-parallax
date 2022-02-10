import "./style.css";
import facebook from "../imgs/social-facebook.svg";
import instagram from "../imgs/social-instagram.svg";
import twitter from "../imgs/social-twitter.svg";
import youtube from "../imgs/social-youtube.svg";
import pinterest from "../imgs/social-pinterest.svg";
import logo from "../imgs/logo.svg";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="navbar-footer">
            <div className="navbar-socials">
              <div className="box-social">
                <a href="#">
                  <img src={facebook} />
                </a>
              </div>

              <div className="box-social">
                <a href="#">
                  {" "}
                  <img src={pinterest} />
                </a>
              </div>
              <div className="box-social">
                <a href="#">
                  {" "}
                  <img src={instagram} />
                </a>
              </div>
              <div className="box-social">
                <a href="#">
                  {" "}
                  <img src={twitter} />
                </a>
              </div>
              <div className="box-social">
                <a href="#">
                  {" "}
                  <img src={youtube} />
                </a>
              </div>
            </div>

            <div className="navbar-list">
              <ul>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
                <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy">
            <span className="copy-logo">
              <h2>FAKECINELUXE</h2>
            </span>
            <span className="copy-info">
              <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

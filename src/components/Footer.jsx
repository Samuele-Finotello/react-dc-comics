import Marketplace from "./Marketplace"

const Footer = () => {
  return (
    <footer>
      <Marketplace />
      <div id="info">
        <div className="space-between container">
          <div id="lists">
            <div>
              <h2>DC COMICS</h2>
              <ul>
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Videos</li>
                <li>News</li>
              </ul>
              <h2>SHOP</h2>
              <ul>
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </div>
            <div>
              <h2>DC</h2>
              <ul>
                <li>Terms Of Use</li>
                <li>Privacy policy (New)</li>
                <li>Ad Choices</li>
                <li>Advertising</li>
                <li>Jobs</li>
                <li>Subscriptions</li>
                <li>Talent Workshops</li>
                <li>CPSC Certificates</li>
                <li>Ratings</li>
                <li>Shop Help</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h2>SITES</h2>
              <ul>
                <li>DC</li>
                <li>MAD Magazine</li>
                <li>DC Kids</li>
                <li>DC Universe</li>
                <li>DC Power Visa</li>
              </ul>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div id="socials">
        <div className="space-between container">
          <div>
            <button><h2>SIGN-UP NOW!</h2></button>
          </div>
          <div className="space-between align-items-center">
            <span><h2>FOLLOW US</h2></span>
            <ul>
              <li><img src="/img/footer-facebook.png" alt="Facebook" /></li>
              <li><img src="/img/footer-twitter.png" alt="Twitter" /></li>
              <li><img src="/img/footer-youtube.png" alt="Youtube" /></li>
              <li><img src="/img/footer-pinterest.png" alt="Pinterest" /></li>
              <li><img src="/img/footer-periscope.png" alt="Periscope" /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

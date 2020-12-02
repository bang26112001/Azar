import React from 'react';
import '../assets/style/custom.scss'
export default function Discovery(props) {
    return (
        <>
            <div className="loading">
      <img
        src="https://dist.azar-web.com/ic-logo-azar@3x.png"
        id="splash-logo"
      />
    </div>
    <div className="push">
      <div className="transparent-bg" style={{display: "none"}}></div>
      <div className="left-nav" style={{display: "none"}}>
        <div className="information">
          <div id="square-img">
            <div className="imgbox-center-crop">
              <img
                src="http://d1unckwzkxcoc9.cloudfront.net/public/d933142b-75ed-4dfb-acf0-0b27fbea1760.jpg"
                className="img-center-crop"
              />
            </div>
          </div>
          <div className="user-name">Bằng</div>
          <div className="user-id">
            <img
              src="https://dist.azar-web.com/e007557515687cb9be4b36212860225b.ico-profile-id.png"
            />
            Not set
          </div>
          <div className="nation">
            <img
              src="https://dist.azar-web.com/9b4c83bd3342df6f9cb65a92a7cb9db5.flag_vn.png"
            />
            Viet Nam
          </div>
          <div className="like">
            <img
              src="https://dist.azar-web.com/b48c542c62256979428c94ef274bf2a3.btn-chat-thread-thumbsup.png"
            />
            0
          </div>
        </div>
        <div className="main-nav">
          <div className="nav-items">
            <div className="blank">
              <div className="nav-primary"></div>
            </div>
            <a href="discovery.html" className="nav-content">Discover</a>
          </div>
          <div className="nav-items">
            <div className="blank">
              <div className="nav-primary hidden-first"></div>
            </div>
            <a href="#" className="nav-content">History</a>
          </div>
          <div className="nav-items">
            <div className="blank">
              <div className="nav-primary hidden-first"></div>
            </div>
            <a href="#" className="nav-content">Friends</a>
          </div>
          <div className="nav-items">
            <div className="blank">
              <div className="nav-primary hidden-first"></div>
            </div>
            <a href="message.html" className="nav-content">Message</a>
          </div>
          <div className="nav-items">
            <div className="blank">
              <div className="nav-primary hidden-first"></div>
            </div>
            <a href="#" className="nav-content">Settings</a>
          </div>
        </div>
        <div className="go-coin-shop">
          <a href="#/shop" className="go-coin-shop-content">
            <div>
              <button className="small-btn">
                Coin Shop
                <img
                  src="https://dist.azar-web.com/4d78502f11b858489ad614a59e08d604.ic-btn-arrow-s.png"
                  alt="arrow"
                />
              </button>
            </div>
            <div className="coin-shop-item">
              <div className="coin-shop-content">
                <img
                  className="CoinIcon"
                  src="https://dist.azar-web.com/f035050da151ba61821d1e79aad92f76.ic-filter-coin.png"
                />
                <div className="NumOfCoin">0<span className="coin">COIN</span></div>
              </div>
            </div>
          </a>
        </div>
        <div></div>
      </div>
    </div>
    <div className="menu">
      <div className="left-nav-btn">
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>
    </div>
    <header>
      <div className="nav">
        <div>
          <a href="#" id="azar-logo">
            <img
              id="_main-logo"
              src="https://dist.azar-web.com/4cf0586b54d957854dd189454c6dcef0.ic-logo.svg"
              alt="azar-logo"
            />
          </a>
        </div>
        <div>
          <button className="small-btn">
            Coin Shop
            <img
              src="https://dist.azar-web.com/4d78502f11b858489ad614a59e08d604.ic-btn-arrow-s.png"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </header>
    <div className="big-discover">
      <div className="content-discover">
        <div className="selection">
            <button className="setMode" id="light" name="dark">
              <img id="touch" src="https://dist.azar-web.com/b238c45406ea87c25bbe3c3d410a13ce.ic-night-mode.png"></img>
              Night mode
            </button>
            <div className="gender">
              <div className="Both">
                <img src="https://dist.azar-web.com/c2cfcdbe2604881effc4fc9b384cd906.ic-both-select.png"></img>
                <div className="inGender">Both</div>
              </div>
              <div className="Female">
                <img src="https://dist.azar-web.com/e324787097928e9b139cf152e5875fe2.ic-female-normal.png"></img>
                <div className="inGender">Female</div>
              </div>
              <div className="Male">
                <img src="https://dist.azar-web.com/7f875a47aceaadd484c5e86f5ac9720b.ic-male-normal.png"></img>
                <div className="inGender">Male</div>
              </div>
            </div>
            <div className="area"></div>
          </div>
        <div className="content-top">
          <div className="user1 flex-items">
            <video id="localVideo" autoplay muted></video>
          </div>
          <div className="user2 flex-items">
            <video id="remoteVideo" autoplay></video>
          </div>
          <div className="chat-box flex-items">
            <div className="wrap-input">
            <input className="input1" type="text" placeholder="Enjoy chatting..." />
            </div>
          </div>
        </div>
        <div className="content-bottom">
          <button id="callButton" className="meet-btn">Meet friends now!
            <img src="https://dist.azar-web.com/0bfbeb28e996e908a5c3d99fd66d6db0.ic-btn-arrow.png" ></img>
          </button>
          <button id="answerCallButton" className="meet-btn hidden-first">Answer Call</button>
          <button id="rejectCallButton" className="meet-btn hidden-first">Reject Call</button>
          <button id="endCallButton" className="meet-btn hidden-first">End Call</button>
        </div>
      </div>
    </div>
        </>
    );
}   
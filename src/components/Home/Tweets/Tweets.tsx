import "./Tweets.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import pro1 from '../../../assets/Images/TweetImg/profilespics/p1.jpeg'
import pro2 from '../../../assets/Images/TweetImg/profilespics/p2.jpeg'
import pro3 from '../../../assets/Images/TweetImg/profilespics/p3.jpeg'
import pro4 from '../../../assets/Images/TweetImg/profilespics/p4.jpeg'
import pro5 from '../../../assets/Images/TweetImg/profilespics/p5.jpeg'
import pro6 from '../../../assets/Images/TweetImg/profilespics/p6.jpeg'
import pro7 from '../../../assets/Images/TweetImg/profilespics/p7.jpeg'
import pro8 from '../../../assets/Images/TweetImg/profilespics/p8.jpeg'
import pro9 from '../../../assets/Images/TweetImg/profilespics/p9.jpeg'

import SSa from '../../../assets/Images/TweetImg/ss(a).jpeg'
import SSb from '../../../assets/Images/TweetImg/ss(b).jpeg'
import SS1 from '../../../assets/Images/TweetImg/ss1.jpeg'

const Tweets = () => {
  return (
    <div>
      <div className="tweetContent">
        <h2>Supercharge your messaging.</h2>
        <div className="goobtn">
          <a href="#">Continue with Google &#8594;</a>
        </div>
        <div className="ebtn">
          <a href="#">or use email instead &#8594;</a>
        </div>

        <p>
          By continuing, you agree to our <span>terms of use </span>
          and have read our <span> privacy policy</span>.
        </p>

        
      </div>
      <div className="tweetcards">
          <Row>
            <Col xl="4">
              <div className="tweetcard1">
                <Card className="tweetcard1a">
                    <div className="tweethead">
                        <div className="propic">
                        <Card.Img variant="top" src={pro1} />
                        </div>
                        <div className="proname">
                            <h5>Guillermo Ranch</h5>
                            <p>@rauchg</p>
                        </div>
                        <div className="x">
                            <i className="fa-brands fa-x-twitter text-dark"></i>
                        </div>
                    </div>
                  
                  <Card.Body className="tweetbody">
                    <Card.Text className="tweetpara">
                    Want a better Twitter DM experience?
                    One word: Texts.com
                    </Card.Text>
                    <div className="heart">
                        <i className="fa-regular fa-heart " ></i><span> 349</span></div>
                    
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* ///////////////////////////////// */}
            <Col xl="4">
              <div className="tweetcard1 tweetcard2 ">
                <Card className="tweetcard1a">
                    <div className="tweethead">
                        <div className="propic">
                        <Card.Img variant="top" src={pro2} />
                        </div>
                        <div className="proname">
                            <h5>Kishan Bagaria</h5>
                            <p>@KishanBagaria</p>
                        </div>
                        <div className="x x2">
                            <i className="fa-brands fa-x-twitter text-dark"></i>
                        </div>
                    </div>
                  
                  <Card.Body className="tweetbody">
                    <Card.Text className="tweetpara">
                    how it started<span>how it's going</span>   
                    </Card.Text>
                    <div className="screenshots">
                    <div className="SS">
                        <Card.Img variant="top" src={SSa} />
                        </div>
                        <div className="SS">
                        <Card.Img variant="top" src={SSb} />
                        </div>
                    </div>
                    <div className="heart">
                        <i className="fa-regular fa-heart " ></i><span> 1,258</span></div>
                    
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* //////////////////////////////////// */}
            <Col xl="4">
              <div className="tweetcard1 tweetcard3">
                <Card className="tweetcard1a">
                    <div className="tweethead">
                        <div className="propic">
                        <Card.Img variant="top" src={pro3} />
                        </div>
                        <div className="proname">
                            <h5>tina he</h5>
                            <p>@fkpxls</p>
                        </div>
                        <div className="x x3">
                            <i className="fa-brands fa-x-twitter text-dark"></i>
                        </div>
                    </div>
                  
                  <Card.Body className="tweetbody">
                    <Card.Text className="tweetpara">
                    Can't believe I've lived my life without this. 
                    </Card.Text>
                    <Card.Text className="tweetpara">
                    WHY RUN WHEN YOU CAN FLY?!!!!
                    </Card.Text>
                    <div className="heart">
                        <i className="fa-regular fa-heart " ></i><span> 31</span></div>
                    
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* /////////////////////////////////// */}
            <Col xl="4">
              <div className="tweetcard1 tweetcard4">
                <Card className="tweetcard1a">
                    <div className="tweethead">
                        <div className="propic">
                        <Card.Img variant="top" src={pro4} />
                        </div>
                        <div className="proname">
                            <h5>Mario Gabriele &#40;, &#41;</h5>
                            <p>@mariogabriele</p>
                        </div>
                        <div className="x x4">
                            <i className="fa-brands fa-x-twitter text-dark"></i>
                        </div>
                    </div>
                  
                  <Card.Body className="tweetbody">
                    <Card.Text className="tweetpara">
                    New G-Suite
                    </Card.Text>
                    <Card.Text className="tweetpara tweetpara1">
                    Gmail: <span>@Superhuman </span><br />
                    Chrome: <span>@browsercompany</span>  <br />
                    Cal: <span>@Cron</span>  <br />
                    Docs: <span>@memdotai</span>  <br />
                    Chat: <span>@TextsHQ</span> 

                    </Card.Text>
                    <div className="SS1">
                    <Card.Img variant="top" src={SS1} />
                    
                    </div>
                    <div className="heart">
                        <i className="fa-regular fa-heart " ></i><span> 166</span></div>
                    
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* //////////////////////////// */}
            <Col xl="4">
              <div className="tweetcard1 tweetcard5">
                <Card className="tweetcard1a">
                    <div className="tweethead">
                        <div className="propic">
                        <Card.Img variant="top" src={pro5} />
                        </div>
                        <div className="proname">
                            <h5>ianh.eth</h5>
                            <p>@ianhunter</p>
                        </div>
                        <div className="x x5">
                            <i className="fa-brands fa-x-twitter text-dark"></i>
                        </div>
                    </div>
                  
                  <Card.Body className="tweetbody">
                    <Card.Text className="tweetpara">
                    Every once in a while an app comes along that makes you say "wtf did I do before this", like Figma or Github. @TextsHQ is basically that for me right now - iMessage, Twitter, Discord, Telegram, Insta, Slack, all in single UI. 
                    </Card.Text>
                    <Card.Text className="tweetpara ">
                    WTF did I do before this?

                    </Card.Text>
                    
                    <div className="heart">
                        <i className="fa-regular fa-heart " ></i><span> 10</span></div>
                    
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* //////////////////////////// */}
            <Col xl="4">
              <div className="tweetcard1 tweetcard6">
                <Card className="tweetcard1a">
                    <div className="tweethead">
                        <div className="propic">
                        <Card.Img variant="top" src={pro6} />
                        </div>
                        <div className="proname">
                            <h5>John Cutler</h5>
                            <p>@johncutlefish</p>
                        </div>
                        <div className="x x6">
                            <i className="fa-brands fa-x-twitter text-dark"></i>
                        </div>
                    </div>
                  
                  <Card.Body className="tweetbody">
                    <Card.Text className="tweetpara">
                    Using @TextsHQ had an immediate positive emotional / psychological impact. Not sure where they'll go with the product, but for right now it was a huge relief.
                    </Card.Text>
                    
                    <div className="heart">
                        <i className="fa-regular fa-heart " ></i><span> 80</span></div>
                    
                  </Card.Body>
                </Card>
              </div>
            </Col>

            {/* //////////////////////////////// */}
            <Col xl="4">
              <div className="tweetcard1 tweetcard7">
                <Card className="tweetcard1a">
                    <div className="tweethead">
                        <div className="propic">
                        <Card.Img variant="top" src={pro7} />
                        </div>
                        <div className="proname">
                            <h5>Mads Campbell</h5>
                            <p>@martyrdison</p>
                        </div>
                        <div className="x x7">
                            <i className="fa-brands fa-x-twitter text-dark"></i>
                        </div>
                    </div>
                  
                  <Card.Body className="tweetbody">
                    <Card.Text className="tweetpara">
                    i just got to inbox 0 on linkedin thanks to @TextsHQ 
                    </Card.Text>
                    <Card.Text className="tweetpara">
                    do you know how IMPOSSIBLE THAT IS
                    </Card.Text>
                    
                    <div className="heart">
                        <i className="fa-regular fa-heart " ></i><span> 64</span></div>
                    
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* ///////////////////////////// */}
            <Col xl="4">
              <div className="tweetcard1 tweetcard8">
                <Card className="tweetcard1a">
                    <div className="tweethead">
                        <div className="propic">
                        <Card.Img variant="top" src={pro8} />
                        </div>
                        <div className="proname">
                            <h5>surbhi</h5>
                            <p>@subtlyperfect</p>
                        </div>
                        <div className="x x8">
                            <i className="fa-brands fa-x-twitter text-dark"></i>
                        </div>
                    </div>
                  
                  <Card.Body className="tweetbody">
                    <Card.Text className="tweetpara">
                    Signed up for texts.com earlier today after much procrastination (thanks to the generous people at @TextsHQ for an early invite), and I LOVE it!
                    </Card.Text>
                    <Card.Text className="tweetpara">
                    If you spend a lot of time toggling between tens of apps, this product is a saviour.
                    </Card.Text>
                    <Card.Text className="tweetpara">
                    Smooth. Efficient. Quick.
                    </Card.Text>
                    
                    <div className="heart">
                        <i className="fa-regular fa-heart " ></i><span> 12</span></div>
                    
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* ////////////////////////////// */}
            <Col xl="4">
              <div className="tweetcard1 tweetcard9">
                <Card className="tweetcard1a">
                    <div className="tweethead">
                        <div className="propic">
                        <Card.Img variant="top" src={pro9} />
                        </div>
                        <div className="proname">
                            <h5>Brian Lovin</h5>
                            <p>@brian_lovin</p>
                        </div>
                        <div className="x x9">
                            <i className="fa-brands fa-x-twitter text-dark"></i>
                        </div>
                    </div>
                  
                  <Card.Body className="tweetbody">
                    <Card.Text className="tweetpara">
                    Got access to texts.com yesterday. It's nice! Specifically, I love the feature where messages stay unread until you actually reply.
                    </Card.Text>
                    
                    <div className="heart">
                        <i className="fa-regular fa-heart " ></i><span> 126</span></div>
                    
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
    </div>
  );
};

export default Tweets;

import "./Products.css";
import Card from "react-bootstrap/Card";
import Cardimg1 from "../../../assets/Images/products/screenshot-ai-light-min.png";
import Cardimg2 from "../../../assets/Images/products/screenshot-inbox-light-min.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardItemImg1 from '../../../assets/Images/products/moreproducts/detective.26a210b0.svg'
import CardItemImg2 from '../../../assets/Images/products/moreproducts/move-to.fd3ac6a0.svg'
import CardItemImg3 from '../../../assets/Images/products/moreproducts/backup.3ed2e062.svg'
import CardItemImg4 from '../../../assets/Images/products/moreproducts/classic.fefdfced.svg'
import CardItemImg5 from '../../../assets/Images/products/moreproducts/styles.43ed3dd3.svg'
import CardItemImg6 from '../../../assets/Images/products/moreproducts/brush.e86862ba.svg'

const Products = () => {
  return (
    <div>
      <div className="productContent">
        <h2>Assisted by AI.</h2>
        <p>Multiply your productivity.</p>
        <div className="productItem1">
          <Card className="card1" style={{ width: "18rem" }}>
            <div className="cardImg">
              <Card.Img variant="top" src={Cardimg1} />
            </div>
            <div className="cardBody">
              <Card.Body>
                <div className="cardContent">
                  <Card.Title className="heading">
                    <span>&#8594; </span>Chat summaries
                  </Card.Title>
                  <Card.Text className="para">
                    Catch up quickly with automated summaries of the ongoing
                    conversation.
                  </Card.Text>

                  <Card.Title className="heading">
                    <span>&#8594; </span>Draft responses
                  </Card.Title>
                  <Card.Text className="para">
                    Save time drafting a response with ChatGPT, integrated
                    directly in Texts.
                  </Card.Text>

                  <Card.Title className="heading">
                    <span>&#8594; </span>Translate your answers
                  </Card.Title>
                  <Card.Text className="para">
                    Write a reply in your native language and let AI translate
                    it for you.
                  </Card.Text>
                </div>
              </Card.Body>
            </div>
          </Card>
        </div>
      </div>
      <div className="productContent">
        <h2>A better inbox.</h2>
        <p>Keep your inbox organized, regardless of how big it is.</p>
        <div className="productItem">
          <Card className="card1" style={{ width: "18rem" }}>
            <div className="cardImg">
              <Card.Img variant="top" src={Cardimg2} />
            </div>
            <div className="cardBody">
              <Card.Body>
                <div className="cardContent cardContent1">
                  <Card.Title className="heading heading1">
                    <span>&#8594; </span>Search all messages
                  </Card.Title>
                  <Card.Text className="para ">
                    Find that link, document, picture or video from forever ago
                    easily.
                  </Card.Text>

                  <Card.Title className="heading">
                    <span>&#8594; </span>Archive conversations
                  </Card.Title>
                  <Card.Text className="para ">
                    Never miss a message again, but archive chats to hit inbox
                    zero.
                  </Card.Text>

                  <Card.Title className="heading">
                    <span>&#8594; </span>Mark as unread
                  </Card.Title>
                  <Card.Text className="para ">
                    Keep chats unread by default until you respond to them.
                  </Card.Text>
                </div>
              </Card.Body>
            </div>
          </Card>
        </div>
       
      </div>
      <div className="productContent">
          <h2>And much more.</h2>
          <div className="cardItems">
            <Row>
              <Col xl='4'>
                <div className="cardItem1">
                  <Card className="card2">
                    <div className="cardImg1">
                    <Card.Img variant="top" src={CardItemImg1} />
                    </div>
                    
                    <Card.Body className="cardBody1">
                      <Card.Title className="heading1">Stealth Mode</Card.Title>
                      <Card.Text className="para1">
                      Open and read messages without notifying the sender.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col xl='4'>
                <div className="cardItem1">
                  <Card className="card2">
                    <div className="cardImg1">
                    <Card.Img variant="top" src={CardItemImg2} />
                    </div>
                    
                    <Card.Body className="cardBody1">
                      <Card.Title className="heading1">Send Later </Card.Title>
                      <Card.Text className="para1">
                      Schedule messages so they get sent when people are active.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col xl='4'>
                <div className="cardItem1">
                  <Card className="card2">
                    <div className="cardImg1">
                    <Card.Img variant="top" src={CardItemImg3} />
                    </div>
                    
                    <Card.Body className="cardBody1">
                      <Card.Title className="heading1">Snooze Messages</Card.Title>
                      <Card.Text className="para1">
                      Snooze people that you don't want to reply to just yet.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col xl='4'>
                <div className="cardItem1">
                  <Card className="card2">
                    <div className="cardImg1">
                    <Card.Img variant="top" src={CardItemImg4} />
                    </div>
                    
                    <Card.Body className="cardBody1">
                      <Card.Title className="heading1">Keyboard Shortcuts</Card.Title>
                      <Card.Text className="para1">
                      Move at the speed of light with our extensive keyboard support.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col xl='4'>
                <div className="cardItem1">
                  <Card className="card2">
                    <div className="cardImg1">
                    <Card.Img variant="top" src={CardItemImg5} />
                    </div>
                    
                    <Card.Body className="cardBody1">
                      <Card.Title className="heading1">Dark & Light Modes</Card.Title>
                      <Card.Text className="para1">
                      Choose your preferred color scheme to reduce eye strain.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col xl='4'>
                <div className="cardItem1">
                  <Card className="card2">
                    <div className="cardImg1">
                    <Card.Img variant="top" src={CardItemImg6} />
                    </div>
                    
                    <Card.Body className="cardBody1">
                      <Card.Title className="heading1">Customizable UI</Card.Title>
                      <Card.Text className="para1">
                      Define your own experience with custom CSS.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              

              
            </Row>
          </div>
        </div>
    </div>
  );
};

export default Products;

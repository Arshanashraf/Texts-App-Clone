import "./Icon.css";
import Plx from "react-plx";
import Icon1 from "../../../assets/Images/icon.png";
import I1 from "../../../assets/Images/social-icons/Discord.svg";
import I2 from "../../../assets/Images/social-icons/Instagram.svg";
import I3 from "../../../assets/Images/social-icons/LinkedIn.svg";
import I4 from "../../../assets/Images/social-icons/Messenger.svg";
import I5 from "../../../assets/Images/social-icons/Signal.svg";
import I6 from "../../../assets/Images/social-icons/Slack.svg";
import I7 from "../../../assets/Images/social-icons/Telegram.svg";
import I8 from "../../../assets/Images/social-icons/WhatsApp.svg";
import I9 from "../../../assets/Images/social-icons/X.svg";
import I10 from "../../../assets/Images/social-icons/iMessage.svg";

const Icon = () => {
  return (
    <div>
      <div>
        <div className="socialIcons">
        <div className="iconMain">
          <Plx
            parallaxData={[
              {
                start: 500,
                end: "self",
                properties: [
                  {
                    startValue: 1,
                    endValue: 3,
                    property: "scale",
                  },
                  {
                    startValue: 100,
                    endValue: -150,
                    property: "translateY",
                  },
                ],
              },
            ]}
          >
            <img src={Icon1} />
          </Plx>
        </div>
          <div className="discord">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 200,
                    property: "translateY",
                  },
                  {
                    startValue: 0,
                    endValue: 450,
                    property: "translateX",
                  },
                  {
                    startValue: 1.5,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 50,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={I1} />
          </Plx>
          </div>
          <div className="insta">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 200,
                    property: "translateY",
                  },
                  {
                    startValue: 450,
                    endValue: 0,
                    property: "translateX",
                  },
                  {
                    startValue: 1.5,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 50,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={I2} />
          </Plx>
          </div>
          <div className="linkedIn">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 200,
                    property: "translateY",
                  },
                  {
                    startValue: 0,
                    endValue: 170,
                    property: "translateX",
                  },
                  {
                    startValue: 1.5,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 50,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={I3} />
          </Plx>
          </div>

          <div className="messenger">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 150,
                    property: "translateY",
                  },
                  {
                    startValue: 300,
                    endValue: 0,
                    property: "translateX",
                  },
                  {
                    startValue: 1.5,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 50,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={I4} />
          </Plx>
          </div>

          <div className="signal">
          <Plx
            parallaxData={[
              {
                start: 500,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 100,
                    property: "translateY",
                  },
                  {
                    startValue: 200,
                    endValue: 0,
                    property: "translateX",
                  },
                  {
                    startValue: 1.5,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 50,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={I5} />
          </Plx>
          </div>

          <div className="slack">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 55,
                    property: "translateY",
                  },
                  {
                    startValue: 450,
                    endValue: 0,
                    property: "translateX",
                  },
                  {
                    startValue: 1.5,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 50,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={I6} />
          </Plx>
          </div>

          <div className="telegram">
          <Plx
           parallaxData={[
            {
              start: 450,
              end: 1200,
              properties: [
                {
                  startValue: 0,
                  endValue: 70,
                  property: "translateY",
                },
                {
                  startValue: 0,
                  endValue: 450,
                  property: "translateX",
                },
                {
                  startValue: 1.5,
                  endValue: 1,
                  property: "scale",
                },
                {
                  startValue: 0,
                  endValue: 50,
                  property: "rotate",
                },
              ],
            },
          ]}
          >
            <img src={I7} />
          </Plx>
          </div>

          <div className="whatsapp">
          <Plx
            parallaxData={[
              {
                start: 503,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 55,
                    property: "translateY",
                  },
                  {
                    startValue: 0,
                    endValue: 600,
                    property: "translateX",
                  },
                  {
                    startValue: 1.5,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 50,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={I8} />
          </Plx>
          </div>

          <div className="twitter">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 55,
                    property: "translateY",
                  },
                  {
                    startValue: 0,
                    endValue: 550,
                    property: "translateX",
                  },
                  {
                    startValue: 1.5,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 50,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={I9} />
          </Plx>
          </div>

          <div className="imessage">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 220,
                    property: "translateY",
                  },
                  {
                    startValue: 0,
                    endValue: 500,
                    property: "translateX",
                  },
                  {
                    startValue: 1.5,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 50,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={I10} />
          </Plx>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Icon;


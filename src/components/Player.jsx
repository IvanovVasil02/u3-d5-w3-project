import { Col, Row } from "react-bootstrap";

import Shuffle from "../assets/playerbuttons/Shuffle.png";
import Previous from "../assets/playerbuttons/Previous.png";
import Play from "../assets/playerbuttons/Play.png";
import Pause from "../assets/playerbuttons/Pause.png";
import Next from "../assets/playerbuttons/Next.png";
import Repeat from "../assets/playerbuttons/Repeat.png";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerOff, setPlayerOn } from "../redux/actions";

const Player = () => {
  const dispatch = useDispatch();
  const isPlayerOn = useSelector((state) => state.main.isPlayerOn);

  return (
    <Row>
      <Col lg={10} className='offset-lg-2'>
        <Row>
          <Col xs={6} md={4} lg={2} className='offset-3 offset-md-4 offset-lg-5 playerControls mt-1'>
            <Row>
              <Col>
                <a href='s'>
                  <img src={Shuffle} alt='shuffle' />
                </a>
              </Col>
              <Col>
                <a href='s'>
                  <img src={Previous} alt='shuffle' />
                </a>
              </Col>
              <Col className='d-flex align-items-end'>
                {
                  <img
                    src={isPlayerOn ? Pause : Play}
                    alt='shuffle'
                    width={14}
                    onClick={() => {
                      isPlayerOn ? dispatch(setPlayerOff()) : dispatch(setPlayerOn());
                    }}
                  />
                }
              </Col>
              <Col>
                <a href='s'>
                  <img src={Next} alt='shuffle' />
                </a>
              </Col>
              <Col>
                <a href='s'>
                  <img src={Repeat} alt='shuffle' />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='justify-content-center playBar py-3'>
          <Col xs={8} md={6}>
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                aria-valuenow='0'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Player;

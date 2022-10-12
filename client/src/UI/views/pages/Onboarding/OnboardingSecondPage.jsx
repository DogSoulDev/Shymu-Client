import OnboardingThirdPage from "./OnboardingThirdPage";
import Singer from "../../../img/photo2.jpg";
import "./onboarding.css";

const OnboardingSecondPage = ({
  btnSecondPage,
  setBtnSecondPage,
  btnThirdPage,
  setBtnThirdPage,
}) => {
  const handleBtnSecondPage = () => {
    setBtnSecondPage(false);
  };
  return (
    <div className='card'>
      {btnSecondPage ? (
        <div className='card__content'>
          <div className='card__img'>
            <img src={Singer} alt='' />
          </div>
          <div className='card__text'>
          <h1 className="title_-onboarding plusjakartasans-extra-bold-white-48px">
            <span className="plusjakartasans-extra-bold-ship-gray-48px">CHAT</span>
            <span className="plusjakartasans-extra-bold-outrageous-orange-48px">.</span>
           </h1>
           <h1 className="onbarding_-title inter-normal-aztec-24px">
               SAY HELLO TO GENUINE CONNECT
           </h1>
            <p className="onboarding_-text inter-normal-dove-gray-15px">
              Connecting on a shared love of music, makes interactions easy, natural and fun
            </p>
          </div>
          <div className="BackNext">
          <input
            type='button'
            value='← BACK'
            className='card__btn back-1 inter-semi-bold-white-16px '
            onClick={handleBtnSecondPage}
          />
          <input
            type='button'
            value='NEXT →'
            className='card__btn back-1 inter-semi-bold-white-16px '
            onClick={handleBtnSecondPage}
          />
          </div>
          <div className="slider">
                  <div className="ellipse"></div>
                  <div className="rectangle-5"></div>
                  <div className="ellipse"></div>
              </div>
        </div>
      ) : (
        <OnboardingThirdPage
          btnThirdPage={btnThirdPage}
          setBtnThirdPage={setBtnThirdPage}
        />
      )}
    </div>
  );
};

export default OnboardingSecondPage;

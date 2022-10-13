import OnboardingSecondPage from "./OnboardingSecondPage";

import Singer from "../../../img/photo1.jpg";
import "./onboarding.css"
import "./styleguide.css";

const OnboardingFirstPage = ({
  btnFirstPage,
  setBtnFirstPage,
  btnSecondPage,
  setBtnSecondPage,
  btnThirdPage,
  setBtnThirdPage
}) => {
  const handleBtnFirstPage = () => {
    setBtnFirstPage(false);
  };
  return (
    <div className='card'>
      {btnFirstPage ? (
         <div className='card__content'>
         <div className='card__img'>
            <img src={Singer} alt='shymu'/>
          
            <h1 className="title_-onboarding plusjakartasans-extra-bold-white-48px">
                <span className="plusjakartasans-extra-bold-ship-gray-48px">CONNECT</span>
                <span className="plusjakartasans-extra-bold-outrageous-orange-48px">.</span>
            </h1>
            <h1 className="onbarding_-title inter-normal-aztec-24px">
             THE DATING APP <br />
             FOR MUSIC LOVERS.
           </h1>
           <p className="onboarding_-text inter-normal-dove-gray-15px">
             Let people meet the real you. Connect based on your most intimate feelings- Music
          </p>
          <div className="BackNext">
          <input
            type='button'
            value='← BACK'
            className='card__btn back-1 inter-semi-bold-white-16px '
            onClick={handleBtnFirstPage}
          />
          <input
            type='button'
            value='NEXT →'
            className='card__btn back-1 inter-semi-bold-white-16px '
            onClick={handleBtnFirstPage}
          />
          

          </div>
              <div className="slider">
                  <div className="rectangle-5"></div>
                  <div className="ellipse"></div>
                  <div className="ellipse"></div>
              </div>
        </div>
        </div>
      ) 
      : (
        <OnboardingSecondPage
          btnSecondPage={btnSecondPage}
          setBtnSecondPage={setBtnSecondPage}
          btnThirdPage={btnThirdPage}
          setBtnThirdPage={setBtnThirdPage}
        />
      )}
    </div>
  );
};

export default OnboardingFirstPage;

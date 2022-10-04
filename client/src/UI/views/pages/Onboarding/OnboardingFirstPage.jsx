import OnboardingSecondPage from "./OnboardingSecondPage";

import Singer from "../../../img/photo1.jpg";
import "./onboarding.css";

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
            <img src={Singer} />
          
            <p className='card__title'>Welcome</p>
            <p>The dating app for music lovers</p>
            <span className='card__description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis
            </span>
          <input
            type='button'
            value='Next'
            className='card__btn'
            onClick={handleBtnFirstPage}
          />
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

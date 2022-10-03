import OnboardingSecondPage from "./OnboardingSecondPage";

import Singer from "../../../img/singer-first_page.jpg";
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
            <img src={Singer} alt='' className='' />
          </div>
          <div className='card__text'>
            <p className='card__title'>Welcome</p>
            <p>The dating app for music lovers</p>
            <span className='card__description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis
            </span>
          </div>
          <input
            type='button'
            value='Next'
            className='card__btn'
            onClick={handleBtnFirstPage}
          />
        </div>
      ) : (
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

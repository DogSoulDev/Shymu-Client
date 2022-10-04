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
            <p>Music as vehicle for dating</p>
            <p className='card__description'>
              "Now you can learn from anywhere.there are many skill you can
              learn"
            </p>
          </div>
          <input
            type='button'
            value='Next'
            className='card__btn'
            onClick={handleBtnSecondPage}
          />
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

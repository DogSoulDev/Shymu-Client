import "./onboarding.css";
import Singer from "../../../img/singer-first_page.jpg";

const OnboardingThirdPage = () => {
  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__img'>
          <img src={Singer} alt='' />
        </div>
        <div className='card__text'>
          <p>Find your Love</p>
          <p className='card__description'>
            You can find and make friend with people near you.
          </p>
        </div>
        <input type='button' value='Next' className='card__btn' />
      </div>
    </div>
  );
};

export default OnboardingThirdPage;

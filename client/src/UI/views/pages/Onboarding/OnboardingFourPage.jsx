import "./onboarding.css";
import Singer from "../../../img/singer-first_page.jpg";

const OnboardingFourPage = () => {
  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__img'>
          <img src={Singer} alt='' />
        </div>
        <div className='card__text'>
          <p>Choose your style</p>
          <p className='card__description'>
            "There’s a song for every emotion. There’s a person out there for
            everyone."
          </p>
        </div>
        <input type='button' value='Get Started' className='card__btn' />
      </div>
    </div>
  );
};

export default OnboardingFourPage;

import Singer from "../../../img/singer-first_page.jpg";
import "./onboarding.css";

const OnboardingSecondPage = () => {
  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__img'>
          <img src={Singer} alt='' />
        </div>
        <div className='card__text'>
          <p>Music as vehicle for dating</p>
          <p className="card__description">
            "Now you can learn from anywhere.there are many skill you can learn"
          </p>
        </div>
        <input type='button' value='Next' className="card__btn"/>
      </div>
    </div>
  );
};

export default OnboardingSecondPage;

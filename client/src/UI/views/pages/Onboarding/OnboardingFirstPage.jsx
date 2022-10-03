import Singer from "../../../img/singer-first_page.jpg";
import "./onboarding.css";

const OnboardingFirstPage = () => {
  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__img'>
          <img src={Singer} alt='' className=""/>
        </div>
        <div className='card__text'>
          <p className='card__title'>Welcome</p>
          <p>The dating app for music lovers</p>
          <span className='card__description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis
          </span>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFirstPage;

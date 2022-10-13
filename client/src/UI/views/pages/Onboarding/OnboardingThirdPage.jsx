import "./onboarding.css";
import Singer from "../../../img/photo3.jpg";
import vector from "../../../img/vector.svg";
import OnboardingFourPage from "./OnboardingFourPage";

const OnboardingThirdPage = ({ btnThirdPage, setBtnThirdPage }) => {
  const handleBtnThirdPage = () => {
    setBtnThirdPage(false);
  };


  
  return (
    <div className='card'>
      {btnThirdPage ? (
        <div className='card__content'>
          <div className='card__img3'>
            <img className='card__img2' src={Singer} alt='' />
          </div>
          <div className="icon-play">
            <div className="circle-play">
              <img className="vector" src={vector} alt="Vector" />
           </div>
         </div>
          <div className='card__text'>
          <h1 className="title_-onboarding plusjakartasans-extra-bold-white-48px">
           <span className="plusjakartasans-extra-bold-ship-gray-48px">MATCH</span>
           <span className="plusjakartasans-extra-bold-outrageous-orange-48px">.</span>
          </h1>
          <h1 className="onbarding_-title inter-normal-aztec-24px">
            MUSIC AS AS VEHICLE FOR MATCHING
          </h1>
          <p className="onboarding_-text inter-normal-dove-gray-15px">
            There’s a song for every emotion. There’s a person out there for everyone.
          </p>
          </div>
          <div className="get-started animate-enter">
          <input
            type='button'
            value='Get Started →	 '
            className='bg  text-1 '
            onClick={handleBtnThirdPage}
          />
        </div>
        <div className="slider">
                  <div className="ellipse"></div>
                  <div className="ellipse"></div>
                  <div className="rectangle-5"></div>
              </div>
        </div>
      ) : (
        <OnboardingFourPage />
      )}
    </div>
  );
};

export default OnboardingThirdPage;

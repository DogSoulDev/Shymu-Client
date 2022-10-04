// import Login from "../../components/Login/Login";
import "./onboarding.css";
import Photo4 from "../../../img/photo4.jpg";
import { useNavigate } from "react-router-dom";


const OnboardingFourPage = () => { 
  const navigate = useNavigate()
  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__img'>
          <img src={Photo4} alt='' />
        </div>
        <div className='card__text'>
          <p>Choose your style</p>
          <p className='card__description'>
            "There’s a song for every emotion. There’s a person out there for
            everyone."
          </p>
        </div>
        <input
          type='button'
          value='Get Started'
          className='card__btn'
          onClick={()=> navigate("/login")}
        />
      </div>
    </div>
  );
};

export default OnboardingFourPage;

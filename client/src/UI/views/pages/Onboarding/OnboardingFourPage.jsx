// import Login from "../../components/Login/Login";
import "./onboarding.css";
import shymu_Logo1 from "../../../img/shymu-logo-1.png";
import iconEmail from "../../../img/icon-email.svg";
import iconGoogle from "../../../img/icon-google.svg";
import iconFacebook from "../../../img/icon-facebook.svg";

import { useNavigate } from "react-router-dom";




const OnboardingFourPage = () => { 
  const navigate = useNavigate()
  return (
<div className="container-center-horizontal">
      <div className="sign-in screen">
        <div className="overlap-getStarted">
          <div className="return inter-normal-outrageous-orange-14px">
            <span className="inter-normal-outrageous-orange-14px">RETURN</span>
            <span className="span1-return"> ↺</span>
          </div>
          <div className="overlap-group2">
            <img className="shymu_logo-1 animate-enter" src={shymu_Logo1} alt="SHYMU_LOGO 1" />
            <h1 className="heading-1 animate-enter">
              <span className="span0">Matching never sounded so </span>
              <span className="span_Good">good</span>
          </h1>
          </div>
          <button className="button-email">
            <div className="overlap-button-email">
              <img className="icon-mail" src={iconEmail} alt="icon-mail" />
              <div className="text-email roboto-medium-white-16px">
              Continue with Email
              </div>
            </div>
          </button>
          <div className="button-container">
            <button className="button">
              <img className="icon-google" src={iconGoogle} alt="Icon - Google" />
            </button>
            <button className="button">
              <img className="icon-facebook" src={iconFacebook} alt="icon-facebook" />
            </button>
          </div>
          <p className="not-account mulish-medium-white-16px">
            <span className="mulish-medium-white-16px">Don’t have an account? </span>
            <button className="mulish-bold-outrageous-orange-16px">Sign Up</button>
          </p>
          <p className="privacy-policy roboto-medium-gunsmoke-13px">
          By continuing, you agree to the Terms of Service &amp; Privacy Policy
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default OnboardingFourPage;

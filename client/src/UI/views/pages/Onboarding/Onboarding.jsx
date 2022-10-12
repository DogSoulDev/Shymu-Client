import { useState } from "react";
import OnboardingFirstPage from "./OnboardingFirstPage";

import "./onboarding.css";
import "./styleguide.css";
import Logo from "../../../img/shymu-logo-1@2x.png";

const Onboarding = () => {
  const [logo, setLogo] = useState(true);
  const [btnSecondPage, setBtnSecondPage] = useState(true);
  const [btnFirstPage, setBtnFirstPage] = useState(true);
  const [btnThirdPage, setBtnThirdPage] = useState(true);

  const handleLogo = () => {
    setLogo(false);
  };

  return (
    <div className="shymu_logo animate-enter">
      {logo ? (
        <div className="bg-splash">
          <img  src={Logo} onClick={handleLogo} alt='' className='shymu_logo' />
        </div>
        
      ) : (
        <OnboardingFirstPage
            btnFirstPage={btnFirstPage}
            setBtnFirstPage={setBtnFirstPage}
            btnSecondPage={btnSecondPage}
            setBtnSecondPage={setBtnSecondPage}
            btnThirdPage={btnThirdPage}
            setBtnThirdPage={setBtnThirdPage}
        />
      )}
      
    </div>
    
    
  );
};



export default Onboarding;

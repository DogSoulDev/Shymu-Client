import { useState } from "react";
import OnboardingFirstPage from "./OnboardingFirstPage";

import "./onboarding.css";
import Logo from "../../../img/Logo.png";

const Onboarding = () => {
  const [logo, setLogo] = useState(true);
  const [btnSecondPage, setBtnSecondPage] = useState(true);
  const [btnFirstPage, setBtnFirstPage] = useState(true);
  const [btnThirdPage, setBtnThirdPage] = useState(true);

  const handleLogo = () => {
    setLogo(false);
  };

  return (
    <div className='card'>
      {logo ? (
        <div className='card'>
          <img src={Logo} onClick={handleLogo} alt='' className='card__logo' />
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

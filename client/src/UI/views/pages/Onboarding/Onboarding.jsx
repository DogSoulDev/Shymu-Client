import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OnboardingFirstPage from "./OnboardingFirstPage";
import "./onboarding.css";
import "../../../../styleguide.css";
import Logo from "../../../img/shymu-logo-1@2x.png";

const Onboarding = () => {
  const [logo, setLogo] = useState(true);
  const [btnSecondPage, setBtnSecondPage] = useState(true);
  const [btnFirstPage, setBtnFirstPage] = useState(true);
  const [btnThirdPage, setBtnThirdPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setLogo(false);
       }, 800000);
 }, [])

 const handleLogo = () => {setLogo(false)}

  return (
    <div className="splash_card">
      {logo ? (
        <div className='intro'>
     <div className='overlap-group'>
      <Link className='linkSkip' to='/login'>
      <div className='skip inter-normal-outrageous-orange-14px'>skip</div>
      </Link>
      <div onClick={handleLogo} className='logo-container'> 
      <img src={Logo} alt='shymu_logo' className='shymu_logo animate-enter' />
       <div className='logo-sub-title'>
        <span className='span0'>Matching never sounded so </span>
        <span className='span1'>good</span>
       </div>
      
      </div>
     </div>
    </div>
        
      ) : (
        <OnboardingFirstPage
            setLogo={setLogo}
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

import { Navigate } from "react-router-dom";
import SuccessComponent1 from "./SuccessComponent1";
import SuccessComponent2 from "./SuccessComponent2";

const SuccessPage = () => {
  
    const isFormSubmitted = localStorage.getItem('isSubmitted') === 'true';

    if (!isFormSubmitted && window.location.pathname === '/success') {

        alert('You must submit the form first before proceeding further!')
 
        return <Navigate to="/" />;
    }

    return (
        <div>

        <div style={{padding : '4px'}}>
        <SuccessComponent1 />
        </div>
        
        <div style={{marginTop: 360, border: '1px solid #131842', width: '40vw', height: 'fit', borderRadius: '10px'}}>
        <SuccessComponent2 />
        </div>

        </div>
    );
};

export default SuccessPage;

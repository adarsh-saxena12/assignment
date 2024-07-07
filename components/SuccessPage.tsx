// import { Navigate } from "react-router-dom";
// import SuccessComponent1 from "./SuccessComponent1";
// import SuccessComponent2 from "./SuccessComponent2";

// const SuccessPage = () => {
 
//     // const isFormSubmitted = localStorage.getItem('isSubmitted') === 'true';

//     if (!(localStorage.getItem('isSubmitted') === 'true') && window.location.pathname === '/success') {
   
//         alert('You must submit the form first before proceeding further!');

//         return (
//         <Navigate to="/" replace={true}/>
//     );
        
//     }

//     return (
//         <div>

//         <div style={{padding : '4px'}}>
//         <SuccessComponent1 />
//         </div>
        
//         <div style={{marginTop: 360, border: '1px solid #131842', width: '40vw', height: 'fit', borderRadius: '10px'}}>
//         <SuccessComponent2 />
//         </div>

//         </div>
//     );
// };

// export default SuccessPage;

import { Navigate } from "react-router-dom";
import SuccessComponent1 from "./SuccessComponent1";
import SuccessComponent2 from "./SuccessComponent2";

const SuccessPage = () => {

    if (!localStorage.getItem('isSubmitted') && window.location.pathname === '/success') {

        alert('You must submit the form first before proceeding further!');

        return <Navigate to="/" replace={true} />;;
    }

    return (
        <div>
            <div style={{ padding: '4px' }}>
                <h1 style={{ backgroundColor : '#478CCF', display: 'inline-block', borderRadius: '6px', padding: 10}}>JSON Placeholder Data</h1>
                <SuccessComponent1 />
            </div>

            <div style={{ marginTop: 360, border: '1px solid #131842', width: '40vw', height: 'fit', borderRadius: '10px' }}>
  
                <SuccessComponent2 />
            </div>
        </div>
    );
};

export default SuccessPage;


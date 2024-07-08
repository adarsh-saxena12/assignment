import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SuccessComponent1 from "./SuccessComponent1";
import SuccessComponent2 from "./SuccessComponent2";
import { Snackbar, Alert } from '@mui/material';

const SuccessPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {

        const formSubmitted = localStorage.getItem('isSubmitted') === 'true';
        setIsFormSubmitted(formSubmitted);

        if (!formSubmitted && location.pathname === '/success') {

            setShowAlert(true);

            const timer = setTimeout(() => {
                navigate('/', { replace: true });
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [location, navigate]);

    if (!isFormSubmitted && location.pathname === '/success') {

        return (
             <div>
                 {showAlert && (
                         <Snackbar
                             open={showAlert}
                             anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                             autoHideDuration={4000}
                             onClose={() => setShowAlert(false)}
                         >
                             <Alert variant="filled" severity="warning" sx={{ width: '100%' }}>
                                 You must submit the form first before proceeding further!
                             </Alert>
                         </Snackbar>
                     )}
             </div>
    );
    }

    return (
        <div>
            <div style={{ padding: '4px' }}>
                <SuccessComponent1 />
            </div>
            <div style={{ marginTop: 360, border: '1px solid #131842', width: '40vw', height: 'fit', borderRadius: '10px' }}>
                <SuccessComponent2 />
            </div>
        </div>
    );
};

export default SuccessPage;


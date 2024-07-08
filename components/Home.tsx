import { Link } from 'react-router-dom';
import FormPage from './FormPage';
import Button from '@mui/material/Button';

const Home = () => {
    return (
        <div>
            <Link to="/success" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                    Next Page
                </Button>
            </Link>
            <FormPage />
        </div>
    );
};

export default Home;

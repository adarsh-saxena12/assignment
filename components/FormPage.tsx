import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

interface FormData {
    name: string;
    phone: string;
    email: string;
}

const FormPage = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }

    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        localStorage.setItem('formData', JSON.stringify(formData));
        localStorage.setItem('isSubmitted', 'true');

        navigate('/success');
        
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                width: '400px',
                margin: 'auto',
                padding: 6,
                border: '1px solid #3FA2F6',
                borderRadius: '14px',
                
            }}
        >

            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                required
            />
            <TextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                required
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>

        </Box>
    );
};

export default FormPage;

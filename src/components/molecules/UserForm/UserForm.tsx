import { useFormik } from 'formik';
import { User } from '../../../types/models/User.model';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';

interface UserProps {
  user: User;
  submitActionHandler: (values: User) => void;
}

const UserForm = ({ user, submitActionHandler }: UserProps) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: user.id,
      lastName: user ? user.lastName : '',
      firstName: user ? user.firstName : '',
      email: user ? user.email : '',
      password: user ? user.password : '',
      roles: user ? user.roles : [],
    },
    validationSchema: object({
      firstName: string().required().min(2).max(50),
      lastName: string().required().min(2).max(50),
      email: string().required().email(),
    }),
    onSubmit: (values: User) => {
      submitActionHandler(values);
      navigate(-1);
    },
    enableReinitialize: true,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ paddingTop: '15px' }}>
          <TextField
            id='firstName'
            label='Firstname'
            variant='outlined'
            sx={{ paddingRight: '10px' }}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.firstName && formik.errors.firstName)}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
          ) : null}
          <TextField
            id='lastName'
            label='Lastname'
            variant='outlined'
            sx={{ paddingRight: '10px' }}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.lastName && formik.errors.lastName)}
            value={formik.values.lastName}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
          ) : null}
          <TextField
            id='email'
            label='E-Mail'
            variant='outlined'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.email && formik.errors.email)}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
        </Box>
        <div>
          <Button
            /*component="button"*/
            sx={{ marginTop: '15px', marginRight: '10px' }}
            variant='contained'
            color='success'
            type='submit'
            disabled={!(formik.dirty && formik.isValid)}
            onClick={() => formik.handleSubmit}
          >
            {user.id && 'Save'}
            {!user.id && 'Add'}
          </Button>
          <Button
            sx={{ marginTop: '15px' }}
            variant='contained'
            color='error'
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default UserForm;

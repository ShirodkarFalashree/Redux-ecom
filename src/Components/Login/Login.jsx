import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { login } from '../../features/slices/AuthSlice';

function Login() {
  const initialState = {
    name: "",
    password: "",
    image: ""
  };

  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleLogin = () => {
    dispatch(login(values));
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 md:flex-row'>
      <Card className="w-full max-w-md m-4">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Name" size="lg" type='text' name='name' value={values.name} onChange={onChange} />
          <Input label="Password" size="lg" type='password' name='password' value={values.password} onChange={onChange} />
          <Input label="Image URL" size="lg" type='text' name='image' value={values.image} onChange={onChange} />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={handleLogin}>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Image is optional
          </Typography>
        </CardFooter>
      </Card>
      <div className='bg-white p-6 m-4 shadow-md rounded-md max-w-md'>
        <Typography variant="h5" className="mb-4">Password Requirements:</Typography>
        <ul className='list-disc pl-4'>
          <li>Contains at least one digit: <code>(?=.*[0-9])</code></li>
          <li>Contains at least one letter: <code>(?=.*[a-zA-Z])</code></li>
          <li>Contains at least one special character: <code>(?=.*[!@#$%^&*])</code></li>
          <li>Length between 4 and 10 characters: <code>[a-zA-Z0-9!@#$%^&*]</code></li>
        </ul>
      </div>
    </div>
  );
}

export default Login;

import { Helmet} from 'react-helmet-async';// для додавання метатегу title 
import { LoginForm } from 'components/LoginForm/LoginForm';
//import RegisterForm from 'components/RegisterForm/RegisterForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}

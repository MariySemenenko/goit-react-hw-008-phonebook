import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Helmet} from 'react-helmet-async';//встановлюю заголовки сторінки

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}

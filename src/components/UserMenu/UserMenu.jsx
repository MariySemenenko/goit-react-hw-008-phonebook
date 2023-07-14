import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Button } from '../RegisterForm/RegisterForm.styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
// console.log(user)
  return (
    <div>
      <p style={{ fontSize: '20px', color: 'lightslategrey' }}>Welcome, {user.name}</p>
      
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};

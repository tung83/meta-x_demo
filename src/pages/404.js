import PrimaryButton from '../components/Button/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <PrimaryButton
      variant="primary"
      onClick={() => navigate('/')}
      sx={{ margin: '50px 20px 50px 50px' }}
    >
      Back Home
    </PrimaryButton>
  );
};

export default NotFoundPage;

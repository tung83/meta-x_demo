import MetaButton from '../components/Buttton';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <MetaButton variant="primary" onClick={() => navigate('/')}>
      Back Home
    </MetaButton>
  );
};

export default NotFoundPage;
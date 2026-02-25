import { useNavigate } from 'react-router-dom';
import './BackHeader.css';

interface BackHeaderProps {
  title: string;
  backTo?: string;
  showSearch?: boolean;
}

function BackHeader({ title, backTo, showSearch = false }: BackHeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <header className="back-header">
      <button className="back-button" onClick={handleBack}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <h1 className="back-header-title">{title}</h1>
      {showSearch && (
        <button className="search-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      )}
    </header>
  );
}

export default BackHeader;

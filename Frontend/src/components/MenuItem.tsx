import type { ReactNode } from 'react';
import './MenuItem.css';

interface MenuItemProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  onClick: () => void;
}

function MenuItem({ icon, title, subtitle, onClick }: MenuItemProps) {
  return (
    <button className="menu-item" onClick={onClick}>
      <div className="menu-item-left">
        <div className="menu-icon">
          {icon}
        </div>
        <div className="menu-text">
          <span className="menu-title">{title}</span>
          {subtitle && <span className="menu-subtitle">{subtitle}</span>}
        </div>
      </div>
      <svg className="chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  );
}

export default MenuItem;

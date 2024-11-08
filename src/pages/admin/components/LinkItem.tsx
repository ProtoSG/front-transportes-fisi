import { Link, useLocation } from "react-router-dom";

interface LinkItemProps {
  link: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export function LinkItem({ link, icon, onClick }: LinkItemProps) {

  const location = useLocation()
  const isActive = location.pathname === link

  return (
    <Link
      onClick={onClick}
      to={link}
      className={`flex items-center  justify-center size-14 rounded-xl hover:bg-primary-500 transition-colors ${isActive ? 'bg-primary-500' : ''}`}
    >
      {icon}
    </Link >
  )
}

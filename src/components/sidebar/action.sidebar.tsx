import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SidebarActionProps {
  icon: any;
  text: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}
const SidebarAction: React.FC<SidebarActionProps> = ({
  icon,
  text,
  isActive = false,
  className = "",
  onClick = () => {},
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex flex-row   text-white text-lg font-light items-center py-4 px-8  hover:bg-gray-200 hover:bg-opacity-50 rounded ${className}`}
    >
      <FontAwesomeIcon icon={icon} className="pr-2" />
      <p>{text}</p>
    </button>
  );
};

export default SidebarAction;

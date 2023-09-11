import Link from "next/link";
import { IconType } from "react-icons";
import { text } from "stream/consumers";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  label: String;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex flex-row h-auto iteams-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1",
        active && "text-white"
      )}
    >
      <Icon size={26}></Icon>
      <p className="turncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;

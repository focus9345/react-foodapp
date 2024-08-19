export type NavItem = {
    title: string;
    path: string;
    color: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: NavItem[];
}
import { StaticImageData } from 'next/image';

export type NavItem = {
    title: string;
    path: string;
    color: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: NavItem[];
}

export type MenuItemType = {
    id: string;
    title: string;
    slug: string;
    image: StaticImageData;
    summary: string;
    instructions: string;
    creator: string;
    creator_email: string;
    date: string;
    calories: number;
    servings: number;
}
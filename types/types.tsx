

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
    slug?: string | undefined;
    menuSlug?: string | undefined;
    image: string;
    summary: string;
    instructions: string;
    creator: string;
    creator_email: string;
    date: string;
    calories: number;
    servings: number;
}
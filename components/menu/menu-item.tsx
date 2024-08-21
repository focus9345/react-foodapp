import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { MenuItemType } from "@/types/types";
import React from 'react';
import menuImage from "@/assets/menu/pexels-bananamade-2762942.jpg";

const MenuItem: React.FC<MenuItemType> = (props) => {
    return (

            <Card className="max-w-[400px] p-5 dark:bg-slate-800 border-1 border-zinc-500">
                <CardHeader className="flex gap-3">
                    <Image
                        alt={"Recipe Name"}
                        height={80}
                        radius="sm"
                        src={menuImage.src}
                        width={80}
                        isZoomed
                    />
                    <div className="flex flex-col">
                        <p className="text-md">Recipe Name</p>
                        <p className="text-small text-default-500">Author Name</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Description Here</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button>
                    <Link
                        isExternal
                        showAnchorIcon
                        href="/slug"
                    >
                        Full Recipe
                    </Link>
                    </Button>
                </CardFooter>
            </Card>
    );
}
export default MenuItem;
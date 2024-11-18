import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { MenuItemType } from "@/types/types";
import React from 'react';
import Scroll from "@/components/layout/scrolltrigger";
import defaultImage from "@/public/menu/default.jpg"


interface MenuItem {
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
}

const MenuItem: React.FC<MenuItem> = ({title, slug, image, summary, creator}) => {

    return (
            <Scroll>
            <Card className="max-w-[400px] p-4 dark:bg-coolGrey-800 border-1 border-zinc-500">
                <CardHeader className="flex flex-col">
                    <Image
                        alt={title}
                        height={310}
                        radius="sm"
                        src={image}
                        fallbackSrc={defaultImage.src}
                        width={310}
                        isZoomed
                    />
                    <div className="w-full">
                        <p className="text-md text-yellow-600 font-semibold pt-1">{title}</p>
                        <p className="text-xs text-cyan-600 font-light italic">by {creator}</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody className="text-zinc-300 text-sm font-light min-h-24">
                    <p>{summary}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button className="bg-yellow-700 hover:bg-amber-800 transition ease-in-out duration-700">
                    <Link className="text-zinc-100 font-semibold"
                        showAnchorIcon
                        href={`/menu/${slug}`}
                    >
                        Full Recipe
                    </Link>
                    </Button>
                </CardFooter>
            </Card>
            </Scroll>
    );
}
export default MenuItem;
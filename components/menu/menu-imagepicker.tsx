'use client'
import { Input, Button, Image } from "@nextui-org/react";
import { useRef, useState } from "react";

interface MenuImageInput {
    name: string;
}

const MenuImagePicker: React.FC<MenuImageInput> = ({ name }) => {
    const imageInput = useRef<HTMLInputElement>(null);
    const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(null);

    // hiding the input box to use a button for picking an image
    function handlePickClick() {
        if (imageInput.current) {
            imageInput.current.click();
        }
    }

    // display the image before final uploading to the db
    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);

    }

    return (
        <>
            <div className="grid md:grid-cols-2 md:gap-6 mb-2 place-content-evenly">
                <div className="border border-zinc-600 md:min-h-10 rounded-sm">
                    {!pickedImage && <p className="text-zinc-400 text-sm">No image picked.</p>}
                    {pickedImage && <Image src={pickedImage as string} alt="Image picked by user" width="150" />}
                </div>

                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-2 gap-4">
                    <Input isRequired type="file" label={name} id="image" accept="image/png, image/jpeg" name={name} className="invisible" ref={imageInput} onChange={handleImageChange} />

                    <Button type="button" color="secondary" onClick={handlePickClick} className="px-9">Pick an Image</Button>
                </div>
            </div>
        </>
    );
}
export default MenuImagePicker;
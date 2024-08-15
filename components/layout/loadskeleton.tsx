import React from "react";
import {Spinner} from "@nextui-org/spinner";

export default function LoadingSkeleton() {
    return (
        <Spinner label="Loading..." color="warning" />
    )
}
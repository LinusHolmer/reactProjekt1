import { useState } from "react";

export function useColor(initialColor: string = "blue") {
    const [color, setColor] = useState(initialColor);

    const changeColor = () => {
        console.log("Changing color");
        setColor((prevColor) =>
            prevColor === "blue" ? "red" : prevColor === "red" ? "green" : "blue"
        );
    };

    return { color, changeColor };
}

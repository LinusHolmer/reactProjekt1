import { CustomButton} from "~/components/CustomButton";
import { useColor} from "~/components/ColorSetter";

export function Welcome() {
    const { color, changeColor } = useColor("blue");

    return (
        <>
            <div className="flexContainer"
            style ={{
                backgroundColor: color
            }}>
                <CustomButton buttonText={"Byt färg"} onClick={changeColor} />
            </div>

        </>
    );
}


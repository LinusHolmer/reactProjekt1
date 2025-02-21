import { CustomButton} from "~/components/CustomButton";
import { useColor} from "~/components/ColorSetter";
import { greet } from '~/components/Greeting';
import type { Person } from '~/components/Person';
import {Link} from "react-router";

export function Welcome() {
    const { color, changeColor } = useColor("blue");
    const person: Person = { name: "Linus", age: 19};
    console.log(greet(person));

    return (
        <>
            <Link to="/about">About page</Link>
            <div className="flexContainer"
            style ={{
                backgroundColor: color
            }}>
                <CustomButton buttonText={"Byt färg"} onClick={changeColor} />
            </div>

        </>

    );
}


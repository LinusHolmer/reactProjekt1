import styles from "./CustomButton.module.css"
import type {JSX} from "react";

interface CustomButton {
    buttonText: string;
    onClick: () => void;
}

export function CustomButton({ buttonText, onClick }: CustomButton): JSX.Element {
    return (
        <button className={styles.btn} onClick={onClick}>
            <p className={styles.btnTextColor}>{buttonText}</p>
        </button>
    );
}

import styles from "./CustomButton.module.css"

interface CustomButton {
    buttonText: string;
    onClick: () => void;
}

export function CustomButton({ buttonText, onClick }: CustomButton) {
    return (
        <>
            <div>
                <button
                    className={`${styles.btn}`}
                    onClick={onClick}
                >
                    <p className={styles.btnTextColor}>{buttonText}</p>
                </button>
            </div>
        </>
    )
}
import "./styles.css";

type Props = {
    text: string;
    type?: "button" | "submit"
}

export default function Button({text} : Props) {

    return (
        <button className="button">
            {text}
        </button>
    )
}

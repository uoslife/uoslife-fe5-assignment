import { useLevel } from "../../../hook/use-level";
import Game from "../components/Game";

export default function GamePage() {
    const { level } = useLevel();

    return(
        <Game level={level} />
    );
}
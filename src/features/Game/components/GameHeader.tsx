import Header from "../../../components/layout/Header";
import LevelSelector from "./LevelSelector";
import Timer from "./Timer";

export default function GameHeader() {
    return(
        <Header>
            <LevelSelector />
            <Timer />
        </Header>
    )
}
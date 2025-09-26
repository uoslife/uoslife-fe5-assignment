import GameHeader from "../features/Game/components/GameHeader";
import { Outlet } from "react-router-dom";
import { LevelProvider } from "../hook/use-level";

export default function GameLayout() {
    return (
        <LevelProvider>
            <GameHeader />
            <Outlet />
        </LevelProvider>
    );
}

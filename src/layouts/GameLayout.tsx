import GameHeader from "../features/Game/components/GameHeader";
import { Outlet } from "react-router-dom";

export default function GameLayout() {
    return (
        <>
            <GameHeader />
            <Outlet />
        </>
    );
}

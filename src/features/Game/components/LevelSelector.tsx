import DropDown from "../../../components/atom/drop-down";
import { LEVEL_OPTIONS } from '../utils/options';
import { useLevel } from "../../../hook/use-level";

export default function LevelSelector() {
    const { setLevel } = useLevel();
    return(
        <div>
            <DropDown 
                options={LEVEL_OPTIONS}
                onSelect={setLevel}
            />
        </div>
    )
}
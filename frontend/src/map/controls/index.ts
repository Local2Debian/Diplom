import { Orientation, Position } from "../../types/interfaces/controls"
import ListSearch from "./ListSearch"

export default async () => {
    await ymaps3.ready

    const { YMapControls } = ymaps3

    return [
        new YMapControls({
            position: Position.TOP_RIGHT,
            orientation: Orientation.HORIZONTAL
        }).addChild(await ListSearch())
    ]
}
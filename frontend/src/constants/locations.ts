import type { YMapProps } from "@yandex/ymaps3-types";

export const LOCATIONS: { [key: string]: YMapProps } = {
    KOSTROMA: {
        location: {
            center: [40.926894, 57.767918],
            zoom: 12
        },
        behaviors: ['drag', 'scrollZoom'],
        mode:'vector',
        zoomRange: {
            min: 12,
            max: Infinity,
        },
        zoomStrategy: 'zoomToPointer',
        restrictMapArea: [[40.531073, 57.643834], [41.241367, 57.942011]]
    }
}
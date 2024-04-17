import { YMapEntity, YMapProps } from '@yandex/ymaps3-types';
import marks from '../constants/marks';
import controls from './controls'
import createGradientColors from '../plugins/gradientGeneration';
import colors from '../constants/colors';

export async function init(element: HTMLElement | null, props: YMapProps, children?: YMapEntity<unknown, {}>[] | undefined) {
    if (!element) return
    
    await ymaps3.ready
    const controlsList = await controls()
    
    const { YMap, YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer, YMapMarker } = ymaps3;
  
    const gradientValues = createGradientColors(colors, 5);

    const map = new YMap(element, props, children)
        .addChild(new YMapDefaultSchemeLayer({}))
        .addChild(new YMapDefaultFeaturesLayer({}))

    controlsList.forEach((control) => map.addChild(control))
    
    marks.forEach((mark) => {

        const markerElement = document.createElement('div', { id: 'marker', styles: {
            background: `${gradientValues[mark.x_scaled]}`
        } as CSSStyleDeclaration });

        const marker = new YMapMarker(
            {
                coordinates: [mark.coord_X, mark.coord_Y]
            },
            markerElement
        );

        map.addChild(marker)
    })

    return map
}

export default {
    init
}
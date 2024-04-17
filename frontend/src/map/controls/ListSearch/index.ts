import template from "./template"

export default async () => {
    await ymaps3.ready

    const { YMapControl } = ymaps3

    class YMapListSearchControl extends YMapControl {
        protected _createDom(): HTMLElement {
            return template
        }
    }

    return new YMapListSearchControl()
}
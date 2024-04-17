
export default (() => {
    // Берем оригинальный метод createElement
    const originalCreateElement = Document.prototype.createElement

    // Расширяем метод createElement
    Document.prototype.createElement = function (tagName: keyof HTMLElementTagNameMap, options?: ElementCreationOptions): HTMLElement {
        // Создаем узел по оригинальлному методу с текущим контекстом
        const elem = originalCreateElement.call(this, tagName, options)

        // проверяем наличие стилей в опциях
        if (options?.styles) {
            // добавляем стили
            for (const prop in options.styles) {
                elem.style[prop] = options.styles[prop]
            }

            // очищаем опции
            delete options.styles
        }

        // проверяем наличие классов
        if (options?.classList) {
            // добавляем классы
            elem.classList.add(...options.classList)

            // очищаем опции
            delete options.classList
        }

        // проверям наличие датасетов
        if (options?.dataset) {
            // применяем датасеты
            for (const setOption in options.dataset) {
                elem.dataset[setOption] = options.dataset[setOption]
            }

            // очищаем опции
            delete options.dataset
        }

        // проверям наличие потомков
        if (options?.childs) {
            // аппендим потомков в узел
            elem.append(...options.childs)

            // очищаем опции
            delete options.childs
        }

        // оставшиеся опции
        for (const option in options) {
            // проверяем доступность опций в созданном элементе и добавляем
            if (option in elem) {
                (elem as any)[option] = options[option]
            }
        }

        return elem
    }
})()
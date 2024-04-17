
import marks from '../../../constants/marks'

/* VARIABLES */
let timeoutId: NodeJS.Timeout;

/* FUNCTIONS */
const inputDebounce = (id: NodeJS.Timeout, callback: () => void, delay: number) => {
    if (id) { clearTimeout(id); }
    return setTimeout(callback, delay);
}

function renderList(marksList: any[] = marks) {
    return marksList.map((mark) => {
        return document.createElement('li',{
                childs: [
                    document.createElement('span', { childs: [ document.createTextNode(mark.title) ] })
                ]
            }
        )
    })
}

function onSearchInput(e: any) {
    const listContainer = document.querySelector('#marks-list');
    timeoutId = inputDebounce(timeoutId, () => {
        if (!listContainer) return;
        listContainer.innerHTML = ''
        listContainer.append(...renderList(filterMarks(e.target.value)))
    }, 300);
}

function filterMarks(searchString: string) {
    const filtered = marks.filter(mark => mark.title.toLowerCase().includes(searchString.toLowerCase()))
    return (filtered?.length && filtered) || marks
}

/* TEMPLATE */
export default document.createElement('div', {
    id: 'search',
    classList: ['container'],
    childs: [
        // document.createElement('button', { 
        //     textContent: '>', 
        //     styles: {
        //         position: 'absolute',
        //         right: '100%'
        //     } as CSSStyleDeclaration,
        //     onclick: (e: any) => {
        //         e.target 
        //     }
        // }),
        document.createElement('div', {
            classList: ['search_input'],
            childs: [
                document.createElement('input', { 
                    placeholder: 'Введите запрос',
                    oninput: onSearchInput
                })
            ]
        }),
        document.createElement('ul', {
            id: 'marks-list',
            childs: renderList()
        })
    ]
})
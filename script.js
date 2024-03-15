
const arr = [1, 2, [3, 4, 5], 6, 7, [8, 9, 6], 8]
function generateList(items) {
    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        if (!Array.isArray(item)) {
            li.innerText = item;
        } else {
            li.appendChild(generateList(item, ul));
        }
        ul.appendChild(li);
    })
    return ul;
}
document.body.appendChild(generateList(arr));
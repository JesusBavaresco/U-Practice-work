const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate animi hic facere omnis. Sequi suscipit quisquam, esse eligendi provident fuga velit laudantium. Soluta, cumque? Consequatur consectetur voluptatem id iste!';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('Favorite color?');

    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(event){
        event.stopPropagation();
        const listContent = prompt('Change your color');
        this.textContent = listContent;
    };
}
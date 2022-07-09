const folderStructure = [
  {
    title: 'Folder 1',
    type: 'folder',
    expand: true,
    children: [
      {
        title: 'Folder 1-2',
        type: 'folder',
        expand: true,
        children: [
          {
            title: 'File 1-2-1',
            type: 'file',
          },
          {
            title: 'File 1-2-2',
            type: 'file',
          },
        ],
      },
      {
        title: 'File 1-2',
        type: 'file',
      },
    ],
  },
];
// const container = document.getElementById(container);

console.log(folderStructure);
function expandCollapse(ele, expand) {
  if (expand) {
    ele.nextSibling.style.display = 'none';
  } else {
    ele.nextSibling.style.display = 'block';
  }
}

function createFolderStructure(folderStructure) {
  let ul = document.createElement('ul');
  folderStructure.forEach((item) => {
    let li = document.createElement('li');
    li.innerText = item.title;
    ul.append(li);
    if (item.children) {
      li.addEventListener('click', () => {
        expandCollapse(li, item.expand);
        item.expand = !item.expand;
      });
      ul.append(createFolderStructure(item.children));
    }
  });
  return ul;
}
const folders = createFolderStructure(folderStructure);
container.append(folders);

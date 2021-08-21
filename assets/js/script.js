const categories = document.querySelectorAll('.category')

const tabSelect = (event) => {
    event.preventDefault();
    const tabSelected = event.target

    // remove the active class from the current active
    document.querySelector('.active-tab').classList.remove('active-tab');

    // add the active-tab class to the tab clicked
    tabSelected.classList.add('active-tab');

    // hide all active tabs
    categories.forEach(category => category.classList.add('hide'))

    // convert the text of the tab button into a category id
    const tabToShowId = tabSelected.textContent.split(' ')[0].toLowerCase();

    // remove the hide tag from the corresponding category
    document.querySelector(`#${tabToShowId}`).classList.remove('hide');
}

document.querySelector('#tabs').addEventListener('click', tabSelect);
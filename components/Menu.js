// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
function menuMaker(array){

const menu = document.createElement('div') // instantiate
const list = document.createElement('ul')

menu.classList.add('menu') // give class to menu

menu.appendChild(list) //append list to menu

array.forEach(item => {
const listItem = document.createElement('li')
listItem.textContent = item;
list.appendChild(listItem)
 // loop over array passed in as prop and make each element a list item and append it to the list
})

const button = document.querySelector('.menu-button')
button.addEventListener('click', () => {
  menu.classList.toggle('menu--open')
})

return menu
}

const header = document.querySelector('.header')
const newMenu = menuMaker(menuItems)
header.appendChild(newMenu)
// got the cant append child of null error a lot , the issue was whether or not i was appending ro something that was actually on the html, also another mistake i ran into was when i was using the add classlist i would put a period in front of my classes as well which was not needed and would make it not work properly
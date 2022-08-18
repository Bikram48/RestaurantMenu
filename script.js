const items = [
    {
        name: 'Buttermilk Pancakes',
        price: 15.99,
        description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
        category: 'breakfast',
        img: 'item-1'
    },
    {
        name: 'Buttermilk Pancakes',
        price: 15.99,
        description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
        category: 'lunch',
        img: 'item-1'
    },
    {
        name: 'Buttermilk Pancakes',
        price: 15.99,
        description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
        category: 'breakfast',
        img: 'item-2'
    },
    {
        name: 'Buttermilk Pancakes',
        price: 15.99,
        description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
        category: 'dinner',
        img: 'item-3'
    },
    {
        name: 'Buttermilk Pancakes',
        price: 15.99,
        description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
        category: 'breakfast',
        img: 'item-4'
    },
    {
        name: 'Buttermilk Pancakes',
        price: 15.99,
        description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
        category: 'lunch',
        img: 'item-5'
    },
    {
        name: 'Buttermilk Pancakes',
        price: 15.99,
        description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
        category: 'shakes',
        img: 'item-6'
    },
    {
        name: 'Buttermilk Pancakes',
        price: 15.99,
        description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
        category: 'lunch',
        img: 'item-7'
    },
];

const itemSelector = document.getElementById( 'item-container' );

window.addEventListener( "DOMContentLoaded", () => {

    const itemMarkup = items.map( item => {
        return `<div class="item">
           <img src="images/${item.img}.jpeg"/>
           <div class="content">
               <h2>${item.name}</h2>
               <p>${item.price}</p>
               <p>${item.description}</p>
           </div>
        </div>`;
    });

    displayAllItems( itemMarkup );
});

function displayAllItems( itemMarkup ) {

    const allItems = itemMarkup.reduce( ( accumulator, currentItem ) => {
        return accumulator + currentItem;
    } );

    itemSelector.innerHTML = allItems;
}

const items = [
    {
        name: 'Buttermilk Pancakes',
        price: 15.99,
        description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
        category: 'breakfast',
        img: 'item-1'
    },
    {
        name: 'Diner Double',
        price: 13.99,
        description: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
        category: 'shakes',
        img: 'item-8'
    },
    {
        name: 'Godzilla Milkshake',
        price: 6.99,
        description: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
        category: 'breakfast',
        img: 'item-2'
    },
    {
        name: 'Country Delight',
        price: 20.99,
        description: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,',
        category: 'dinner',
        img: 'item-3'
    },
    {
        name: 'Egg Attack',
        price: 22.99,
        description: 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90\'s pop-up',
        category: 'breakfast',
        img: 'item-4'
    },
    {
        name: 'Oreo Dream',
        price: 18.99,
        description: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday',
        category: 'lunch',
        img: 'item-5'
    },
    {
        name: 'Bacon Overflow',
        price: 8.99,
        description: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird',
        category: 'shakes',
        img: 'item-6'
    },
    {
        name: 'American Classic',
        price: 12.99,
        description: 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
        category: 'lunch',
        img: 'item-7'
    },
    {
        name: 'Quarantine Buddy',
        price: 16.99,
        description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
        category: 'dinner',
        img: 'item-9'
    },
    {
        name: 'Steak Dinner',
        price: 39.99,
        description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
        category: 'dinner',
        img: 'item-10'
    },
];

const itemSelector = document.getElementById( 'item-container' );
const categories = document.querySelectorAll( '.cat' );

window.addEventListener( "DOMContentLoaded", () => {
    displayItems( items );
});

const filterItems = () => {

    categories.forEach( ( category ) => {
        category.addEventListener( 'click', ( e ) => {
            e.preventDefault();
            console.log( e.currentTarget.dataset.id );
           let id = e.currentTarget.dataset.id;
           let filteredItems = items.filter( item =>  {
               if( id === item.category ) {
                   return item;
               }

               if( id === 'all' ) {
                   return items;
               }
           });

           displayItems( filteredItems );
        } );
    } );
}

filterItems();

function displayItems( items ) {

    const itemMarkup = items.map( item => {
        return `<div class="item">
           <img src="images/${item.img}.jpeg"/>
           <div class="content">
               <h2>${item.name}</h2>
               <p>$ ${item.price}</p>
               <p>${item.description}</p>
           </div>
        </div>`;
    });

    const allItems = itemMarkup.reduce( ( accumulator, currentItem ) => {
        return accumulator + currentItem;
    } );

    itemSelector.innerHTML = allItems;
}

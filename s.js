const menuData = [
    {
        category: 'pizza',
        name: 'Margherita Pizza',
        description: 'Classic cheese and tomato pizza.',
        price: '$10',
        image: 'margerita.jpg'
    },
    {
        category: 'pizza',
        name: 'Pepperoni Pizza',
        description: 'Pizza with spicy pepperoni slices.',
        price: '$12',
        image: 'pepizza.jpg'
    },
    {
        category: 'pizza',
        name: 'Farm house Pizza',
        description: 'Pizza with spicy pepperoni slices.',
        price: '$12',
        image: 'farmpizza.jpg'


    },
    {
        category: 'pizza',
        name: 'Thik crush',
        description: 'Pizza with thick layer.',
        price: '$17',
        image: 'pizza-1.jpg'
    },
    {
        category: 'pizza',
        name: 'Hot & spicy Pizza',
        description: 'Pizza with spicy pepperoni slices.',
        price: '$12',
        image: 'hotpizza.jpg'

    },
    {
        category: 'cold-drink',
        name: 'Cola',
        description: 'Refreshing cola drink.',
        price: '$2',
        image: 'cola.jpg'
    },
    {
        category: 'cold-drink',
        name: 'Lemonade',
        description: 'Freshly squeezed lemonade.',
        price: '$3',
        image: 'drink-1.jpg'
    },
    {
        category: 'cold-drink',
        name: 'mojito',
        description: 'Freshly squeezed lemonade.',
        price: '$3',
        image: 'drink-7.jpg'
    },
    {
        category: 'cold-drink',
        name: 'Cold Coffee',
        description: 'Freshly squeezed lemonade.',
        price: '$4',
        image: 'drink-4.jpg'
    },

    {
        category: 'garlic-bread',
        name: 'Garlic Bread with panner stuff',
        description: 'Toasted bread with garlic butter and panner stuff.',
        price: '$7',
        image: 'bread-2.jpg'
    },
    {
        category: 'garlic-bread',
        name: 'Garlic Bread ',
        description: 'Toasted bread with garlic butter.',
        price: '$5',
        image: 'bread-1.jpeg'
    },
    {
        category: 'garlic-bread',
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter.',
        price: '$5',
        image: 'bread-3.jpg'
    },
    {
        category: 'choco-lava',
        name: 'Choco Lava Cake',
        description: 'Warm chocolate cake with a gooey center.',
        price: '$6',
        image: 'choco-1.webp'
    },
    {
        category: 'choco-lava',
        name: 'Choco Lava Cake',
        description: 'Warm chocolate cake with a gooey center.',
        price: '$6',
        image: 'choco-2.webp'
    }
];

// Function to display menu items
function displayMenu(items) {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = ''; // Clear existing items

    items.forEach(item => {
        const itemHTML = `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
                <button class="btn btn-outline-danger">Order Now</button>
                
            </div>
        `;
        menuContainer.insertAdjacentHTML('beforeend', itemHTML);
    });
}

// Function to filter menu items
function filterMenu(category) {
    if (category === 'all') {
        displayMenu(menuData); // Show all items
    } else {
        const filteredItems = menuData.filter(item => item.category === category);
        displayMenu(filteredItems); // Show filtered items
    }
}

// Display all items by default when the page loads
window.onload = () => {
    filterMenu('all');
};
//FAQ
window.onload = () => {
    filterMenu('all');
};
const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.faq-question span').forEach(icon => icon.textContent = '+');

        if (!isVisible) {
            answer.style.display = 'block';
            item.querySelector('span').textContent = '-';
        }
    });
});



function openModal() {
    document.getElementById("loginModal").style.display = "flex";
    document.getElementById("wrapper").classList.add("blur");
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("wrapper").classList.remove("blur");
}

// Close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById("loginModal");
    if (event.target == modal) {
        closeModal();
    }
}

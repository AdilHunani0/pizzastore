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
        image: 'lemonade.jpg'
    },
    {
        category: 'garlic-bread',
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter.',
        price: '$5',
        image: 'garlic-bread.jpg'
    },
    {
        category: 'choco-lava',
        name: 'Choco Lava Cake',
        description: 'Warm chocolate cake with a gooey center.',
        price: '$6',
        image: 'choco-lava.jpg'
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
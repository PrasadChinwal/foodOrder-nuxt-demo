export const state = () => ({
    products: [
        {id: 1, tag: 'beverage', text: 'Urn of hot water', description: 'Lipton, herbal teas, brewed Arabica coffee regular or decaffeinated', price: 3.00, image: 'https://images.unsplash.com/photo-1487168791452-17942644e6f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',},
        {id: 2, tag: 'beverage', text: 'Hot Chocolate', description: 'Lipton, herbal teas, brewed Arabica coffee regular or decaffeinated', price: 2.50, image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',},
        {id: 3, tag: 'beverage', text: 'Bottle of juice(10 oz.)', description: 'Lipton, herbal teas, brewed Arabica coffee regular or decaffeinated', price: 5.00, image: 'https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',},
        {id: 4, tag: 'special', text: 'Grilled Chicken Breast', description: 'Barbecue chicken consists of chicken parts or entire chickens that are barbecued, grilled or smoked.', price: 6.99, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'},
        {id: 5, tag: 'special', text: 'Balsamic Chicken', description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.', price: 8.99, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'},
    ]
});

export const mutations = () => ({
    setProducts(state, products) {
        //Update Card
        state.products = products;
    }
});

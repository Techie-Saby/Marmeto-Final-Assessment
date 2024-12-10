document.addEventListener('DOMContentLoaded', () => {
    const cartDrawer = document.querySelector('.cart-drawer');
    const cartTrigger = document.querySelector('.cart-trigger');
    const closeCart = document.querySelector('.close-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const recommendationsContainer = document.querySelector('.recommendation-items');
    const itemsCountElement = document.querySelector('.items-count');
    const cartTotalElement = document.querySelector('.cart-total');
    const finalTotalElement = document.querySelector('.final-total');
    const discountAmountElement = document.querySelector('.discount-amount');

    let cartItems = [];
    let recommendedProducts = [];


    const formatPrice = (price) => `Rs.${(price / 100).toFixed(2)}/-`;


    const openCartDrawer = () => cartDrawer?.classList.add('open');
    const closeCartDrawer = () => cartDrawer?.classList.remove('open');


    const fetchProducts = async () => {
        try {
            const response = await fetch('https://mocki.io/v1/539c3a78-25e4-4fc6-8b35-6f1550d2b7c6');
            const data = await response.json();


            cartItems = data.map(product => ({ ...product, quantity: 1 }));
            recommendedProducts = data;

            renderCartItems();
            renderRecommendations();
            updateCartSummary();
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };


    const renderCartItems = () => {
        if (!cartItemsContainer) return;

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        cartItemsContainer.innerHTML = cartItems.map(item => 
            `<div class="cart-item" data-id="${item.id}">
                <img src="${item.featured_image.replace('//', 'https://')}" alt="${item.title}" class="item-image">
                <div class="item-container">
                    <div class="item-details">
                        <h3 class="item-title">${item.title}</h3>
                        <p class="item-price">${formatPrice(item.price)}</p>
                    </div>
                    <div class="item-details">
                        <button class="remove-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                        </button>
                        <div class="quantity-control">
                            <button class="quantity-btn decrease">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                                </svg>
                            </button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn increase">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`
        ).join('');
    };


    const renderRecommendations = () => {
        if (!recommendationsContainer) return;

        if (recommendedProducts.length === 0) {
            recommendationsContainer.innerHTML = '<p>No recommendations available.</p>';
            return;
        }

        recommendationsContainer.innerHTML = recommendedProducts.map(product => 
            `<div class="recommendation-item cart-item" data-id="${product.id}">
                <img src="${product.featured_image.replace('//', 'https://')}" alt="${product.title}" class="item-image">
                <div class="recommend-item-container">
                    <div class="recommend-item-details">
                        <h3 class="item-title">${product.title}</h3>
                        <p class="item-price">${formatPrice(product.price)}</p>
                    </div>
                    <div class="recommend-item-details-cart">
                        <button class="add-to-cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M6.01 16.6359L4.141 4.49993H3C2.73478 4.49993 2.48043 4.39457 2.29289 4.20703C2.10536 4.0195 2 3.76514 2 3.49993C2 3.23471 2.10536 2.98035 2.29289 2.79282C2.48043 2.60528 2.73478 2.49993 3 2.49993H4.985C5.22624 2.49547 5.46086 2.57901 5.645 2.73493C5.834 2.89386 5.9573 3.11729 5.991 3.36193L6.319 5.49993H14V7.49993H6.627L7.857 15.4999H17.256L18.756 10.4999H20.844L18.958 16.7869C18.8963 16.993 18.7697 17.1737 18.5971 17.3021C18.4245 17.4306 18.2151 17.4999 18 17.4999H7.016C6.76792 17.5045 6.52711 17.416 6.341 17.2519C6.15961 17.0934 6.04169 16.8746 6.009 16.6359H6.01ZM10 20.4999C10 21.0304 9.78929 21.5391 9.41421 21.9141C9.03914 22.2892 8.53043 22.4999 8 22.4999C7.46957 22.4999 6.96086 22.2892 6.58579 21.9141C6.21071 21.5391 6 21.0304 6 20.4999C6 19.9695 6.21071 19.4608 6.58579 19.0857C6.96086 18.7106 7.46957 18.4999 8 18.4999C8.53043 18.4999 9.03914 18.7106 9.41421 19.0857C9.78929 19.4608 10 19.9695 10 20.4999ZM19 20.4999C19 21.0304 18.7893 21.5391 18.4142 21.9141C18.0391 22.2892 17.5304 22.4999 17 22.4999C16.4696 22.4999 15.9609 22.2892 15.5858 21.9141C15.2107 21.5391 15 21.0304 15 20.4999C15 19.9695 15.2107 19.4608 15.5858 19.0857C15.9609 18.7106 16.4696 18.4999 17 18.4999C17.5304 18.4999 18.0391 18.7106 18.4142 19.0857C18.7893 19.4608 19 19.9695 19 20.4999ZM19 2.49993C19.2652 2.49993 19.5196 2.60528 19.7071 2.79282C19.8946 2.98035 20 3.23471 20 3.49993V4.49993H21C21.2652 4.49993 21.5196 4.60528 21.7071 4.79282C21.8946 4.98036 22 5.23471 22 5.49993C22 5.76514 21.8946 6.0195 21.7071 6.20703C21.5196 6.39457 21.2652 6.49993 21 6.49993H20V7.49993C20 7.76514 19.8946 8.0195 19.7071 8.20703C19.5196 8.39457 19.2652 8.49993 19 8.49993C18.7348 8.49993 18.4804 8.39457 18.2929 8.20703C18.1054 8.0195 18 7.76514 18 7.49993V6.49993H17C16.7348 6.49993 16.4804 6.39457 16.2929 6.20703C16.1054 6.0195 16 5.76514 16 5.49993C16 5.23471 16.1054 4.98036 16.2929 4.79282C16.4804 4.60528 16.7348 4.49993 17 4.49993H18V3.49993C18 3.23471 18.1054 2.98035 18.2929 2.79282C18.4804 2.60528 18.7348 2.49993 19 2.49993Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>`
        ).join('');

        attachRecommendationListeners();
    };

 
    const updateCartSummary = () => {
        const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discount = calculateDiscount(subtotal);
        const total = Math.max(0, subtotal - discount);

        if (itemsCountElement) itemsCountElement.textContent = `${itemCount} Items`;
        if (cartTotalElement) cartTotalElement.textContent = formatPrice(subtotal);
        if (discountAmountElement) discountAmountElement.textContent = formatPrice(discount);
        if (finalTotalElement) finalTotalElement.textContent = formatPrice(total);
        if (cartTrigger) cartTrigger.textContent = `Your Bag (${itemCount})`;
    };


    const calculateDiscount = (subtotal) => {
        const fixedDiscount = 50000;
        return subtotal > 100000 ? fixedDiscount : 0;
    };

    
    const attachCartListeners = () => {
        
        cartItemsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.quantity-btn');
            if (!btn) return;

            const itemElement = btn.closest('.cart-item');
            const itemId = itemElement.dataset.id;
            const isIncrease = btn.classList.contains('increase');

            cartItems = cartItems.map(item => {
                if (item.id.toString() === itemId) {
                    return { ...item, quantity: Math.max(1, item.quantity + (isIncrease ? 1 : -1)) };
                }
                return item;
            });

            renderCartItems();
            updateCartSummary();
        });

        
        cartItemsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.remove-item');
            if (!btn) return;

            const itemElement = btn.closest('.cart-item');
            const itemId = itemElement.dataset.id;

            cartItems = cartItems.filter(item => item.id.toString() !== itemId);

            renderCartItems();
            updateCartSummary();
        });
    };

    const attachRecommendationListeners = () => {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.target.closest('.recommendation-item').dataset.id;
                const item = recommendedProducts.find(product => product.id.toString() === itemId);

                if (item) {
                    const existingItem = cartItems.find(cartItem => cartItem.id.toString() === itemId);

                    if (existingItem) {
                        
                        existingItem.quantity += 1;
                    } else {
                       
                        cartItems.push({ ...item, quantity: 1 });
                    }

                    renderCartItems();
                    updateCartSummary();
                }
            });
        });
    };


    cartTrigger?.addEventListener('click', openCartDrawer);
    closeCart?.addEventListener('click', closeCartDrawer);

    
    attachCartListeners();
    fetchProducts();
    });

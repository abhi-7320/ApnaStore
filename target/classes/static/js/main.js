document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const categoryList = document.getElementById('category-list');
    const categoryTitle = document.getElementById('category-title');
    const cartText = document.getElementById('cart-text');
    const cartBtn = document.getElementById('cart-btn');
    
    // Initialize cart from localStorage
    function getCart() {
        const cartData = localStorage.getItem('apnaStore_cart');
        return cartData ? JSON.parse(cartData) : {};
    }

    function saveCart(cart) {
        localStorage.setItem('apnaStore_cart', JSON.stringify(cart));
    }

    // Initial fetch and UI update
    updateAuthUI();
    updateCounter();
    fetchProducts();

    function updateAuthUI() {
        const userMobile = localStorage.getItem('apnaStore_user');
        const navLinks = document.querySelector('.nav-links');
        const loginLink = navLinks.querySelector('a[href="login.html"]'); // May be '#' in some cases
        
        if (userMobile) {
            // Logged in: Replace Login link with mobile number and Logout option
            // Find any link that looks like Login
            const existingLogin = Array.from(navLinks.querySelectorAll('a')).find(a => a.textContent === 'Login');
            if (existingLogin) {
                const userProfileDiv = document.createElement('div');
                userProfileDiv.className = 'user-profile';
                userProfileDiv.innerHTML = `
                    <span class="user-mobile">👤 ${userMobile}</span>
                    <a href="#" onclick="logout()" class="logout-link">Logout</a>
                `;
                existingLogin.replaceWith(userProfileDiv);
            }
        }
    }

    window.logout = function() {
        localStorage.removeItem('apnaStore_user');
        window.location.reload();
    }

    function fetchProducts(category = 'All') {
        productGrid.innerHTML = '<div class="loading">Loading products...</div>';
        
        let url = '/api/products';
        if (category !== 'All') {
            url = `/api/products/category/${category}`;
        }
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(products => {
                productsList = products;
                renderProducts(products);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                renderMockData();
            });
    }

    function renderProducts(products) {
        if (products.length === 0) {
            productGrid.innerHTML = '<div class="loading">No products found in this category.</div>';
            return;
        }

        productGrid.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            const imgUrl = product.imageUrl || 'https://via.placeholder.com/180x180?text=Product';
            
            card.innerHTML = `
                <img src="${imgUrl}" alt="${product.name}" class="product-img" onerror="this.src='https://via.placeholder.com/180x180?text=Image+Not+Found'">
                <div class="product-weight">${product.weight}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-bottom">
                    <div class="product-price">₹${product.price}</div>
                    <button class="add-btn" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">ADD</button>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // Category click handler
    categoryList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            document.querySelectorAll('#category-list li').forEach(li => li.classList.remove('active'));
            e.target.classList.add('active');
            
            const category = e.target.getAttribute('data-category');
            categoryTitle.textContent = category === 'All' ? 'All Products' : category;
            
            fetchProducts(category);
        }
    });

    cartBtn.onclick = () => window.location.href = 'cart.html';

    window.addToCart = function(product) {
        const cart = getCart();
        if (cart[product.id]) {
            cart[product.id].quantity++;
        } else {
            cart[product.id] = { ...product, quantity: 1 };
        }
        saveCart(cart);
        updateCounter();
        
        // Button Feedback
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'ADDED';
        btn.classList.add('active');
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('active');
        }, 1000);
    }

    function updateCounter() {
        const cart = getCart();
        let totalItems = 0;
        Object.values(cart).forEach(item => {
            totalItems += item.quantity;
        });
        cartText.textContent = totalItems === 0 ? 'My Cart' : `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
    }

    function renderMockData() {
        const mockData = [
            // Dairy, Bread & Eggs
            { id: 101, name: "Amul Buffalo A2 Milk", category: "Dairy, Bread & Eggs", price: 88, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/6032ea96-4ab2-44b4-8b46-f6bbf7cecfa7.png", weight: "1 ltr" },
            { id: 102, name: "Amul Calci+ Milk", category: "Dairy, Bread & Eggs", price: 85, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/10be8278-544a-4c72-b2b4-f8b94ed4a2da.png", weight: "1 ltr" },
            { id: 103, name: "Amul Slim 'n' Trim Skimmed Milk", category: "Dairy, Bread & Eggs", price: 85, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/c1fb14c1-2f67-4fa1-bee8-04f68c8cd8e9.png", weight: "1 ltr" },
            { id: 104, name: "Amul Taaza Homogenised Toned Milk", category: "Dairy, Bread & Eggs", price: 77, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9a4088cc-db19-4add-b3ce-2edd4d09f4ae.png", weight: "1 ltr" },
            { id: 105, name: "Amul Taaza Toned Milk", category: "Dairy, Bread & Eggs", price: 16, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/852a402a-54ac-41d5-9263-187f4b077171.png", weight: "200 ml" },

            // Fruits & Vegetables
            { id: 201, name: "French Beans (Ghevda)", category: "Fruits & Vegetables", price: 20, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1773818692702-4.png", weight: "250 g" },
            { id: 202, name: "Lady Finger (Bhendi)", category: "Fruits & Vegetables", price: 20, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1772165621532-12.png", weight: "250 g" },
            { id: 203, name: "Beetroot (Beet)", category: "Fruits & Vegetables", price: 20, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/3c5d2ba9-23f1-4408-8cc0-30bf0fca2269.png", weight: "500 g" },
            { id: 204, name: "Green Cucumber (Hiravi Kakdi)", category: "Fruits & Vegetables", price: 23, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b89fe4bd-2018-4502-a80e-d8dc274955b8.png", weight: "500 g" },
            { id: 205, name: "Arvi (Aalu)", category: "Fruits & Vegetables", price: 20, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/acfa1d0e-981c-48a0-b231-510f0ae9a292.png", weight: "250 g" },

            // Cold Drinks & Juices
            { id: 301, name: "Thums Up X Force Zero Sugar Cola Soft Drink", category: "Cold Drinks & Juices", price: 40, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1770356946958-552.png", weight: "300 ml" },
            { id: 302, name: "7UP Lemon Soda Soft Drink", category: "Cold Drinks & Juices", price: 142, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6818b424-15c5-4617-817d-46078cedc4d1.png", weight: "320 ml" },
            { id: 303, name: "7UP Lime Soft Drink (2.25 l)", category: "Cold Drinks & Juices", price: 96, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a3ce3353-e77f-414b-bece-2b32ac446ad2.png", weight: "2.25 ltr" },
            { id: 304, name: "7UP Lime Soft Drink (300 ml)", category: "Cold Drinks & Juices", price: 40, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/39bedf94-c87d-4fc6-9f9d-cf6c25f451da.png", weight: "300 ml" },
            { id: 305, name: "7UP Pink Lemonade Soft Drink", category: "Cold Drinks & Juices", price: 193, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1772432009525-1662.png", weight: "330 ml" },

            // Snacks & Munchies
            { id: 401, name: "Sweet Karam Coffee Kerala Tapioca Chips", category: "Snacks & Munchies", price: 59, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cef34695-bdd0-44d3-83a3-ddb7380bdadd.png", weight: "65 g" },
            { id: 402, name: "4700BC Cheese & Herbs Corn Popped Chips", category: "Snacks & Munchies", price: 40, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b73861e0-2b53-4f7e-86d3-904e468d0478.png", weight: "55 g" },
            { id: 403, name: "4700BC Hawaiian Barbeque Crunchy Corn", category: "Snacks & Munchies", price: 53, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e9a30ac6-3713-4487-9698-5eb6478f8fb8.png", weight: "45 g" },
            { id: 404, name: "4700BC Himalayan Salt Crunchy Corn", category: "Snacks & Munchies", price: 53, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7d8a5515-52ce-4e82-8bbc-ff442e27bac9.png", weight: "45 g" },
            { id: 405, name: "7 Diamonds Garlic & Herb Puffs", category: "Snacks & Munchies", price: 33, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/10f06256-cf1a-4506-9d1e-185cdc0ec5c4.png", weight: "75 g" },

            // Breakfast & Instant Food
            { id: 501, name: "Kellogg's Multigrain Corn Flakes", category: "Breakfast & Instant Food", price: 137, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1773116238333-693.png", weight: "450 g" },
            { id: 502, name: "Kellogg's Chocos + Real Almond Honey Corn Flakes", category: "Breakfast & Instant Food", price: 146, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a667f14f-c653-41cf-afa5-989b3ec60999.png", weight: "168 g + 7 pcs" },
            { id: 503, name: "Kellogg's Corn Flakes Original", category: "Breakfast & Instant Food", price: 336, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6a0ad3ae-f5f5-4a58-a9de-003d90bd8819.png", weight: "1.15 kg" },
            { id: 504, name: "Kellogg's Double Chocolaty Fills Chocos", category: "Breakfast & Instant Food", price: 169, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6610ad2b-ec7f-414e-84d9-dcbc77767e31.png", weight: "250 g" },
            { id: 505, name: "Kellogg's Froot Loops - Multigrain Cereal", category: "Breakfast & Instant Food", price: 187, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6aad9f1d-69a1-4586-8ce1-6baa72643e7b.png", weight: "285 g" },

            // Personal Care
            { id: 601, name: "Dermicool Cooling Bath Soap for Instant Cooling", category: "Personal Care", price: 119, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5b0536ab-8dd4-4588-8bed-65f65ec8c4cf.png", weight: "4 x 75 g" },
            { id: 602, name: "Biotique Almond Oil Nourishing Soap", category: "Personal Care", price: 94, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5a87914e-c632-4541-a9a0-6c9d9fab778a.png", weight: "150 g" },
            { id: 603, name: "Biotique Basil & Parsley Revitalizing Soap", category: "Personal Care", price: 94, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/0dac5d0b-9e94-4c08-a8cf-c854f43e5bb8.png", weight: "150 g" },
            { id: 604, name: "Biotique Orange Peel Renewing Soap", category: "Personal Care", price: 94, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/8bf35bf7-f545-48e4-bc98-2ee1ad2ac630.png", weight: "150 g" },
            { id: 605, name: "Chandrika Ayurvedic Soap with 2x Coconut Oil", category: "Personal Care", price: 261, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/92fafabd-821d-45f1-a4ff-9258d663600a.png", weight: "6 x 125 g" },

            // Home & Office
            { id: 701, name: "JK Easy Copier A4 Sheets (70 GSM)", category: "Home & Office", price: 359, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/483811c1-cafe-4596-8eb7-eddc4038a6c8.png", weight: "500 sheets" },
            { id: 702, name: "Classmate 6 Subject Single Line Notebook (A4)", category: "Home & Office", price: 180, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f507f688-ae36-4f2a-86b3-385f575f692d.png", weight: "1 pc (300 pages)" },
            { id: 703, name: "Creative Space A4 Sheets (75 GSM)", category: "Home & Office", price: 60, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/440033a8-e0d9-4b8c-8606-b5cdc582daab.png", weight: "20 pcs" },
            { id: 704, name: "Wingz Premium A4 Coloured Sheets", category: "Home & Office", price: 149, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/96e3106c-05bb-429e-b1b2-b84acd09c089.png", weight: "100 sheets" },
            { id: 705, name: "Creative Space Assignment A4 Sheets", category: "Home & Office", price: 60, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1771991783673-334.png", weight: "20 sheets" },

            // Atta, Rice & Dal
            { id: 801, name: "Aashirvaad Superior MP Atta", category: "Atta, Rice & Dal", price: 258, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/d54667e8-c5df-4fa5-a685-b6dbfa1dd8e6.png", weight: "5 kg" },
            { id: 802, name: "Daawat Rozana Super Basmati Rice", category: "Atta, Rice & Dal", price: 470, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e9d2b11d-0cae-4926-8161-086424e939d5.png", weight: "5 kg" },
            { id: 803, name: "Tata Sampann Unpolished Toor Dal", category: "Atta, Rice & Dal", price: 186, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1773718842673-772.png", weight: "1 kg" },
            { id: 804, name: "Basic Arhar/Toor Dal", category: "Atta, Rice & Dal", price: 142, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/30d568a1-c12d-4aa4-9405-c2e8ada1dde0.png", weight: "1 kg" },
            { id: 805, name: "Whole Farm Premium Rice Flour/Rice Atta", category: "Atta, Rice & Dal", price: 33, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/10e2287b-b293-43c4-8570-ff9eb409b1eb.png", weight: "500 g" },

            // Cleaning Essentials
            { id: 901, name: "Vim Lemon Dishwash Gel", category: "Cleaning Essentials", price: 359, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/7ea14805-4916-4be7-a82a-c09641638ed6.png", weight: "2 ltr" },
            { id: 902, name: "Lizol Disinfectant Surface & Floor Cleaner", category: "Cleaning Essentials", price: 169, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f8b94f6e-14b3-4719-a5ea-5525f47743e8.png", weight: "625 ml" },
            { id: 903, name: "Harpic Disinfectant Toilet Bleach", category: "Cleaning Essentials", price: 115, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/4ae6ba45-4339-4880-83cd-ffa2aa5ef4e7.png", weight: "500 ml" },
            { id: 904, name: "Mr Muscle Dranex Drain Cleaner", category: "Cleaning Essentials", price: 61, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/83b17ea5-c7ae-487b-8efe-2ea80f9db5a9.png", weight: "2 x 50 g" },
            { id: 905, name: "Vanish Oxi Action Fabric Stain Remover Gel", category: "Cleaning Essentials", price: 151, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1772682797673-156.png", weight: "400 ml" }
        ];

        let selectedCategory = document.querySelector('#category-list li.active').getAttribute('data-category');
        if (selectedCategory !== 'All') {
            const filtered = mockData.filter(p => p.category === selectedCategory);
            renderProducts(filtered);
        } else {
            renderProducts(mockData);
        }
    }
});

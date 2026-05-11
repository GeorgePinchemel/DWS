/**
 * menuData: Objeto principal que contém todo o catálogo da pizzaria.
 * Dividido em categorias: combos, pizzas, calzones e bebidas.
 */
const menuData = {
    combos: [
        { id: 'combo1', name: 'Combo Casal', description: '1 Pizza Média + 1 Refri 2L', price: 69.90, image: 'assets/images/combo_week.png' },
        { id: 'combo2', name: 'Combo Família', description: '2 Pizzas Grandes + 1 Refri 2L', price: 119.90, image: 'assets/images/combo_week.png' }
    ],
    pizzas: [
        { id: 'custom', name: '✨ Monte sua Pizza', category: 'Personalizada', description: 'Escolha até 3 sabores e monte do seu jeito!', price: 40.00, image: 'assets/images/custom_making.png', isCustom: true },
        { id: 'p1', name: 'Margherita', category: 'Salgada', description: 'Mozzarella, tomate e manjericão fresco.', price: 45.00, image: 'assets/images/margherita.png' },
        { id: 'p2', name: 'Calabresa', category: 'Salgada', description: 'Calabresa fatiada, cebola e azeitonas.', price: 42.00, image: 'assets/images/calabresa.png' },
        { id: 'p4', name: 'Pepperoni', category: 'Salgada', description: 'Pepperoni premium e mozzarella.', price: 48.00, image: 'assets/images/pepperoni.png' },
        { id: 'p5', name: 'Portuguesa', category: 'Salgada', description: 'Presunto, ovos, cebola, ervilha e azeitona.', price: 46.00, image: 'assets/images/portuguesa.png' },
        { id: 'p6', name: 'Frango com Catupiry', category: 'Salgada', description: 'Frango desfiado com o legítimo Catupiry.', price: 47.00, image: 'assets/images/frango.png' },
        { id: 'p3', name: 'Chocolate com Morango', category: 'Doce', description: 'Chocolate meio amargo com morangos frescos.', price: 48.00, image: 'assets/images/chocolate.png' },
        { id: 'p7', name: 'Romeu e Julieta', category: 'Doce', description: 'Goiabada com queijo derretido.', price: 44.00, image: 'assets/images/romeu_julieta.png' }
    ],
    calzones: [
        { id: 'c1', name: 'Calzone Clássico', description: 'Presunto, queijo e molho de tomate.', price: 38.00, image: 'assets/images/calzone_p.png' },
        { id: 'c2', name: 'Calzone Frango com Catupiry', description: 'Frango desfiado com catupiry e milho.', price: 42.00, image: 'assets/images/calzone_p.png' },
        { id: 'c3', name: 'Calzone Portuguesa', description: 'Presunto, ovos, cebola e azeitona.', price: 42.00, image: 'assets/images/calzone_p.png' },
        { id: 'c4', name: 'Calzone Nutella com Morango', description: 'Muita Nutella com morangos frescos.', price: 46.00, image: 'assets/images/chocolate.png' },
        { id: 'c5', name: 'Calzone Banana com Canela', description: 'Banana, canela e leite condensado.', price: 40.00, image: 'assets/images/chocolate.png' }
    ],
    bebidas: [
        { id: 'b1', name: 'Coca-Cola 2L', price: 12.00, image: 'assets/images/drinks.png' },
        { id: 'b2', name: 'Guaraná 2L', price: 10.00, image: 'assets/images/drinks.png' },
        { id: 'b3', name: 'Coca-Cola 1L', price: 8.50, image: 'assets/images/drinks_variety.png' },
        { id: 'b4', name: 'Guaraná 1L', price: 7.50, image: 'assets/images/drinks_variety.png' },
        { id: 'b5', name: 'Coca-Cola Lata', price: 5.50, image: 'assets/images/coke_can.png' },
        { id: 'b6', name: 'Guaraná Lata', price: 5.00, image: 'assets/images/guarana_can.png' },
        { id: 'b7', name: 'H2OH! Limão 500ml', price: 6.50, image: 'assets/images/h2oh.png' },
        { id: 'b8', name: 'Heineken Longneck', price: 11.00, image: 'assets/images/heineken.png' },
        { id: 'b9', name: 'Stella Artois Longneck', price: 10.00, image: 'assets/images/stella.png' },
        { id: 'b10', name: 'Água Mineral 500ml', price: 4.00, image: 'assets/images/drinks.png' }
    ]
};

/**
 * Multiplicadores de preço baseados no tamanho da pizza.
 * Diferença de 10% entre cada tamanho consecutivo.
 */
const sizePrices = {
    'Pequena': 1.0,
    'Média': 1.1,
    'Grande': 1.2,
    'Gigante': 1.3
};

/**
 * Taxas de frete por bairro em Salvador, partindo dos Barris.
 * Chaves em minúsculas para facilitar comparação case-insensitive.
 */
const SHIPPING_RATES = {
    'barris': 0,
    'garcia': 3,
    'canela': 3,
    'piedade': 5,
    'politeama': 5,
    'campo grande': 5,
    'nazaré': 5,
    'nazare': 5,
    'vitória': 7,
    'vitoria': 7,
    'graça': 8,
    'graca': 8,
    'federação': 8,
    'federacao': 8,
    'centro': 7,
    'dois de julho': 6,
    'tororó': 6,
    'tororo': 6,
    'mouraria': 6,
    'saúde': 7,
    'saude': 7,
    'santo antônio': 7,
    'santo antonio': 7,
    'comércio': 7,
    'comercio': 7,
    'barra': 10,
    'ondina': 10,
    'rio vermelho': 12
};
const DEFAULT_SHIPPING_FEE = 10.00;

/**
 * Detecta o bairro no endereço digitado e retorna a taxa de frete correspondente.
 * @param {string} address - Endereço completo digitado pelo usuário.
 * @returns {number} - Taxa de frete em reais.
 */
function getShippingFee(address) {
    const lower = address.toLowerCase();
    for (const [bairro, taxa] of Object.entries(SHIPPING_RATES)) {
        if (lower.includes(bairro)) return taxa;
    }
    return DEFAULT_SHIPPING_FEE;
}

let cart = [];
let currentShippingFee = DEFAULT_SHIPPING_FEE;

/**
 * Função de inicialização do sistema de delivery.
 * Renderiza a categoria inicial e configura ouvintes de eventos.
 */
function init() {
    renderCategory('combos');
    setupEventListeners();
}

/**
 * Configura os event listeners para navegação de categorias,
 * finalização de pedido e trocas de métodos de pagamento.
 */
function setupEventListeners() {
    const categorySelect = document.getElementById('category-select');
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            renderCategory(e.target.value);
        });
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', showCheckout);

    const closeModal = document.getElementById('close-modal');
    if (closeModal) closeModal.addEventListener('click', hideCheckout);

    const payOnline = document.getElementById('payment-online');
    if (payOnline) payOnline.addEventListener('change', updatePaymentSubOptions);

    const payDelivery = document.getElementById('payment-delivery');
    if (payDelivery) payDelivery.addEventListener('change', updatePaymentSubOptions);
}

/**
 * Renderiza os cards de produtos no container principal com base na categoria selecionada.
 * @param {string} category - A chave da categoria no objeto menuData.
 */
function renderCategory(category) {
    const container = document.getElementById('menu-items');
    if (!container) return;
    container.innerHTML = '';

    const items = menuData[category];
    if (!items) return;

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <div class="menu-card__image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-card__info">
                <h3>${item.name}</h3>
                <p>${item.description || ''}</p>
                <div class="menu-card__footer">
                    <span class="price">R$ ${item.price.toFixed(2)}</span>
                    <button onclick="openItemModal('${category}', '${item.id}')" class="btn btn--primary btn--round">Adicionar</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * Abre o modal de customização ou confirmação de um item específico.
 * @param {string} category - Categoria do item.
 * @param {string} id - ID único do item.
 */
function openItemModal(category, id) {
    const item = menuData[category].find(i => i.id === id);
    if (!item) return;

    const modal = document.getElementById('pizza-modal');
    const optionsContainer = document.getElementById('pizza-options-content');
    if (!modal || !optionsContainer) return;

    if (category === 'pizzas') {
        const isCustom = item.isCustom;
        optionsContainer.innerHTML = `
            <div class="modal-header">
                <h3>${item.name}</h3>
                <p>Personalize seu pedido</p>
            </div>
            <div class="form-group">
                <label>Tamanho:</label>
                <div class="radio-pill-group">
                    ${Object.keys(sizePrices).map(size => `
                        <label class="radio-pill">
                            <input type="radio" name="pizza-size" value="${size}" ${size === 'Média' ? 'checked' : ''} onchange="updatePizzaModalPrice('${item.id}')">
                            <span>${size}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
            
            ${isCustom ? `
                <div class="form-group">
                    <label>Quantidade de Sabores:</label>
                    <select id="flavor-count" class="custom-select" onchange="updateFlavorSelects()">
                        <option value="1">1 Sabor</option>
                        <option value="2">2 Sabores</option>
                        <option value="3">3 Sabores</option>
                    </select>
                </div>
                <div id="flavor-selects" class="flavor-grid"></div>
            ` : `
                <div class="form-group">
                    <label>Sabor selecionado:</label>
                    <div class="static-value">${item.name} (Apenas 1 sabor)</div>
                    <input type="hidden" id="fixed-flavor" value="${item.name}">
                </div>
            `}
            
            <div class="modal-footer">
                <div class="modal-price">Total: <span id="modal-total-price">R$ ${item.price.toFixed(2)}</span></div>
                <button onclick="confirmPizza('${item.id}')" class="btn btn--primary btn--round btn--block">Confirmar e Adicionar</button>
            </div>
        `;
        if (isCustom) updateFlavorSelects();
        updatePizzaModalPrice(item.id);
    } else {
        optionsContainer.innerHTML = `
            <div class="modal-header">
                <h3>${item.name}</h3>
                <p>${item.description || 'Confirme seu item'}</p>
            </div>
            <div class="form-group" style="text-align:center">
                <label>Quantidade:</label>
                <div class="quantity-selector">
                    <button onclick="changeQty(-1)" class="qty-btn">-</button>
                    <span id="item-qty">1</span>
                    <button onclick="changeQty(1)" class="qty-btn">+</button>
                </div>
            </div>
            <div class="modal-footer">
                <div class="modal-price">Total: <span id="modal-total-price">R$ ${item.price.toFixed(2)}</span></div>
                <button onclick="confirmGenericItem('${category}', '${item.id}')" class="btn btn--primary btn--round btn--block">Confirmar e Adicionar</button>
            </div>
        `;
    }

    modal.style.display = 'flex';
}

let currentQty = 1;
/**
 * Altera a quantidade de itens no seletor do modal genérico.
 * @param {number} val - Valor a ser somado à quantidade atual (pode ser negativo).
 */
function changeQty(val) {
    currentQty = Math.max(1, currentQty + val);
    const qtyElem = document.getElementById('item-qty');
    const priceElem = document.getElementById('modal-total-price');
    if (qtyElem) qtyElem.textContent = currentQty;

    const basePriceStr = priceElem.dataset.basePrice || priceElem.textContent.replace('R$ ', '');
    if (!priceElem.dataset.basePrice) priceElem.dataset.basePrice = basePriceStr;

    const basePrice = parseFloat(basePriceStr);
    priceElem.textContent = `R$ ${(basePrice * currentQty).toFixed(2)}`;
}

/**
 * Confirma a adição de um item genérico (bebida, combo ou calzone) ao carrinho.
 * @param {string} category - Categoria do item.
 * @param {string} id - ID do item.
 */
function confirmGenericItem(category, id) {
    const item = menuData[category].find(i => i.id === id);
    const qty = currentQty;

    for (let i = 0; i < qty; i++) {
        cart.push({
            ...item,
            uniqueId: Date.now() + i
        });
    }

    hideCheckout();
    updateCart();
    currentQty = 1;
}

/**
 * Atualiza o preço exibido no modal de pizza com base no tamanho selecionado.
 * @param {string} pizzaId - ID da pizza no menuData.
 */
function updatePizzaModalPrice(pizzaId) {
    const pizza = menuData.pizzas.find(p => p.id === pizzaId);
    if (!pizza) return;
    const selectedSize = document.querySelector('input[name="pizza-size"]:checked');
    if (!selectedSize) return;

    const factor = sizePrices[selectedSize.value];
    const finalPrice = pizza.price * factor;
    const modalPrice = document.getElementById('modal-total-price');
    if (modalPrice) modalPrice.textContent = `R$ ${finalPrice.toFixed(2)}`;
}

/**
 * Gera dinamicamente os campos de seleção de sabores no modal "Monte sua Pizza".
 */
function updateFlavorSelects() {
    const flavorCountElem = document.getElementById('flavor-count');
    if (!flavorCountElem) return;

    const count = parseInt(flavorCountElem.value);
    const container = document.getElementById('flavor-selects');
    if (!container) return;
    container.innerHTML = '';

    const availableFlavors = menuData.pizzas.filter(p => !p.isCustom);

    for (let i = 1; i <= count; i++) {
        const group = document.createElement('div');
        group.className = 'flavor-group';
        group.innerHTML = `
            <label>Sabor ${i}:</label>
            <select class="flavor-selection custom-select">
                ${availableFlavors.map(p => `<option value="${p.name}">${p.name}</option>`).join('')}
            </select>
        `;
        container.appendChild(group);
    }
}

/**
 * Finaliza a customização da pizza e a adiciona ao carrinho com nome dinâmico e preço calculado.
 * @param {string} pizzaId - ID da pizza base.
 */
function confirmPizza(pizzaId) {
    const pizza = menuData.pizzas.find(p => p.id === pizzaId);
    if (!pizza) return;

    const sizeInput = document.querySelector('input[name="pizza-size"]:checked');
    if (!sizeInput) return;
    const size = sizeInput.value;

    let flavors = [];
    if (pizza.isCustom) {
        const flavorSelects = document.querySelectorAll('.flavor-selection');
        flavors = Array.from(flavorSelects).map(s => s.value);
    } else {
        const fixedFlavor = document.getElementById('fixed-flavor');
        flavors = [fixedFlavor ? fixedFlavor.value : pizza.name];
    }

    const factor = sizePrices[size];
    const finalPrice = pizza.price * factor;

    cart.push({
        ...pizza,
        name: flavors.length > 1 ? `Pizza ${size} (${flavors.join(' / ')})` : `Pizza ${size} ${flavors[0]}`,
        price: finalPrice,
        uniqueId: Date.now(),
        customOptions: { size, flavors }
    });

    hideCheckout();
    updateCart();
}

/**
 * Atualiza toda a interface do carrinho (Sidebar e Barra Mobile).
 * Calcula subtotal, frete e total final.
 */
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const cartShipping = document.getElementById('cart-shipping');
    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = '';
    let subtotal = 0;
    cart.forEach((item, index) => {
        subtotal += item.price;
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <div class="cart-item__info">
                <span class="cart-item__name">${item.name}</span>
                <span class="cart-item__price">R$ ${item.price.toFixed(2)}</span>
            </div>
            <button onclick="removeFromCart(${index})" class="remove-btn">&times;</button>
        `;
        cartItems.appendChild(li);
    });

    const finalTotal = subtotal > 0 ? subtotal + currentShippingFee : 0;

    if (cartSubtotal) cartSubtotal.textContent = subtotal.toFixed(2);
    if (cartShipping) {
        const shippingLabel = currentShippingFee === 0 && subtotal > 0
            ? '🎉 Grátis!'
            : subtotal > 0 ? currentShippingFee.toFixed(2) : '0.00';
        cartShipping.textContent = typeof shippingLabel === 'string' && shippingLabel.includes('Grátis')
            ? shippingLabel
            : shippingLabel;
    }
    cartTotal.textContent = finalTotal.toFixed(2);

    const mobileCount = document.getElementById('mobile-cart-count');
    const mobileTotal = document.getElementById('mobile-cart-total');
    if (mobileCount) mobileCount.textContent = cart.length;
    if (mobileTotal) mobileTotal.textContent = `R$ ${finalTotal.toFixed(2)}`;
}

/**
 * Alterna a visibilidade do carrinho lateral em dispositivos móveis.
 */
function toggleCart() {
    const sidebar = document.querySelector('.order-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('active')) {
            if (!document.getElementById('close-cart')) {
                const closeBtn = document.createElement('button');
                closeBtn.id = 'close-cart';
                closeBtn.innerHTML = '&times;';
                closeBtn.style = 'position:fixed;top:20px;right:20px;font-size:2rem;background:none;border:none;color:white;z-index:1200;cursor:pointer;';
                closeBtn.onclick = toggleCart;
                sidebar.appendChild(closeBtn);
            }
        } else {
            const closeBtn = document.getElementById('close-cart');
            if (closeBtn) closeBtn.remove();
        }
    }
}

/**
 * Remove um item do carrinho com base no seu índice no array.
 * @param {number} index - Índice do item no array cart.
 */
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

/**
 * Exibe o modal de checkout se o carrinho não estiver vazio.
 */
function showCheckout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    const modal = document.getElementById('checkout-modal');
    if (modal) modal.style.display = 'flex';
    const sidebar = document.querySelector('.order-sidebar');
    if (sidebar) sidebar.classList.remove('active');
}

/**
 * Esconde todos os modais abertos na tela.
 */
function hideCheckout() {
    const pizzaModal = document.getElementById('pizza-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    if (pizzaModal) pizzaModal.style.display = 'none';
    if (checkoutModal) checkoutModal.style.display = 'none';
}

/**
 * Alterna a exibição das sub-opções de pagamento (Pix, Cartão, Dinheiro) 
 * dependendo da escolha entre pagamento Online ou na Entrega.
 */
function updatePaymentSubOptions() {
    const onlineOptions = document.getElementById('online-payment-options');
    const deliveryOptions = document.getElementById('delivery-payment-options');
    if (!onlineOptions || !deliveryOptions) return;

    const isOnline = document.getElementById('payment-online').checked;

    onlineOptions.style.display = isOnline ? 'block' : 'none';
    deliveryOptions.style.display = isOnline ? 'none' : 'block';
}

/**
 * Coleta todos os dados do pedido, valida o endereço e o pagamento,
 * monta uma mensagem formatada e abre o WhatsApp da Sottile.
 */
function finalizeOrder() {
    const addressInput = document.getElementById('delivery-address');
    const address = addressInput.value;

    if (!address || address.trim().length < 5) {
        addressInput.focus();
        addressInput.style.borderColor = '#b31217';
        showToast('Por favor, insira o endereço completo para entrega!', 'error');
        return;
    }
    addressInput.style.borderColor = '';

    const paymentType = document.querySelector('input[name="payment-type"]:checked');
    if (!paymentType) {
        showToast('Selecione um método de pagamento!', 'error');
        return;
    }

    const paymentMethod = paymentType.value;
    let subMethod = '';

    if (paymentMethod === 'online') {
        const onlineMethod = document.querySelector('input[name="online-method"]:checked');
        if (!onlineMethod) {
            showToast('Selecione a forma de pagamento online!', 'error');
            return;
        }
        subMethod = onlineMethod.value;
    } else {
        const deliveryMethod = document.querySelector('input[name="delivery-method"]:checked');
        if (!deliveryMethod) {
            showToast('Selecione a forma de pagamento na entrega!', 'error');
            return;
        }
        subMethod = deliveryMethod.value;
    }

    // Detecta frete pelo bairro no endereço
    const shippingFee = getShippingFee(address);
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal + shippingFee;

    const paymentLabels = {
        'pix': 'Pix', 'cartao': 'Cartão', 'dinheiro': 'Dinheiro'
    };
    const paymentTypeLabel = paymentMethod === 'online' ? 'Online' : 'Na Entrega';
    const subMethodLabel = paymentLabels[subMethod] || subMethod.toUpperCase();

    // Monta a lista de itens do pedido
    const itemLines = cart.map(i => `  • ${i.name} — R$ ${i.price.toFixed(2)}`).join('%0A');
    const freteLabel = shippingFee === 0 ? 'Grátis 🎉' : `R$ ${shippingFee.toFixed(2)}`;

    const msg = [
        `*🍕 Novo Pedido — Sottile Pizzaria*`,
        ``,
        `*Itens do pedido:*`,
        itemLines,
        ``,
        `*Subtotal:* R$ ${subtotal.toFixed(2)}`,
        `*Frete:* ${freteLabel}`,
        `*Total:* R$ ${total.toFixed(2)}`,
        ``,
        `*Endereço de entrega:* ${address}`,
        `*Forma de pagamento:* ${paymentTypeLabel} — ${subMethodLabel}`,
        ``,
        `_Pedido feito pelo site sottilepizzaria.com.br_`
    ].join('%0A');

    const phone = '5571986711646';
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');

    cart = [];
    currentShippingFee = DEFAULT_SHIPPING_FEE;
    addressInput.value = '';
    updateCart();
    hideCheckout();
    showToast('Pedido enviado! Continue no WhatsApp. 🚀', 'success');
}

/**
 * Exibe uma notificação toast não-bloqueante na tela.
 * @param {string} msg - Texto da notificação.
 * @param {'success'|'error'} type - Tipo visual do toast.
 */
function showToast(msg, type = 'success') {
    const existing = document.getElementById('sottile-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'sottile-toast';
    toast.className = `sottile-toast sottile-toast--${type}`;
    toast.textContent = msg;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('sottile-toast--visible'));
    setTimeout(() => {
        toast.classList.remove('sottile-toast--visible');
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

/**
 * Evento global para fechar modais ao clicar fora da área de conteúdo.
 */
window.onclick = function (event) {
    const pizzaModal = document.getElementById('pizza-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    if (event.target == pizzaModal) hideCheckout();
    if (event.target == checkoutModal) hideCheckout();
}

/**
 * Inicializa o script quando o DOM estiver completamente carregado.
 */
document.addEventListener('DOMContentLoaded', init);

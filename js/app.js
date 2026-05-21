/* ========================================
   MARIA PAULA - ECOMMERCE DEMO JS
   Corregido: imagenes reales en vez de emojis
   ======================================== */

// === IMAGENES PLACEHOLDER POR CATEGORIA ===
// Cuando tengas fotos reales, reemplaza cada URL por: 'images/nombre-producto.jpg'
const IMG = {
  // --- Featured ---
  pinata:      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  globos:      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop',
  taza:        'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop',
  cocina:      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
  velas:       'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=400&h=400&fit=crop',
  remera:      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
  serpentinas: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=400&fit=crop',
  mochila:     'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
  // --- Sale ---
  gorrito:     'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop',
  llavero:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  pelota:      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop',
  guirnalda:   'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=400&fit=crop',
  // --- New ---
  termo:       'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
  babyshower:  'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop',
  puzzle:      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=400&fit=crop',
  bazar:       'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
};

// === DATA ===
const products = {
  featured: [
    { id: 1,  name: 'Pinata Unicornio Arcoiris',    category: 'Cotillon',   image: IMG.pinata,      price: 45000, oldPrice: 65000, rating: 4.8, reviews: 124, badge: 'sale', discount: '-31%' },
    { id: 2,  name: 'Globos Metalicos Pack x50',    category: 'Cotillon',   image: IMG.globos,      price: 32000, oldPrice: null,  rating: 4.9, reviews: 89,  badge: 'hot',  discount: null   },
    { id: 3,  name: 'Taza Sublimada Personalizada', category: 'Sublimados', image: IMG.taza,        price: 28000, oldPrice: 35000, rating: 4.7, reviews: 56,  badge: 'sale', discount: '-20%' },
    { id: 4,  name: 'Set de Cocina Infantil',       category: 'Juguetes',   image: IMG.cocina,      price: 85000, oldPrice: null,  rating: 4.6, reviews: 42,  badge: 'new',  discount: null   },
    { id: 5,  name: 'Velas de Cumpleanos LED',      category: 'Cotillon',   image: IMG.velas,       price: 12000, oldPrice: 18000, rating: 4.5, reviews: 203, badge: 'sale', discount: '-33%' },
    { id: 6,  name: 'Remera Sublimada Full Color',  category: 'Sublimados', image: IMG.remera,      price: 55000, oldPrice: null,  rating: 4.8, reviews: 67,  badge: 'hot',  discount: null   },
    { id: 7,  name: 'Kit Serpentinas y Confeti',    category: 'Cotillon',   image: IMG.serpentinas, price: 8000,  oldPrice: 12000, rating: 4.4, reviews: 312, badge: 'sale', discount: '-33%' },
    { id: 8,  name: 'Mochila Escolar Personaje',    category: 'Juguetes',   image: IMG.mochila,     price: 68000, oldPrice: null,  rating: 4.9, reviews: 45,  badge: 'new',  discount: null   },
  ],
  sale: [
    { id: 9,  name: 'Gorrito de Cumpleanos x20',   category: 'Cotillon',   image: IMG.gorrito,   price: 15000, oldPrice: 25000, rating: 4.3, reviews: 178, badge: 'sale', discount: '-40%' },
    { id: 10, name: 'Llavero Sublimado Doble',     category: 'Sublimados', image: IMG.llavero,   price: 8000,  oldPrice: 15000, rating: 4.6, reviews: 89,  badge: 'sale', discount: '-47%' },
    { id: 11, name: 'Pelota Anti-Estres x12',      category: 'Juguetes',   image: IMG.pelota,    price: 18000, oldPrice: 30000, rating: 4.5, reviews: 134, badge: 'sale', discount: '-40%' },
    { id: 12, name: 'Guirnalda Feliz Cumple',      category: 'Cotillon',   image: IMG.guirnalda, price: 10000, oldPrice: 18000, rating: 4.7, reviews: 245, badge: 'sale', discount: '-44%' },
  ],
  new: [
    { id: 13, name: 'Termo Sublimado 500ml',        category: 'Sublimados', image: IMG.termo,      price: 45000, oldPrice: null, rating: 5.0, reviews: 12, badge: 'new', discount: null },
    { id: 14, name: 'Kit Decoracion Baby Shower',   category: 'Cotillon',   image: IMG.babyshower, price: 55000, oldPrice: null, rating: 4.8, reviews: 8,  badge: 'new', discount: null },
    { id: 15, name: 'Rompecabezas 1000 Piezas',     category: 'Juguetes',   image: IMG.puzzle,     price: 38000, oldPrice: null, rating: 4.9, reviews: 15, badge: 'new', discount: null },
    { id: 16, name: 'Set Bazar Minimalista',         category: 'Bazar',      image: IMG.bazar,      price: 72000, oldPrice: null, rating: 4.7, reviews: 6,  badge: 'new', discount: null },
  ]
};

let cart = [
  { id: 1, name: 'Pinata Unicornio Arcoiris',    image: IMG.pinata, price: 45000, qty: 1 },
  { id: 3, name: 'Taza Sublimada Personalizada', image: IMG.taza,   price: 28000, qty: 2 }
];

let wishlist = [2, 6];

// === HELPER: renderiza imagen de producto de forma segura ===
// Siempre usa <img>. Si la URL falla, muestra un fondo de color solido.
function productImageTag(src, alt, cssClass) {
  const cls = cssClass || 'product-img-tag';
  const fallback = 'https://placehold.co/400x400/f1f2f6/aaa?text=MP';
  return `<img
    src="${src}"
    alt="${alt}"
    class="${cls}"
    loading="lazy"
    onerror="this.onerror=null;this.src='${fallback}';"
    style="width:100%;height:100%;object-fit:cover;display:block;"
  />`;
}

// === DOM ELEMENTS ===
const heroSlider    = document.getElementById('heroSlider');
const heroDots      = document.getElementById('heroDots');
const heroPrev      = document.getElementById('heroPrev');
const heroNext      = document.getElementById('heroNext');
const mobileToggle  = document.getElementById('mobileToggle');
const mobileMenu    = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const cartBtn       = document.getElementById('cartBtn');
const cartSidebar   = document.getElementById('cartSidebar');
const cartOverlay   = document.getElementById('cartOverlay');
const cartClose     = document.getElementById('cartClose');
const cartItems     = document.getElementById('cartItems');
const cartCount     = document.getElementById('cartCount');
const cartTotal     = document.getElementById('cartTotal');
const toast         = document.getElementById('toast');
const toastMessage  = document.getElementById('toastMessage');
const quickViewModal = document.getElementById('quickViewModal');
const modalClose    = document.getElementById('modalClose');
const modalBody     = document.getElementById('modalBody');
const header        = document.getElementById('header');

// === HERO SLIDER ===
let currentSlide = 0;
const totalSlides = 3;
let slideInterval;

function goToSlide(index) {
  document.querySelectorAll('.hero-slide').forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  document.querySelectorAll('.hero-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() { goToSlide((currentSlide + 1) % totalSlides); }
function prevSlide()  { goToSlide((currentSlide - 1 + totalSlides) % totalSlides); }
function startSlider() { slideInterval = setInterval(nextSlide, 5000); }
function stopSlider()  { clearInterval(slideInterval); }

heroDots.addEventListener('click', (e) => {
  if (e.target.classList.contains('hero-dot')) {
    stopSlider();
    goToSlide(parseInt(e.target.dataset.slide));
    startSlider();
  }
});
heroPrev.addEventListener('click', () => { stopSlider(); prevSlide(); startSlider(); });
heroNext.addEventListener('click', () => { stopSlider(); nextSlide(); startSlider(); });

// === MOBILE MENU ===
function openMobileMenu()  {
  mobileMenu.classList.add('active');
  mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

mobileToggle.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

// === CART SIDEBAR ===
function openCart() {
  cartSidebar.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  renderCart();
}
function closeCart() {
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// === RENDER CART ===
// CORREGIDO: usa <img> en vez de emoji directo
function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Tu carrito esta vacio</p>
        <span style="font-size:0.85rem;opacity:0.6;">Agrega productos y empieza a comprar!</span>
      </div>
    `;
    cartCount.textContent = '0';
    cartTotal.textContent = 'Gs. 0';
    return;
  }

  let total = 0;
  cartItems.innerHTML = cart.map(item => {
    total += item.price * item.qty;
    return `
      <div class="cart-item">
        <div class="cart-item-image" style="overflow:hidden;border-radius:8px;width:60px;height:60px;flex-shrink:0;">
          ${productImageTag(item.image, item.name)}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">Gs. ${item.price.toLocaleString()}</div>
          <div class="cart-item-qty">
            <button onclick="updateQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
            <span>${item.qty}</span>
            <button onclick="updateQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
  }).join('');

  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  cartTotal.textContent = 'Gs. ' + total.toLocaleString();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
  showToast('Producto eliminado del carrito');
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id:    product.id,
      name:  product.name,
      image: product.image,
      price: product.price,
      qty:   1
    });
  }
  renderCart();
  // CORREGIDO: sin emoji en el toast
  showToast(product.name + ' agregado al carrito');

  cartCount.style.transform = 'scale(1.4)';
  setTimeout(() => cartCount.style.transform = 'scale(1)', 200);
}

// === RENDER PRODUCTS ===
// CORREGIDO: usa <img> con onerror fallback en vez de emoji
function renderProducts(containerId, productList) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = productList.map(product => {
    const isWishlisted = wishlist.includes(product.id);

    const priceHtml = product.oldPrice
      ? `<span class="product-old-price">Gs. ${product.oldPrice.toLocaleString()}</span>`
      : '';
    const discountHtml = product.discount
      ? `<span class="product-discount">${product.discount}</span>`
      : '';
    const badgeHtml = product.badge
      ? `<span class="product-badge badge-${product.badge}">
           ${product.badge === 'sale' ? 'Oferta' : product.badge === 'new' ? 'Nuevo' : 'Hot'}
         </span>`
      : '';

    // Serializamos el product sin emojis para el onclick
    const productJson = JSON.stringify(product).replace(/'/g, "&#39;");

    return `
      <div class="product-card" data-id="${product.id}">
        ${badgeHtml}
        <button class="product-wishlist ${isWishlisted ? 'active' : ''}"
                onclick="toggleWishlist(${product.id}, this)">
          <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
        </button>

        <div class="product-image">
          ${productImageTag(product.image, product.name)}
          <button class="product-quickview" onclick="openQuickView(${product.id})">
            <i class="fas fa-eye"></i> Vista rapida
          </button>
        </div>

        <div class="product-info">
          <div class="product-category">${product.category}</div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-rating">
            ${Array(5).fill(0).map((_, i) =>
              `<i class="fas fa-star${i < Math.floor(product.rating) ? '' : '-half-alt'}"></i>`
            ).join('')}
            <span>(${product.reviews})</span>
          </div>
          <div class="product-price-row">
            <span class="product-price">Gs. ${product.price.toLocaleString()}</span>
            ${priceHtml}
            ${discountHtml}
          </div>
          <div class="product-actions">
            <button class="btn-add-cart" onclick='addToCart(${productJson})'>
              <i class="fas fa-shopping-bag"></i> Agregar
            </button>
            <a href="https://wa.me/595981123456?text=Hola%20Maria%20Paula%2C%20quiero%20cotizar%20${encodeURIComponent(product.name)}"
               class="btn-whatsapp-quick" target="_blank" title="Cotizar por WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// === WISHLIST ===
function toggleWishlist(id, btn) {
  const index = wishlist.indexOf(id);
  const icon = btn.querySelector('i');

  if (index > -1) {
    wishlist.splice(index, 1);
    btn.classList.remove('active');
    icon.classList.replace('fas', 'far');
    showToast('Eliminado de favoritos');
  } else {
    wishlist.push(id);
    btn.classList.add('active');
    icon.classList.replace('far', 'fas');
    showToast('Agregado a favoritos');
  }
}

// === QUICK VIEW ===
// CORREGIDO: usa <img> en el modal en vez de emoji
function openQuickView(id) {
  const allProducts = [...products.featured, ...products.sale, ...products.new];
  const product = allProducts.find(p => p.id === id);
  if (!product) return;

  const priceHtml = product.oldPrice
    ? `<span class="product-old-price" style="font-size:1.1rem;">Gs. ${product.oldPrice.toLocaleString()}</span>`
    : '';

  const productJson = JSON.stringify(product).replace(/'/g, "&#39;");

  modalBody.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;">
      <div style="background:linear-gradient(135deg,#f1f2f6 0%,#f8f9fa 100%);
                  border-radius:16px;overflow:hidden;min-height:300px;
                  display:flex;align-items:center;justify-content:center;">
        ${productImageTag(product.image, product.name, 'quick-view-img')}
      </div>
      <div>
        <div style="font-size:0.85rem;color:var(--color-primary);font-weight:700;
                    text-transform:uppercase;margin-bottom:8px;">${product.category}</div>
        <h2 style="font-size:1.6rem;font-weight:800;margin-bottom:12px;line-height:1.2;">
          ${product.name}
        </h2>
        <div class="product-rating" style="margin-bottom:16px;">
          ${Array(5).fill(0).map(() =>
            `<i class="fas fa-star" style="color:var(--color-secondary);"></i>`
          ).join('')}
          <span style="color:var(--color-gray-700);font-size:0.9rem;">
            (${product.reviews} opiniones)
          </span>
        </div>
        <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:20px;">
          <span style="font-size:2rem;font-weight:800;color:var(--color-primary);">
            Gs. ${product.price.toLocaleString()}
          </span>
          ${priceHtml}
        </div>
        <p style="color:var(--color-gray-700);line-height:1.6;margin-bottom:24px;">
          Producto de alta calidad disponible en Maria Paula. Ideal para fiestas, eventos
          y regalos personalizados. Consulta por stock y colores disponibles.
        </p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn btn-primary btn-lg"
                  onclick='addToCart(${productJson}); closeQuickView();'
                  style="flex:1;">
            <i class="fas fa-shopping-bag"></i> Agregar al carrito
          </button>
          <a href="https://wa.me/595981123456?text=Hola%20Maria%20Paula%2C%20quiero%20cotizar%20${encodeURIComponent(product.name)}"
             class="btn btn-outline btn-lg" target="_blank" style="flex:1;">
            <i class="fab fa-whatsapp"></i> Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  // Estilo especial para la imagen en quick view
  const qvImg = modalBody.querySelector('.quick-view-img');
  if (qvImg) {
    qvImg.style.width = '100%';
    qvImg.style.height = '100%';
    qvImg.style.minHeight = '300px';
    qvImg.style.objectFit = 'cover';
  }

  quickViewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  quickViewModal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeQuickView);
quickViewModal.addEventListener('click', (e) => {
  if (e.target === quickViewModal) closeQuickView();
});

// === TOAST ===
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3000);
}

// === PROMO TIMER ===
function updateTimer() {
  const h = document.getElementById('timerH');
  const m = document.getElementById('timerM');
  const s = document.getElementById('timerS');
  if (!h || !m || !s) return;

  let hours   = parseInt(h.textContent);
  let minutes = parseInt(m.textContent);
  let seconds = parseInt(s.textContent);

  seconds--;
  if (seconds < 0) { seconds = 59; minutes--; }
  if (minutes < 0) { minutes = 59; hours--;   }
  if (hours   < 0) { hours   = 23;             }

  h.textContent = hours.toString().padStart(2, '0');
  m.textContent = minutes.toString().padStart(2, '0');
  s.textContent = seconds.toString().padStart(2, '0');
}

// === HEADER SCROLL ===
function handleScroll() {
  header.classList.toggle('scrolled', window.scrollY > 50);
}

// === SEARCH ===
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) return;
    const allProducts = [...products.featured, ...products.sale, ...products.new];
    const matches = allProducts.filter(p => p.name.toLowerCase().includes(query));
    console.log('Resultados de busqueda:', matches);
    // TODO: mostrar dropdown con resultados
  });
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('animate-in');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.product-card, .category-card, .combo-card, .season-card, .testimonial-card'
  ).forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// Estilos de animacion inyectados dinamicamente
const animStyles = document.createElement('style');
animStyles.textContent = `
  .animate-in { opacity: 1 !important; transform: translateY(0) !important; }
  .product-image { overflow: hidden; }
  .product-img-tag { transition: transform 0.4s ease; }
  .product-card:hover .product-img-tag { transform: scale(1.05); }
`;
document.head.appendChild(animStyles);

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('featuredProducts', products.featured);
  renderProducts('saleProducts',     products.sale);
  renderProducts('newProducts',      products.new);
  renderCart();
  startSlider();
  setInterval(updateTimer, 1000);
  window.addEventListener('scroll', handleScroll);
  initScrollAnimations();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeCart();
      closeQuickView();
    }
  });
});

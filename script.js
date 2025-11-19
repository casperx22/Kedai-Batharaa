// 1. Data Menu Kopi Shop - (TAMBAH properti 'image')
const menuData = [
    { name: "Americano", category: "coffee", price: 8000, desc: "Espresso dengan air panas.", image: "images/americano.jpg" },
    { name: "Kopi Butter", category: "coffee", price: 15000, desc: "Minuman kopi yang dicampur dengan sepotong butter, menghasilkan rasa yang creamy, dan sedikit gurih.", image: "images/kopibutter.jpg" },
    { name: "Es Kopi Tiramisu", category: "coffee", price: 12000 , desc: "Minuman kopi dingin berbahan espresso yang dipadukan dengan susu krim tiramisu.", image: "images/tiramisu.jpg" },
    { name: "Es Cappuccino", category: "coffee", price: 12000, desc: "Minuman kopi dingin berbahan espresso, susu, dan foam yang menghasilkan rasa creamy.", image: "images/cappuccino.jpg" },
    { name: "Kopi Susu Gula Aren", category: "coffee", price: 15000, desc: "Latte manis dengan sirup gula aren lokal.", image: "images/gulaaren.jpg" },
    { name: "Matcha Latte", category: "noncoffee", price: 14000, desc: "Teh hijau bubuk premium dengan susu.", image: "images/matcha.jpg" },
    { name: "Red Velvet", category: "noncoffee", price: 14000, desc: "Minuman cokelat merah dengan cream cheese.", image: "images/redvelvet.jpg" },
    { name: "Cookies and cream", category: "noncoffee", price: 14000, desc: "Minuman manis dan creamy dengan potongan biskuit cokelat.", image: "images/cookiescream.jpg" },
    { name: "Chocholate", category: "noncoffee", price: 12000, desc: "Minuman manis dan creamy berbahan bubuk atau lelehan coklat yang dicampur susu.", image: "images/chocolate.jpg" },
    { name: "Cireng Ayam Suwir", category: "food", price: 10000, desc: "camilan berbahan adonan aci yang digoreng renyah dan diisi ayam suwir.", image: "images/cireng.jpg" },
    { name: "French Fries", category: "food", price: 10000, desc: "Kentang goreng klasik.", image: "images/fries.jpg" },
    { name: "Mix Platter", category: "food", price: 12000, desc: "Berisi berbagai jenis camilan seperti kentang goreng, nugget, sosis, chicken wings, dll.", image: "images/platter.jpg" }
];

// Elemen DOM (Termasuk elemen modal baru)
const menuContainer = document.querySelector('.menu-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('itemModal');
const closeBtn = document.querySelector('.close-btn');

// 2. Fungsi untuk Menampilkan Menu (Modifikasi: Tambahkan data-name)
function displayMenuItems(menuArray) {
    if (!menuContainer) return;
    menuContainer.innerHTML = ''; 
    
    menuArray.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        // Tambahkan data-name untuk identifikasi saat diklik
        menuItem.setAttribute('data-name', item.name); 

        menuItem.innerHTML = `
            <div class="item-details">
                <h4 class="item-name">${item.name}</h4>
                <p class="item-desc">${item.desc}</p>
            </div>
            <p class="price">Rp ${item.price.toLocaleString('id-ID')}</p>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// 3. Fungsi untuk Mengolah Filter
function handleFilterClick(event) {
    if (!event.target.classList.contains('filter-btn')) return;

    const selectedCategory = event.target.dataset.category;

    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    let filteredMenu = [];

    if (selectedCategory === 'all') {
        filteredMenu = menuData;
    } else {
        filteredMenu = menuData.filter(item => item.category === selectedCategory);
    }

    displayMenuItems(filteredMenu);
}

// Fungsi BARU: Membuka Modal
function openModal(itemName) {
    const item = menuData.find(i => i.name === itemName);
    if (!item || !modal) return;

    // Isi konten modal
    document.getElementById('modal-name').textContent = item.name;
    document.getElementById('modal-desc').textContent = item.desc;
    document.getElementById('modal-price').textContent = `Harga: Rp ${item.price.toLocaleString('id-ID')}`;
    document.getElementById('modal-image').src = item.image;

    // Tampilkan modal
    modal.style.display = 'block';
}


// 4. Inisialisasi & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    if (menuContainer && filterButtons.length > 0) {
        displayMenuItems(menuData);
        
        // Event Listener untuk Filter
        const menuFilterDiv = document.querySelector('.menu-filter');
        if(menuFilterDiv) {
            menuFilterDiv.addEventListener('click', handleFilterClick);
        }

        // Event Listener untuk Klik Item Menu (Membuka Modal)
        menuContainer.addEventListener('click', (event) => {
            const itemElement = event.target.closest('.menu-item');
            if (itemElement) {
                const itemName = itemElement.getAttribute('data-name');
                openModal(itemName);
            }
        });

        // Event listener untuk menutup modal
        if (closeBtn) {
            closeBtn.onclick = function() {
                modal.style.display = 'none';
            }
        }
        
        // Tutup modal jika user mengklik di luar area modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }
});

// 1. Data Menu Kopi Shop
const menuData = [
    { name: "Americano", category: "coffee", price: 8000, desc: "Espresso dengan air panas." },
     { name: "Kopi Butter", category: "coffee", price: 15000, desc: "Minuman kopi yang dicampur dengan sepotong butter, menghasilkan rasa yang creamy, dan sedikit gurih,." },
    { name: "Es Kopi Tiramisu", category: "coffee", price: 12000 , desc: "Minuman kopi dingin berbahan espresso yang dipadukan dengan susu krim tiramisu." },
    { name: "Es Cappuccino", category: "coffee", price: 12000, desc: "Minuman kopi dingin berbahan espresso, susu, dan foam yang menghasilkan rasa creamyc." },
    { name: "Kopi Susu Gula Aren", category: "coffee", price: 15000, desc: "Latte manis dengan sirup gula aren lokal." },
    { name: "Matcha Latte", category: "noncoffee", price: 14000, desc: "Teh hijau bubuk premium dengan susu." },
    { name: "Red Velvet", category: "noncoffee", price: 14000, desc: "Minuman cokelat merah dengan cream cheese." },
    { name: "Cookies and cream", category: "noncoffee", price: 14000, desc: "Minuman manis dan creamy dengan potongan biskuit cokelat." },
    { name: "Chocholate ", category: "noncoffe ", price: 12000, desc: "Minuman manis dan creamy berbahan bubuk atau lelehan coklat yang dicampur susu." },
    { name: "Cireng Ayam Suwir", category: "food", price: 10000, desc: "camilan berbahan adonan aci yang digoreng renyah dan diisi ayam suwir." },
    { name: "French Fries", category: "food", price: 10000, desc: "Kentang goreng klasik." },
    { name: "Mix Platter", category: "food", price: 12000, desc: "Berisi berbagai jenis camilan seperti kentang goreng, nugget, sosis, chicken wings, dll." }
  
];

const menuContainer = document.querySelector('.menu-container');
const filterButtons = document.querySelectorAll('.filter-btn');

// 2. Fungsi untuk Menampilkan Menu
function displayMenuItems(menuArray) {
    // Kosongkan container sebelum mengisi yang baru
    menuContainer.innerHTML = '';

    menuArray.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        menuItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
            <p class="price">Rp ${item.price.toLocaleString('id-ID')}</p>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// 3. Fungsi untuk Mengolah Filter
function handleFilterClick(event) {
    const selectedCategory = event.target.dataset.category;

    // Hapus kelas 'active' dari semua tombol
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Tambahkan kelas 'active' ke tombol yang diklik
    event.target.classList.add('active');

    let filteredMenu = [];

    if (selectedCategory === 'all') {
        filteredMenu = menuData;
    } else {
        // Filter array menuData berdasarkan kategori yang dipilih
        filteredMenu = menuData.filter(item => item.category === selectedCategory);
    }

    displayMenuItems(filteredMenu);
}

// 4. Inisialisasi: Tampilkan semua menu saat website pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menuData);
    
    // Tambahkan event listener ke semua tombol filter
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
});

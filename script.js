/// Array untuk menyimpan produk dalam keranjang
let cart = [];

// Array untuk menyimpan metode pembayaran yang tersedia
const paymentMethods = ['Kartu Kredit', 'Transfer Bank', 'E-Wallet'];

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };
    cart.push(product);
    alert(`${productName} telah ditambahkan ke keranjang!`);
    updateCartTotal();
}

// Fungsi untuk menghitung total harga keranjang
function updateCartTotal() {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    document.getElementById('cart-total').innerText = `Total: Rp ${total}`;
}

// Fungsi untuk menampilkan opsi metode pembayaran
function displayPaymentMethods() {
    const paymentSelect = document.getElementById('payment-method');
    paymentMethods.forEach(method => {
        const option = document.createElement('option');
        option.value = method;
        option.textContent = method;
        paymentSelect.appendChild(option);
    });
}

// Fungsi untuk memproses pembayaran
function processPayment() {
    const selectedMethod = document.getElementById('payment-method').value;
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    
    if (selectedMethod && cart.length > 0) {
        // Tampilkan konfirmasi pembayaran
        const confirmPayment = confirm(`Total pembayaran: Rp ${total}\nMetode pembayaran: ${selectedMethod}\n\nKlik OK untuk membayar`);
        
        if (confirmPayment) {
            alert(`Pembayaran sebesar Rp ${total} berhasil diproses menggunakan ${selectedMethod}`);
            cart = []; // Mengosongkan keranjang setelah pembayaran
            updateCartTotal();
            document.getElementById('payment-method').value = ''; // Reset pilihan pembayaran
        }
    } else if (cart.length === 0) {
        alert('Keranjang Anda kosong. Silakan tambahkan produk terlebih dahulu.');
    } else {
        alert('Silakan pilih metode pembayaran.');
    }
}

// Panggil fungsi ini saat halaman dimuat
displayPaymentMethods();
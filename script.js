document.getElementById('year').textContent = new Date().getFullYear();

// Simple demo connect-wallet simulation
const connectBtn = document.querySelector('.nav .btn');
connectBtn.addEventListener('click', () => {
  connectBtn.textContent = 'Wallet: 0xAb...3f4c';
  connectBtn.disabled = true;
  connectBtn.style.opacity = 0.95;
});

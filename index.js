const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : ''}">${order.status}</td>
        <td class="success">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

// Get all sidebar links
const sidebarLinks = document.querySelectorAll('aside .sidebar a');

// Function to remove active class from all links and add to the clicked one
function makeActive(event) {
    // Prevent default link behavior
    

    // Loop through all links and remove active class
    sidebarLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked link
    event.currentTarget.classList.add('active');
}

// Attach event listener to each sidebar link
sidebarLinks.forEach(link => {
    link.addEventListener('click', makeActive);
});

// Assume this function is called when the user logs in
function handleLogin() {
    // Find the Dashboard menu link element
    const dashboardLink = document.querySelector('.dashboard-link');
    
    // Add the "active" class to the Dashboard menu link
    dashboardLink.classList.add('active');
}

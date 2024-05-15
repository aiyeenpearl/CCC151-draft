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
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

// Get all sidebar links
const sidebarLinks = document.querySelectorAll('aside .sidebar a');

// Function to remove active class from all links and add to the clicked one
function makeActive(event) {
    // Prevent default link behavior
    event.preventDefault();

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

// Function to change the content of user profile
function changeUserProfileContent() {
    // Get the user profile element
    const userProfile = document.querySelector('.user-profile');
    
    // Check if user profile element exists
    if (userProfile) {
        // Check if the current content is the first content
        const currentContent = userProfile.innerHTML.trim();
        const firstContent = `
            <div class="logo">
                <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
                <dotlottie-player src="https://lottie.host/13fa50f4-c231-47d1-a6ec-a21fe9ff7ae9/G3gsaqZFOr.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
                <p>Hey EcoRiders! Every pedal pushes for a greener campus! Ride with purpose, cut emissions, and fuel sustainability - every pedal counts!🚲🌏</p>
            </div>
        `;
        
        // Update content to the second content if currently displaying the first content
        if (currentContent === firstContent) {
            userProfile.innerHTML = `
                <div class="logo">
                    <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
                    <dotlottie-player src="https://lottie.host/3efca181-b921-4815-89f6-fd220f2cc030/BERdZW7CTq.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
                    <p>gwapa gyud ko🚲🌏</p>
                </div>
            `;
        } else {
            // Revert back to the first content if currently displaying the second content
            userProfile.innerHTML = firstContent;
        }
    }
}

// Call the function initially to set the first content
changeUserProfileContent();

// Set interval to change the content every 5 seconds
setInterval(changeUserProfileContent, 5000);



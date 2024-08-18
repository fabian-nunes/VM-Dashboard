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


Cves.forEach(order => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${order.cve}</td>
        <td>${order.cvss}</td>
        <td>${order.vendor}</td>
        <td>${order.exploit === true ? 'Yes' : 'No'}</td>
        <td class="${order.status === 'Confirmed' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    document.querySelector('table tbody').appendChild(tr);
});
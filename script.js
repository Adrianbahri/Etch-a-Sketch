function RColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function effect(div){
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = RColor();
    });
}

document.getElementById('inputForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const sz = document.getElementById('numberInput').value;
    const grid = document.getElementById('container');
    grid.innerHTML = '';
    for (let i = 1; i <= sz; i++) {
        for (let j = 1; j <= sz; j++) {
            const div = document.createElement('div');
            div.className = 'item';
            div.style.height = `${600 / sz}px`;
            div.style.width = `${600 / sz}px`;
            grid.appendChild(div);
            effect(div);
        }
    }
});

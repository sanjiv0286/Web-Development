let para = document.getElementById('para');
para.addEventListener('mouseover', function run() {
    alert('mouse inside')
        // console.log('Mouse Inside')
});

para.addEventListener('mouseout', function run() {
    alert('mouse outside')
        // console.log('Mouse now went outside')
});

function toggleHide() {
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if (para.style.display != 'none') {
        para.style.display = 'none';
    } else {
        para.style.display = 'block';
    }
}
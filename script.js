/* ===== main.js ===== */

/* ===== 13 Tools Modal Setup ===== */
let tools = [
  'tools/sofapuffy.html',
  'tools/wallpaper.html',
  'tools/bhartiyabaithak.html',
  'tools/artificialgrass.html',
  'tools/bedback.html',
  'tools/blinds.html',
  'tools/carpet.html',
  'tools/curtaintrack.html',
  'tools/curtains.html',
  'tools/mattress.html',
  'tools/sofa.html',
  'tools/sofateapoy.html',
  'tools/invoicefinal.html'
];

/* Open modal function */
function openModal(index){
    let iframe = document.getElementById('toolFrame');
    iframe.src = tools[index];
    document.getElementById('modal').style.display = 'flex';
}

/* Close modal function */
function closeModal(){
    document.getElementById('modal').style.display = 'none';
    document.getElementById('toolFrame').src = '';
}

/* ===== Optional: Smooth Scroll for CTA Buttons ===== */
document.querySelectorAll('.cta-buttons button').forEach(button => {
    button.addEventListener('click', (e) => {
        const targetId = e.target.getAttribute('onclick').match(/'#(\w+)'/);
        if(targetId && document.getElementById(targetId[1])){
            document.getElementById(targetId[1]).scrollIntoView({behavior:'smooth'});
        }
    });
});

/* ===== Optional: Close modal on ESC key ===== */
document.addEventListener('keydown', function(e){
    if(e.key === "Escape"){
        closeModal();
    }
});
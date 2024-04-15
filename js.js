let svgns = "http:/www.w3.org/2000/svg";
let svg = document.createElementNS(svgns, 'svg');
svg.setAttribute('width', '500');
svg.setAttribute('height', '500');
console.log(svg.getAttribute('height'));

var map = document.getElementById("map");
var mouse_pos = document.getElementById("mouse-pos");
var masses = 0;
const colors = ["red", "blue", "green", "yellow", "black", "brown", "orange"]

function add_mass() {
    masses++;
    let circle = document.createElementNS(svgns, 'circle');
    circle.setAttribute('cx', '50');
    circle.setAttribute('cy', '50');
    circle.setAttribute('r', '15');
    circle.setAttribute('stroke', 'black');
    circle.setAttribute('stroke-width', '0');
    circle.setAttribute('fill', colors[(masses-1)%colors.length])
    svg.appendChild(circle);
}
map.appendChild(svg);
map.addEventListener("mousemove", function(e){
    let mouseX = String(e.offsetX);
    let mouseY = String(map.offsetHeight - e.offsetY);
    mouse_pos.innerHTML = mouseX.concat(", ").concat(mouseY);
})
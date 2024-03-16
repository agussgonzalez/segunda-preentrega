alert("Encuentra tu color deseado y luego ingresa los valores para copiar el id del mismo :)")
const redRange = document.getElementById('red');
const greenRange = document.getElementById('green');
const blueRange = document.getElementById('blue');
const colorBox = document.getElementById('colorBox');

function actualizarColor() {
    const redValue = redRange.value;
    const greenValue = greenRange.value;
    const blueValue = blueRange.value;

    const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorBox.style.backgroundColor = color;

    console.log('RGB: ${color.red}, ${color.green}, ${color.blue}');
};

redRange.addEventListener('input', actualizarColor);
greenRange.addEventListener('input', actualizarColor);
blueRange.addEventListener('input', actualizarColor);
redRange.addEventListener('input', function () {
    redValue.textContent = redRange.value;
})
greenRange.addEventListener('input', function () {
    greenValue.textContent = greenRange.value;
})
blueRange.addEventListener('input', function () {
    blueValue.textContent = blueRange.value;
})
function copyColor() {
    var colorInput = document.getElementById('color-input');
    var color = colorInput.value;
    navigator.clipboard.writeText(color);
    alert('Color copiado: ' + color);
}
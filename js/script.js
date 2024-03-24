alert("Encuentra tu color deseado y luego ingresa los valores para copiar el id del mismo :)")
const redRange = document.getElementById('red');
const greenRange = document.getElementById('green');
const blueRange = document.getElementById('blue');
const colorBox = document.getElementById('colorBox');

const colorObj = {
    red: redValue,
    green: greenValue,
    blue: blueValue
};

const colores = [
    { red: 255, green: 0, blue: 0 },
    { red: 0, green: 255, blue: 0 },
    { red: 0, green: 0, blue: 255 }
];

function actualizarColor() {
    const redValue = redRange.value;
    const greenValue = greenRange.value;
    const blueValue = blueRange.value;

    const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorBox.style.backgroundColor = color;

    console.log('RGB: ${color.red}, ${color.green}, ${color.blue}');
};

function buscarColorPorRGB(red, green, blue) {
    return colores.find(color => color.red === red && color.green === green && color.blue === blue);
}

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
    let colorInput = document.getElementById('color-input');
    let color = colorInput.value;
    navigator.clipboard.writeText(color);
    alert('Color copiado: ' + color);
}

const buscarColores= {
    "rojo": "rgb(255, 0, 0)",
    "verde": "rgb(0, 255, 0)",
    "azul": "rgb(0, 0, 255)",
    "amarillo": "rgb(255, 255, 0)",
    "rosa": "rgb(255, 192, 203)",
};

function buscarColor(color) {
    if (colorBox.style.backgroundColor) {
        colorBox.style.backgroundColor = buscarColor;
        console.log("Color encontrado" || $[color]);
    } else {
        console.log("Color no encontrado" || $[color]);
    }
}

// Ejemplo de uso:
buscarColor("rojo"); // Busca el color rojo en la lista de colores predefinidos

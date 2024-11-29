// Result Board
const resultBoard = document.getElementById("result_board");

// Triangle
const triangleBtn = document.getElementById("triangle");
const triangleBase = document.getElementById("triangleBase")
const triangleHeight = document.getElementById("triangleHeight");
triangleBtn.addEventListener("click", function () {
    const base = Number(triangleBase.value);
    const height = Number(triangleHeight.value);
    const result = 0.5 * base * height;

    const div = document.createElement("div");

    div.innerHTML = `
        <div class="flex justify-between items-center p-2">
            <h3 class="text-xl">Triangle</h3>
            <span class="text-xl">${result}</span>
        </div>
    `;
    resultBoard.appendChild(div);

    triangleBase.value = "";
    triangleHeight.value = "";

});


// Rectangle
const rectangleBtn = document.getElementById("rectangleBtn");
const rectangleWidth = document.getElementById("rectangleWidth");
const rectangleLength = document.getElementById("rectangleLength");

rectangleBtn.addEventListener("click", function () {
    const width = Number(rectangleWidth.value);
    const length = Number(rectangleLength.value);
    const result = width * length;

    const div = document.createElement("div");

    div.innerHTML = `
        <div class="flex justify-between items-center p-2">
            <h3 class="text-xl">Rectangle</h3>
            <span class="text-xl">${result}</span>
        </div>
    `;
    resultBoard.appendChild(div);

    rectangleWidth.value = "";
    rectangleLength.value = "";

});

// Parallelogram
const paraBtn = document.getElementById("paraBtn");
const paraBase = document.getElementById("paraBase");
const paraHeight = document.getElementById("paraHeight");

paraBtn.addEventListener("click", function () {
    const base = Number(paraBase.value);
    const height = Number(paraHeight.value);
    const result = base * height;

    const div = document.createElement("div");

    div.innerHTML = `
        <div class="flex justify-between items-center p-2">
            <h3 class="text-xl">Parallelogram</h3>
            <span class="text-xl">${result}</span>
        </div>
    `;
    resultBoard.appendChild(div);

    paraBase.value = "";
    paraHeight.value = "";
});

// Rhombus
const rhombusBtn = document.getElementById("rhombusBtn");
const rhombusBase = document.getElementById("rhombusBase");
const rhombusHeight = document.getElementById("rhombusHeight");

rhombusBtn.addEventListener("click", function () {
    const base = Number(rhombusBase.value);
    const height = Number(rhombusHeight.value);
    const result = 0.5 * base * height;

    const div = document.createElement("div");

    div.innerHTML = `
        <div class="flex justify-between items-center p-2">
            <h3 class="text-xl">Rhombus</h3>
            <span class="text-xl">${result}</span>
        </div>
    `;
    resultBoard.appendChild(div);

    rhombusBase.value = "";
    rhombusHeight.value = "";

});

// Pentagon
const penBtn = document.getElementById("penBtn");
const penPerimeter = document.getElementById("penPerimeter");
const penDiagonal = document.getElementById("penDiagonal");

penBtn.addEventListener("click", function () {
    const perimeter = Number(penPerimeter.value);
    const diagonal = Number(penDiagonal.value);
    const result = 0.5 * perimeter * diagonal;

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="flex justify-between items-center p-2">
            <h3 class="text-xl">Pentagon</h3>
            <span class="text-xl">${result}</span>
        </div>
    `;
    resultBoard.appendChild(div);

    penPerimeter.value = "";
    penDiagonal.value = "";

});

// Ellipse
const ellipseBtn = document.getElementById("ellipseBtn");
const aAxis = document.getElementById("aAxis");
const bAxis = document.getElementById("bAxis");

ellipseBtn.addEventListener("click", function () {
    const a = Number(aAxis.value);
    const b = Number(bAxis.value);
    const result = Math.PI * a * b;

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="flex justify-between items-center p-2">
            <h3 class="text-xl">Ellipse</h3>
            <span class="text-xl">${result.toFixed(5)}</span>
        </div>
    `;
    resultBoard.appendChild(div);

    aAxis.value = "";
    bAxis.value = "";

});
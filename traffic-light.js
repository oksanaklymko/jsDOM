
const lights = {
    red: 'red',
    yellow: 'yellow',
    green: 'green',
};

const classesBylight = {
    [lights.red]: 'red',
    [lights.yellow]: 'yellow',
    [lights.green]: 'green',
}

const nextLightbyLight = {
    [lights.red]: lights.green,
    [lights.green]: lights.yellow,
    [lights.yellow]: lights.red,
}

let currentLight = lights.red;

function switchLight (node) {
    const currentClass = classesBylight[currentLight];
    const nextLight = nextLightbyLight[currentLight];
    const nextClass = classesBylight[nextLight];

    currentLight = nextLightbyLight[currentLight]
    node.classList.replace(currentClass, nextClass);
}

function initLight(node) {
    node.classList.add(classesBylight[currentLight]);
}


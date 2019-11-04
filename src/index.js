
let currentHeight = 0;
let currentHeightIndex = 0;

let transitionComplete = false;

const calculateHeight = () => {
    if (currentHeightIndex > 100) return;

    if (currentHeight !== window.innerHeight) {
        currentHeight = window.innerHeight;
        document.documentElement.style.setProperty('--vh', window.innerHeight + 'px');
    }

    currentHeightIndex += 1;
};

const update = () => calculateHeight();

export default () => {
    window.addEventListener('load', update);
    window.addEventListener('resize', update);
};

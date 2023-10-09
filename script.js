console.log("Hello world")

function domManipulation () {
    const rootElement = document.querySelector('#root')
    console.log(rootElement)
    rootElement.innerHTML = "this is done by dom manipulation"
}

function logClick() {
    console.log('clicked')
}

let tickCount = 0

function logTick() {
    console.log(`tick ${tickCount}`)
    tickCount++
}

window.addEventListener('load', domManipulation)
window.addEventListener('click', logClick)

window.setInterval(logTick, 1000)
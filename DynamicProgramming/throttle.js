function throttle(func, delay) {
    let lastExecTime = 0;
    return function (...args) {
        const now = Date.now()
        if (now - lastExecTime >= delay) {
            func.apply(this, args)
            lastExecTime = now
        }
    }
}

function scrollHandler() {
    console.log("Scrolled")
}

const throttledScroll = throttle(scrollHandler, 100)

// window.addEventListener('scroll', throttledScroll)
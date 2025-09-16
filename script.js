const rawr = new Audio()
rawr.src = 'lynx.mp3'

console.log('123');


function say() {
    
    if (rawr.paused) {
        rawr.currentTime = 0
        rawr.play()
        
        
    } else {
        rawr.pause()
    }

    
}
const btn = document.getElementById('btn')
btn.addEventListener('click',say)

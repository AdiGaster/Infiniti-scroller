const canvas = document.querySelector('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, 1600, 900)

ctx.fillStyle = 'green'
ctx.fillRect(10, 10, 100, 100)

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    ctx.fillRect(i * 50 + 50, 450, 20, 20)
  }, i * 1000)
}

// setInterval - do nauki
//

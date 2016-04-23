// import $ from 'jquery'
import Debugger from './debugger'


function drawScreen(canvas) {
  const context = canvas
  context.fillStyle = '#ffffaa'
  context.fillRect(0, 0, 400, 400)

  context.fillStyle = '#000000'
  context.font = '20px Sans-Serif'
  context.textBaseline = 'top'
  context.fillText('Hello World!', 195, 80)

  context.strokeStyle = '#000000'
  context.strokeRect(5, 5, 490, 290)
}

function canvasApp() {
  // const canvas = $('#canvas')
  const context = document.getElementById('canvas').getContext('2d')

  Debugger.log('Drawing canvas')

  drawScreen(context)
}

function endWindowLoaded() {
  canvasApp()
}

window.addEventListener('load', endWindowLoaded, false)

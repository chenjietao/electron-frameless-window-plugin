// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { remote } = require('electron')
const curWin = remote.getCurrentWindow()

const closeBtn = document.getElementById('close')
const maxBtn = document.getElementById('max')
const minBtn = document.getElementById('min')

closeBtn.onclick = () => {
  curWin.close()
}

minBtn.onclick = () => {
  curWin.minimize()
}

maxBtn.onclick = () => {
  if (curWin.isMaximized()) {
    curWin.unmaximize()
  } else {
    curWin.maximize()
  }
}

curWin.on('maximize', () => {
  maxBtn.className = 'restore-btn'
})

curWin.on('unmaximize', () => {
  maxBtn.className = 'max-btn'
})

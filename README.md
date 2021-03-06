Fix the problems about electron frameless and transparent window, such as using maximize() can not emit 'maximize' event.

# Usage
```javascript
// main.js
const { app } = require('electron')
const { plugin } = require('electron-frameless-window-plugin')

app.on('ready', () => {
  ...
})

plugin({
  setGlobal: true
}) // apply to each window
```
Or
```javascript
// app.js
...

function createWindow () {
  const framelessPlugin = require('electron-frameless-window-plugin')
  const mainWindow = new BrowserWindow(windowOptions)

  framelessPlugin.plugin({
    browserWindow: mainWindow,
    fixDragRegion: false
  }) // apply to mainWindow
}

app.on('ready', () => {
  createWindow()
})
```

# Options
* **setGlobal** *(default: false)* Apply to each window through 'browser-window-created' event
* **fixTransparent** *(default: true)* Rewrite transparent window instance's methods (`.getNormalBounds()`、`.maximize()`、`.unmaximize()`、`.isMaximized()`). Fix where 'maximize' and 'unmaximize' events cannot be emitted when calling maximize() and unmaximize() methods. Also fix isMaximized() and getNormalBounds() methods.
* **fixDragRegion** *(default: true)* Fix the behavior double clicking on the title bar and dragging the title bar when window is maximized
* **noDragRegionMenu** *(default: true)* Disable to display window menu when right click on the title bar.
* **easyHideFromFullScreen** *(default: true)* Add window instance method `.hideFromFullScreen()`. It is useful on macOS when we click the close button and want the window to be hidden instead of closed
* **browserWindow** *(default: undefined)* The BrowserWindow instance you need to apply single.

const { app, BrowserWindow } = require('electron')

let loginWindow = null

function createLoginWindow () {
  loginWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true
    }
  })

  loginWindow.loadFile('login.html')

  loginWindow.on('closed', () => {
    loginWindow = null
  })
}

app.on('ready', createLoginWindow)

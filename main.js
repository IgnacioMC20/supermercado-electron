const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');

// * ventanas

let login;
const createWindow = () => {
  login = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })
  login.loadFile('index.html')
}

let productList;
const createWindowProductList = () => {
  productList = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })
  productList.loadFile('product-list.html')
}

let pedidos;
const createWindowPedidos = () => {
  pedidos = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })
  pedidos.loadFile('pedidos.html')
}

let edicion;
const createWindowEdit = () => {
  edicion = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })
  edicion.loadFile('edit.html')
}


// * metodos
ipcMain.on('registroValido', (event, args) => {
  console.log({args})
  createWindowWelcome()
  productList.webContents.on('did-finish-load', () => {
    productList.webContents.send('inicioCorrecto', args)
  })
})


app.whenReady().then(createWindow)
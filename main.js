const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');

// * ventanas

let login;
const createWindow = () => {
  login = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), './scripts/preload.js')
    }
  })
  login.loadFile('./pages/login.html')
}

let productList;
const createWindowProductList = () => {
  productList = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), './scripts/preload.js')
    }
  })
  productList.loadFile('./pages/product-list.html')
}

let pedidos;
const createWindowPedidos = () => {
  pedidos = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), './scripts/preload.js')
    }
  })
  pedidos.loadFile('./pages/pedidos.html')
}

let edicion;
const createWindowEdit = () => {
  edicion = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), './scripts/preload.js')
    }
  })
  edicion.loadFile('./pages/edit.html')
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
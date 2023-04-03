const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const { loginFunction, getProducts } = require('./scripts/sequelize');


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
ipcMain.on('login', async(event, args) => {
  console.log({args})
  const user = await loginFunction(args.employeeId, args.password)
  // console.log(user)
  if(!user){
    // login.webContents.send('show-alert', 'Usuario o contraseña incorrectos');
    console.log('usuario o contraseña incorrectos')
    return
  }

  // obtener productos de la base de datos
  // const products = await getProducts()

  login.close()
  createWindowProductList()

  // productList.webContents.on('did-finish-load', () => {
  //   productList.webContents.send('load-products', products);
  // });
});


app.whenReady().then(createWindow)
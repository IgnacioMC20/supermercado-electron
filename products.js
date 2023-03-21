function createProductsWindow () {
    productsWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    productsWindow.loadFile('products.html')
  
    productsWindow.on('closed', () => {
      productsWindow = null
    })
  }
  
function createEditWindow () {
    editWindow = new BrowserWindow({
      width: 400,
      height: 500,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    editWindow.loadFile('edit.html')
  
    editWindow.on('closed', () => {
      editWindow = null
    })
  }
  
  function createOrdersWindow () {
    ordersWindow = new BrowserWindow({
      width: 500,
      height: 400,
      webPreferences: {
        nodeIntegration: true
      }
    })
}  
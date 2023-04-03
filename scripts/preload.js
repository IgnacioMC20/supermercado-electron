const { contextBridge, ipcRenderer } = require("electron");
const { getProducts } = require("./sequelize");

contextBridge.exposeInMainWorld('comunicacion', {
    login: (data) => ipcRenderer.send('login', data),
    inicioCorrecto: (callback) => ipcRenderer.on('inicioCorrecto', callback),
    alertShow: (val) => ipcRenderer.send('alert-show', val),
    loadProducts: async () => {
        const products = await getProducts();
        return products;
    }
})


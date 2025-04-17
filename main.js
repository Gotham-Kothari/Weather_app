const path = require('path');
const {app, BrowserWindow} = require('electron');
const isDev = process.env.NODE_ENV !== 'development';
function createWindow() {
    const newWindow = new BrowserWindow({
        title: 'Weather App',
        // width: isDev? 1000 : 500,
        width: 600,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, "config.js"),
            contextIsolation: true,
            nodeIntegration: false
        }
    });
    // if(isDev) {
    //     newWindow.webContents.openDevTools();
    // }
    newWindow.loadFile(path.join(__dirname, 'index.html'));
}
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
})
app.on('window-all-closed', () => {
    if(process.platform !== "darwin"){
        app.quit()
    }
})

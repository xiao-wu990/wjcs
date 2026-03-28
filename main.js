const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });
    win.loadURL('https://xiao-wu990.github.io/wjcs');
}

app.whenReady().then(createWindow);
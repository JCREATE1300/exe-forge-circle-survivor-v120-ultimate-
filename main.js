const { app, BrowserWindow } = require('electron');
app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 1200, height: 800, webPreferences: { contextIsolation: true } });
  win.loadFile('original.html');
});
app.on('window-all-closed', () => app.quit());
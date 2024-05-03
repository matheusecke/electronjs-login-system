const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
  })

  win.loadFile('index.html')  //Pagina que é exibida em primeiro
}

app.whenReady().then(createWindow)
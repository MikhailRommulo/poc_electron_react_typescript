const electron = require("electron");
const {app, BrowserWindow} = electron;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        title: 'my-electron-app',
        fullscreen: true,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
        },
    });
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.setMenuBarVisibility(false);
    mainWindow.on("closed", () => (mainWindow = null));
    // Open the DevTools.
    if (isDev) {
        mainWindow.webContents.openDevTools({mode: 'detach'});
    }
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

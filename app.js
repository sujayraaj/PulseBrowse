const {app, BrowserWindow} = require('electron');

let win

function createWindow(){
	win = new BrowserWindow({width:800,height:600, menubar:false});

	win.loadURL('file://'+__dirname+'/index.html');

	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});

}

app.on('ready',createWindow);

app.on('browser-window-created',(e,window)=>{ window.setMenu(null)} );

app.on('window-all-closed', () => {
	if(process.platform != 'darwin'	){
		app.quit();
	}
});
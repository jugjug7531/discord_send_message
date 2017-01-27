'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

app.on('ready', () => {
  win = new BrowserWindow({width:800,height:600});
  win.loadURL('file://' + __dirname + '/index.html');

  win.on('closed', function () {
  win = null;
});
});

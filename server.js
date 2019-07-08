/**
 * Socket.ioを使用したポンゲーム
 * 
 */
 
 //--------------------------------------
// 定数
//--------------------------------------
const DOCUMENT_ROOT = __dirname + "/htdocs/";

//--------------------------------------
// モジュール読み込み
//--------------------------------------
const port = 3000;
const app  = require("express")();
const http = require("http").Server(app);
const io   = require("socket.io")(http);

//--------------------------------------
// Webサーバ
//--------------------------------------
app.get("/", (req, res)=>{
  res.sendFile(DOCUMENT_ROOT + "index.html");		// タイトル画面
});
app.get("/matching", (req, res)=>{
	res.sendFile(DOCUMENT_ROOT + "matching.html");	// マッチング画面
})
http.listen(port, ()=>{
  console.log(`listening on *:${port}`);
});

//--------------------------------------
// Socket.io
//--------------------------------------
// 定数
const MAX_WIDTH  = 400;     // 横幅
const MAX_HEIGHT = 300;     // 高さ

// プレイヤー情報 (マスター)
let CHAR_LIST = {};
let ZINDEX = 1000;          //レイヤーの順番
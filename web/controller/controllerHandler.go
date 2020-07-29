package controller

import (
	"fmt"
	"net/http"

	//"html"
	"bytes"
	"encoding/json"
	"log"

	"github.com/hyperledger/uni-utils/service"
)

type Application struct {
	Fabric *service.ServiceSetup
}

func (app *Application) IndexView(w http.ResponseWriter, r *http.Request) {
	showView(w, r, "index.html", nil)
}

func (app *Application) SetInfoView(w http.ResponseWriter, r *http.Request) {
	showView(w, r, "setInfo.html", nil)
}

func (app *Application) SetInfo(w http.ResponseWriter, r *http.Request) {
	key := r.FormValue("key")
	value := r.FormValue("value")

	// 调用业务层, 反序列化
	transactionID, err := app.Fabric.AddRecord(key, value)

	// 封装响应数据
	data := &struct {
		Flag bool
		Msg  string
	}{
		Flag: true,
		Msg:  "",
	}
	if err != nil {
		data.Msg = err.Error()
	} else {
		data.Msg = "did registration successful: " + transactionID
	}

	// 响应客户端
	showView(w, r, "setInfo.html", data)
}

func (app *Application) QueryInfo(w http.ResponseWriter, r *http.Request) {
	// 获取提交数据
	key := r.FormValue("key")

	// 调用业务层, 反序列化
	msg, err := app.Fabric.SearchRecord(key)
	if err != nil {
		msg = `{"error": "no information"}`
	}
	// 响应客户端
	var prettyJSON bytes.Buffer
	err = json.Indent(&prettyJSON, []byte(msg), "", "\t")
	if err != nil {
		log.Println("JSON parse error: ", err)
		return
	}
	fmt.Fprintf(w, string(prettyJSON.Bytes()))
	// showView(w, r, "queryReq.html", data)
}

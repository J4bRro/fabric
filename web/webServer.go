package web

import (
	"fmt"
	"net/http"

	"github.com/hyperledger/uni-utils/web/controller"
)

func WebStart(app *controller.Application) {

	fs := http.FileServer(http.Dir("web/static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", app.SetInfoView)
	http.HandleFunc("/enroll", app.SetInfo)
	http.HandleFunc("/resolver", app.QueryInfo)

	fmt.Println("启动Web服务, 监听端口号: 5002")

	err := http.ListenAndServe(":5002", nil)
	if err != nil {
		fmt.Println("启动Web服务错误")
	}

}

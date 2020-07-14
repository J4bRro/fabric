# Fabric区块链功能封装

```go
"github.com/J4bRro/fabric/sdkInit"
"github.com/J4bRro/fabric/service"
```

## 一.package sdkInit

### fabricInitInfo.go

封装`InitInfo`数据结构，结构中包含通道ID、通道配置文件等信息

```go
type InitInfo struct {
	ChannelID      string	# 指定通道ID
	ChannelConfig  string	# 指定通道配置文件
	OrgAdmin       string	# 指定组织Admin
	OrgName        string	# 指定组织名
	OrdererOrgName string	# 指定Orderer节点所使用域名
	OrgResMgmt     *resmgmt.Client	# 组织资源管理器

	ChaincodeID      string	# 指定链码ID
	ChaincodeVersion string	# 指定链码版本号
	ChaincodeGoPath  string # 指定GOPATH
	ChaincodePath    string # 指定链码所在路径
	UserName         string # 指定组织内使用的用户名
}
```

注：所有参数除OrgResMgmt外，都需事先指定完成后执行后续其他功能。

### start.go

***核心** go-sdk初始化以及链码安装实例化等功能

#### SetupSDK

*初始化Fabric SDK*

参数说明

| param       | 说明                                   | 类型      |
| ----------- | -------------------------------------- | --------- |
| ConfigFile  | 连接fabric节点配置文件路径             | string    |
| initialized | 标识sdk是否被实例化，false即进行实例化 | bool      |
| info        | 指定sdk要操作的节点用户及链码等信息    | *InitInfo |

返回值说明

| 返回值类型        | 说明                    |
| ----------------- | ----------------------- |
| *fabsdk.FabricSDK | 返回被实例化后的sdk对象 |
| error             | 返回报错信息            |

#### CreateAndJoinChannel

*创建通道并加入通道*

参数说明

| param | 说明                                | 类型              |
| ----- | ----------------------------------- | ----------------- |
| sdk   | 实例化后的sdk对象                   | *fabsdk.FabricSDK |
| info  | 指定sdk要操作的节点用户及链码等信息 | *InitInfo         |

返回值说明

| 返回值类型 | 说明         |
| ---------- | ------------ |
| error      | 返回报错信息 |

#### InstallAndInstantiateCC

*安装链码并实例化链码*

参数说明

| param | 说明                                | 类型              |
| ----- | ----------------------------------- | ----------------- |
| sdk   | 实例化后的sdk对象                   | *fabsdk.FabricSDK |
| info  | 指定sdk要操作的节点用户及链码等信息 | *InitInfo         |

返回值说明

| 返回值类型 | 说明         |
| ---------- | ------------ |
| error      | 返回报错信息 |

#### CreateClient

*创建应用通道客户端，可使用此客户端调用链码*

参数说明

| param | 说明                                | 类型              |
| ----- | ----------------------------------- | ----------------- |
| sdk   | 实例化后的sdk对象                   | *fabsdk.FabricSDK |
| info  | 指定sdk要操作的节点用户及链码等信息 | *InitInfo         |

返回值说明

| 返回值类型 | 说明         |
| ---------- | ------------ |
| error      | 返回报错信息 |

## 二.package service

封装链码的增删改查等功能

## chaincodeFunc.go

***核心**封装链码功能

#### AddRecord

*增加记录*

参数说明

| param | 说明 | 类型   |
| ----- | ---- | ------ |
| key   | 键   | string |
| value | 键值 | string |

返回值说明

| 返回值类型 | 说明           |
| ---------- | -------------- |
| string     | 返回执行交易ID |
| error      | 返回报错信息   |

#### DelRecord

*删除记录*

参数说明

| param | 说明 | 类型   |
| ----- | ---- | ------ |
| key   | 键   | string |

返回值说明

| 返回值类型 | 说明           |
| ---------- | -------------- |
| string     | 返回执行交易ID |
| error      | 返回报错信息   |

#### UpdateRecord

*更新记录*

参数说明

| param | 说明 | 类型   |
| ----- | ---- | ------ |
| key   | 键   | string |
| value | 键值 | string |

返回值说明

| 返回值类型 | 说明           |
| ---------- | -------------- |
| string     | 返回执行交易ID |
| error      | 返回报错信息   |

#### SearchRecord

*查找记录*

参数说明

| param | 说明 | 类型   |
| ----- | ---- | ------ |
| key   | 键   | string |

返回值说明

| 返回值类型 | 说明               |
| ---------- | ------------------ |
| string     | 返回键所对应的键值 |
| error      | 返回报错信息       |

## 使用示例

```go
package main

import (
	"fmt"
	"os"

	"github.com/J4bRro/fabric/sdkInit"
	"github.com/J4bRro/fabric/service"
)

const (
	configFile  = "config.yaml"
	initialized = false
	chaincodeID = "simpleCC"

	// dirName = "uni-utils"
)

func main() {

	initInfo := &sdkInit.InitInfo{

		ChannelID:     "mychannel",
		ChannelConfig: os.Getenv("GOPATH") + "/src/fabric-test/channel-artifacts/channel.tx",

		OrgAdmin:       "Admin",
		OrgName:        "Org1",
		OrdererOrgName: "orderer.example.com",

		ChaincodeID:      chaincodeID,
		ChaincodeVersion: "1.0",
		ChaincodeGoPath:  os.Getenv("GOPATH"),
		ChaincodePath:    "fabric-test/chaincode/",
		UserName:         "User1",
	}

	sdk, err := sdkInit.SetupSDK(configFile, initialized, initInfo)
	if err != nil {
		fmt.Printf(err.Error())
		return
	}

	defer sdk.Close()

	// err = sdkInnit.CreateAndJoinChannel(sdk, initInfo)
	// if err != nil {
	// 	fmt.Println(err.Error())
	// 	return
	// }

	// channelClient, err := sdkInit.InstallAndInstantiateCC(sdk, initInfo)
	// if err != nil {
	// 	fmt.Println(err.Error())
	// 	return
	// }

	channelClient, err := sdkInit.CreateClient(sdk, initInfo)
	if err != nil {
		fmt.Println(err.Error())
		return
	}

	serviceSetup := service.ServiceSetup{
		ChaincodeID: chaincodeID,
		Client:      channelClient,
	}

	msg, err := serviceSetup.AddRecord("test1", "test1") //增加一条键为test1，键值为test1的记录，并返回交易ID
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("add is ok: " + msg)
	}

	msg, err = serviceSetup.AddRecord("test2", "test2") //增加一条键为test2，键值为test2的记录，并返回交易ID
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("add is ok: " + msg)
	}

	msg, err = serviceSetup.DelRecord("test1") //删除一条键为test1的记录，并返回交易ID
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("del is ok: " + msg)
	}

	msg, err = serviceSetup.UpdateRecord("test2", "test1") //将键test2的所对应的键值替换为test1，并返回交易ID
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("update is ok: " + msg)
	}

	msg, err = serviceSetup.SearchRecord("test2") //查找键test2所对应的键值，并返回键值
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("search is ok: " + msg)
	}
```

使用示例的目录树

fabric-test
├── chaincode	//放置链码，可选项。若需要安装并实例化链码则放置链码
│   └── simpleCC.go
├── channel-artifacts	//通道初始配置文件，必选项。使用区块链环境原始文件
│   ├── channel.tx
│   ├── genesis.block
│   ├── Org1MSPanchors.tx
│   └── Org2MSPanchors.tx
├── config.yaml	//sdk配置文件，必选项。
├── crypto-config	//区块链节点通信密码学材料，必选项。使用区块链环境原始文件
│   ├── ordererOrganizations
│   │   └── example.com
│   └── peerOrganizations
│       ├── org1.example.com
│       ├── org2.example.com
│       ├── org3.example.com
│       └── org4.example.com
├── fabric-test	//main.go生成的可执行文件
├── go.mod
├── go.sum
├── keystore	//暂时无用，空目录。
└── main.go

注意：fabric-sdk-go包使用beta1版本，go.mod配置如下：

```mod
module fabric-test

go 1.13

require (
	github.com/J4bRro/fabric v0.0.0-20200709104743-7a38d3121ec0
	github.com/hyperledger/fabric-sdk-go v1.0.0-beta1 // indirect
)
```


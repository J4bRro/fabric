package main

import (
	"encoding/json"
	"fmt"

	"github.com/hyperledger/fabric/core/chaincode/shim"
	"github.com/hyperledger/fabric/protos/peer"
)

type simpleCC struct{}

func addRecord(stub shim.ChaincodeStubInterface, args []string) peer.Response {
	if len(args) != 2 {
		return shim.Error("100")
	}
	key := args[0]
	value := args[1]
	if key == "" || value == "" {
		return shim.Error("101")
	}
	val, err := stub.GetState(key)
	if err == nil && len(val) != 0 {
		return shim.Error("102")
	}
	if err = stub.PutState(key, []byte(value)); err != nil {
		return shim.Error("106")
	}
	return shim.Success([]byte("200"))
}

func batchAddRecord(stub shim.ChaincodeStubInterface, args []string) peer.Response {
	if len(args) != 1 {
		return shim.Error("100")
	}

	jsonStream := []byte(args[0])
	// var jsonBlob = []byte(`[
	//     {"Name" : "Platypus", "Order" : "Monotremata" } ,
	//     {"Name" : "Quoll",     "Order" : "Dasyuromorphia"}
	// ]`)
	type Record struct {
		Key   string
		Value string
	}
	var records []Record
	err := json.Unmarshal(jsonStream, &records)
	if err != nil {
		return shim.Error("104")
	}
	if len(records) > 20 {
		return shim.Error("105")
	}
	// fmt.Printf("%+v", records)

	var Existed []string

	for _, record := range records {
		key := record.Key
		value := record.Value
		if key == "" || value == "" {
			return shim.Error("101")
		}
		val, err := stub.GetState(key)
		if err == nil && len(val) != 0 {
			Existed = append(Existed, key)
			continue
			// return shim.Error(fmt.Sprintf("%s is already exist", key))
		}
		if err = stub.PutState(key, []byte(value)); err != nil {

			return shim.Error("106")
		}
		// return shim.Success([]byte(fmt.Sprintf("record %s saved successfully", key)))
	}
	if len(Existed) > 0 {
		return shim.Success([]byte(fmt.Sprintf("%s, %s", "200", Existed)))
	}
	return shim.Success([]byte("200"))
}

func delRecord(stub shim.ChaincodeStubInterface, args []string) peer.Response {
	if len(args) != 1 {
		return shim.Error("100")
	}
	key := args[0]
	if key == "" {
		return shim.Error("101")
	}
	value, err := stub.GetState(key)
	if err != nil || len(value) == 0 {
		return shim.Error("102")
	}
	err = stub.DelState(key)
	if err != nil {
		return shim.Error("106")
	}
	return shim.Success([]byte("200"))
}

func updateRecord(stub shim.ChaincodeStubInterface, args []string) peer.Response {
	if len(args) != 2 {
		return shim.Error("100")
	}
	key := args[0]
	value := args[1]
	if key == "" {
		return shim.Error("101")
	}
	val, err := stub.GetState(key)
	if err != nil || len(val) == 0 {
		return shim.Error("103")
	}
	err = stub.DelState(key)
	if err != nil {
		return shim.Error("106")
	}
	if err = stub.PutState(key, []byte(value)); err != nil {
		return shim.Error("106")
	}
	return shim.Success([]byte("200"))
}

func searchRecord(stub shim.ChaincodeStubInterface, args []string) peer.Response {
	if len(args) != 1 {
		return shim.Error("100")
	}
	key := args[0]
	if key == "" {
		return shim.Error("101")
	}
	value, err := stub.GetState(key)
	if err != nil || len(value) == 0 {
		return shim.Error("103")
	}
	return shim.Success(value)
}

func (t *simpleCC) Init(stub shim.ChaincodeStubInterface) peer.Response {
	return shim.Success(nil)
}

func (t *simpleCC) Invoke(stub shim.ChaincodeStubInterface) peer.Response {
	funcName, args := stub.GetFunctionAndParameters()
	switch funcName {
	case "addRecord":
		return addRecord(stub, args)
	case "batchAddRecord":
		return batchAddRecord(stub, args)
	case "delRecord":
		return delRecord(stub, args)
	case "updateRecord":
		return updateRecord(stub, args)
	case "searchRecord":
		return searchRecord(stub, args)
	default:
		return shim.Error("107")
	}
}

func main() {
	if err := shim.Start(new(simpleCC)); err != nil {
		fmt.Printf("链码启动出现错误：%s", err)
	}

}

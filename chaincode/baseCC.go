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
		return shim.Error("args numbers is wrong, require 2 args")
	}
	key := args[0]
	value := args[1]
	if key == "" || value == "" {
		return shim.Error("args is illegal")
	}
	val, err := stub.GetState(key)
	if err == nil && len(val) != 0 {
		return shim.Error(fmt.Sprintf("%s is already exist", key))
	}
	if err = stub.PutState(key, []byte(value)); err != nil {
		return shim.Error(fmt.Sprintf("There was an error adding record in the ledger: %s", err))
	}
	return shim.Success([]byte(fmt.Sprintf("record %s saved successfully", key)))
}

func batchAddRecord(stub shim.ChaincodeStubInterface, args []string) peer.Response {
	if len(args) != 1 {
		return shim.Error("args numbers is wrong, require 1 args")
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
		return shim.Error(fmt.Sprintf("Unmarshal is wrong: %s", err))
	}
	// fmt.Printf("%+v", records)
	for _, record := range records {
		key := record.Key
		value := record.Value
		if key == "" || value == "" {
			return shim.Error("args is illegal")
		}
		val, err := stub.GetState(key)
		if err == nil && len(val) != 0 {
			return shim.Error(fmt.Sprintf("%s is already exist", key))
		}
		if err = stub.PutState(key, []byte(value)); err != nil {
			return shim.Error(fmt.Sprintf("There was an error adding record in the ledger: %s", err))
		}
		return shim.Success([]byte(fmt.Sprintf("record %s saved successfully", key)))
	}
	return shim.Success([]byte(fmt.Sprintf("batch record saved successfully")))
}

func delRecord(stub shim.ChaincodeStubInterface, args []string) peer.Response {
	if len(args) != 1 {
		return shim.Error("args numberis wrong, require 1 args")
	}
	key := args[0]
	if key == "" {
		return shim.Error("args is illegal")
	}
	value, err := stub.GetState(key)
	if err != nil || len(value) == 0 {
		return shim.Error(fmt.Sprintf("Record: %s is not exist", key))
	}
	err = stub.DelState(key)
	if err != nil {
		return shim.Error(fmt.Sprintf("Record: %s deletion failed", key))
	}
	return shim.Success([]byte(fmt.Sprintf("Record: %s deleted", key)))
}

func updateRecord(stub shim.ChaincodeStubInterface, args []string) peer.Response {
	if len(args) != 2 {
		return shim.Error("args numberis wrong, require 2 args")
	}
	key := args[0]
	value := args[1]
	if key == "" {
		return shim.Error("args is illegal")
	}
	val, err := stub.GetState(key)
	if err != nil || len(val) == 0 {
		return shim.Error(fmt.Sprintf("Record: %s is not exist", key))
	}
	err = stub.DelState(key)
	if err != nil {
		return shim.Error(fmt.Sprintf("Record: %s deletion failed", key))
	}
	if err = stub.PutState(key, []byte(value)); err != nil {
		return shim.Error(fmt.Sprintf("There was an error update the Record in the ledger: %s", err))
	}
	return shim.Success([]byte(fmt.Sprintf("Record %s update successfully", key)))
}

func searchRecord(stub shim.ChaincodeStubInterface, args []string) peer.Response {
	if len(args) != 1 {
		return shim.Error("args numberis wrong, require 1 args")
	}
	key := args[0]
	if key == "" {
		return shim.Error("args is illegal")
	}
	value, err := stub.GetState(key)
	if err != nil || len(value) == 0 {
		return shim.Error(fmt.Sprintf("Record: %s is not exist", value))
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
		return shim.Error(fmt.Sprintf("不支持的方法: %s", funcName))
	}
}

func main() {
	if err := shim.Start(new(simpleCC)); err != nil {
		fmt.Printf("链码启动出现错误：%s", err)
	}

}

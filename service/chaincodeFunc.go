package service

import (
	"github.com/hyperledger/fabric-sdk-go/pkg/client/channel"
)

func (t *ServiceSetup) CreateAccount(jsonStream string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "createAccount", Args: [][]byte{[]byte(jsonStream)}}
	respone, err := t.Client.Execute(req)
	if err != nil {
		return "", err
	}
	return string(respone.Payload), nil
}

func (t *ServiceSetup) VerifyAccount(account string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "verifyAccount", Args: [][]byte{[]byte(account)}}
	respone, err := t.Client.Query(req)
	if err != nil {
		return "", err
	}
	return string(respone.Payload), nil
}

func (t *ServiceSetup) DelAccount(account string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "delAccount", Args: [][]byte{[]byte(account)}}
	respone, err := t.Client.Execute(req)
	if err != nil {
		return "", err
	}
	return string(respone.Payload), nil
}

func (t *ServiceSetup) AddRecord(key string, value string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "addRecord", Args: [][]byte{[]byte(key), []byte(value)}}
	respone, err := t.Client.Execute(req)
	if err != nil {
		return "", err
	}
	return string(respone.Payload), nil
}

func (t *ServiceSetup) BatchAddRecord(jsonStream string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "batchAddRecord", Args: [][]byte{[]byte(jsonStream)}}
	respone, err := t.Client.Execute(req)
	if err != nil {
		return "", err
	}
	return string(respone.Payload), nil
}

func (t *ServiceSetup) DelRecord(key string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "delRecord", Args: [][]byte{[]byte(key)}}
	respone, err := t.Client.Execute(req)
	if err != nil {
		return "", err
	}
	return string(respone.Payload), nil
}

func (t *ServiceSetup) UpdateRecord(key string, value string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "updateRecord", Args: [][]byte{[]byte(key), []byte(value)}}
	respone, err := t.Client.Execute(req)
	if err != nil {
		return "", err
	}
	return string(respone.Payload), nil
}

func (t *ServiceSetup) SearchRecord(key string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "searchRecord", Args: [][]byte{[]byte(key)}}
	respone, err := t.Client.Query(req)
	if err != nil {
		return "", err
	}
	return string(respone.Payload), nil
}

func (t *ServiceSetup) QueryRecord(key string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "invoke", Args: [][]byte{[]byte("query"), []byte(key)}}
	respone, err := t.Client.Query(req)
	if err != nil {
		return "", err
	}
	return string(respone.Payload), nil
}

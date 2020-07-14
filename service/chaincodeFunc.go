package service

import (
	"github.com/hyperledger/fabric-sdk-go/pkg/client/channel"
)

func (t *ServiceSetup) AddRecord(key string, value string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "addRecord", Args: [][]byte{[]byte(key), []byte(value)}}
	respone, err := t.Client.Execute(req)
	if err != nil {
		return "", err
	}
	return string(respone.TransactionID), nil
}

func (t *ServiceSetup) BatchAddRecord(jsonStream string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "batchAddRecord", Args: [][]byte{[]byte(jsonStream)}}
	respone, err := t.Client.Execute(req)
	if err != nil {
		return "", err
	}
	return string(respone.TransactionID), nil
}

func (t *ServiceSetup) DelRecord(key string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "delRecord", Args: [][]byte{[]byte(key)}}
	respone, err := t.Client.Execute(req)
	if err != nil {
		return "", err
	}
	return string(respone.TransactionID), nil
}

func (t *ServiceSetup) UpdateRecord(key string, value string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "updateRecord", Args: [][]byte{[]byte(key), []byte(value)}}
	respone, err := t.Client.Execute(req)
	if err != nil {
		return "", err
	}
	return string(respone.TransactionID), nil
}

func (t *ServiceSetup) SearchRecord(key string) (string, error) {
	req := channel.Request{ChaincodeID: t.ChaincodeID, Fcn: "searchRecord", Args: [][]byte{[]byte(key)}}
	respone, err := t.Client.Query(req)
	if err != nil {
		return "", err
	}
	return string(respone.Payload), nil
}

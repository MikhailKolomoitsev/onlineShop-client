import { makeAutoObservable } from "mobx"


export default class BasketStore {
    constructor() {
        this._devices = []
        makeAutoObservable(this)
    }

    setDevicesInBasket(device) {
        this._devices.push(device)
    }
    DevicesInBasket(){
        return this._devices
    }
}
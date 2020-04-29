class Dragon {
    constructor(name, rider, color, hungry = true){
        this._name = name;
        this._rider = rider;
        this._color = color;
        this._hungry = hungry;
        this._foisMange = 0;
    }
    get name(){
        return this._name;
    }
    get rider(){
        return this._rider;
    }
    get color(){
        return this._color;
    }
    get hungry(){
        return this._hungry;
    }
    get foisMange(){
        return this._foisMange;
    }
    eat(){
        this._foisMange = this._foisMange + 1
        if (this._foisMange >= 3) {
            this._hungry = false;
        }
        return this._hungry;
    }
}

module.exports = Dragon;
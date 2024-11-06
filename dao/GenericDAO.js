const {del} = require("express/lib/application");

class GenericDAO{
    #model
    constructor(model) {
        this.#model = model
    }

    create(data){
        return new this.#model(data).save()
    }
    read(id){
        return this.#model.findById(id)
    }
    update(data){
        return this.#model.findByIdAndUpdate(data._id, data, {new: true})
    }
    delete(id){
        return this.#model.findByIdAndDelete(id)
    }
    patch(id, patchData){
        if(patchData._id){
            delete patchData._id
        }
        return this.#model.findByIdAndUpdate(id, {$set: patchData},  { new: true, runValidators: true })
    }
    readAll(){
        return this.#model.find()
    }
}

module.exports = GenericDAO
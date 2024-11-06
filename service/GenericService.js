const GenericDAO = require("../dao/GenericDAO")

class GenericService{
    #dao
    constructor(model){
        this.#dao = new GenericDAO(model)
    }

    add(data){
        return this.#dao.create(data)
    }
    getById(id){
        return this.#dao.read(id)
    }
    updateEntry(data){
        return this.#dao.update(data)
    }
    deleteById(id){
        return this.#dao.delete(id)
    }
    patchEntry(id, patchData){
        return this.#dao.patch(id, patchData)
    }
    getAll(){
        return this.#dao.readAll()
    }
}

module.exports = GenericService
const mongoose = require('mongoose')
const Dispatcher = require('./dispatcher')
const UUID = require("uuid/v4")

const networkSchema = mongoose.Schema({
    uuid: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        unique: true
    }
})

const NetworkModel = mongoose.model("network", dispatcherSchema)

const Network = {
    async create(name){
        await NetworkModel({name, uuid: UUID()}).save()
    },
    async count() {
        await NetworkModel.count()
    },
}

module.exports = Dispatcher
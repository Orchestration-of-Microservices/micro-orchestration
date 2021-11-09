const { Mobile } = require('../models')

class MobileService {
    constructor() {}

    async createRecord(payload) {
        return await Mobile.create(payload)
    }

}


module.exports = new MobileService()
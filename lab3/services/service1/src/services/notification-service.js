const { Notification } = require('../models')

class NotificationService {
    constructor() {}

    async createRecord(payload) {
        return await Notification.create(payload)
    }

}


module.exports = new NotificationService()
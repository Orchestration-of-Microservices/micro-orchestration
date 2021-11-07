const { Notification } = require('../models')

class NotificationService {
    constructor() {}

    async createRecord(payload) {
        return Notification.create(payload)
    }

}


module.exports = new NotificationService()
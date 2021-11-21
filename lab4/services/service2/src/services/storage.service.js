class StorageService {
    storeVariablesInMemory(secrets) {
        Object.keys(secrets).map(secretKey => global[secretKey] = secrets[secretKey])
     }
}

module.exports = new StorageService()
import StorageUtil from "./StorageUtil";
export default class AppStorage extends StorageUtil {
    static setUserData(user) {
        return StorageUtil.set('user', user);
    }
    static getUserData() {
        return StorageUtil.get('user');
    }


    static setClientData(client) {
        return StorageUtil.set('client', client);
    }
    static getClientData() {
        return StorageUtil.get('client');
    }
    
}
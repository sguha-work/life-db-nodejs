class LifeDB {
    
    private databaseName : string;
    private errorMessage : object;
    
    /**
     * @description- This is the constructor of the main class
     * @params databaseName {String} - The name of the database
     * @return {Null}
     */
    constructor (public userGivenDatabaseName:string) {
        this.databaseName = userGivenDatabaseName;
    }
    
    get databaseName() {
        return this.databaseName;
    }
    
    set databaseName(userGivenDatabaseName) {
        if(this.databaseName.trim() !== "") {
            this.warning(this.errorMessage.databaseChanged);
        }
        this.databaseName = userGivenDatabaseName;
    }
}
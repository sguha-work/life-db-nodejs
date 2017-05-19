var LifeDB = (function () {
    /**
     * @description- This is the constructor of the main class
     * @params databaseName {String} - The name of the database
     * @return {Null}
     */
    function LifeDB(userGivenDatabaseName) {
        this.userGivenDatabaseName = userGivenDatabaseName;
        this.databaseName = userGivenDatabaseName;
    }
    return LifeDB;
}());

export const initialize = () => {
   // alert('initialize');
   // var databaserequest = window.indexedDB.open("MyData", 1) //initial database
   var databaserequest = window.indexedDB.open("MyData", 3) //initial database

    databaserequest.onupgradeneeded = function(event){
        var db = event.target.result;

        console.log(db);

        if(!db.objectStoreNames.contains('bank')){
            var table = db.createObjectStore("bank", {keyPath: "bankId", autoIncrement: true});
            table.createIndex("name", "name", {unique: false});
            table.createIndex("accountNo", "accountNo", {unique: false});
        }
        else{
            var table = event.currentTarget.transaction.objectStore("bank");
            if(!table.indexNames.contains("expiration")){
                table.createIndex("expiration", "expiration", {unique: false});
            }
        }
    }
}

export const saveToDb = (table, data, oncompleteFunction) => {
    let db = indexedDB.open("MyData");
    db.onsuccess = (event) => {
        let tx = event.target.result.transaction([table], "readwrite");
        let store = tx.objectStore(table);
        store.put(data);
        tx.oncomplete = (event) => {
            oncompleteFunction(event);
        }
        tx.onerror = (event) => {
            oncompleteFunction(false);
        }
    }
}
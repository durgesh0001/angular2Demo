/**
 * Created by root on 28/12/16.
 */

import { Injectable } from 'angular2/core';
declare var PouchDB: any;

@Injectable()
export class dbService {
    db: any;
    constructor() {
        this.db = new PouchDB("angulardemo");
    }

    list() {
        var promise = this.db.allDocs({
            include_docs: true
        });
        return promise;
    }

    save(data) {
        console.log(data);
        return this.db.post(data);
    }

}
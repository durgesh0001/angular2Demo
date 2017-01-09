/**
 * Created by root on 28/12/16.
 */

import {Pipe} from 'angular2/core';

@Pipe({
    name:"search",

})
export class SearchPipe
{
    transform(value,[term])//terms is for custom search
    {
        return value.filter((item)=>item.username.startsWith(term));

    }

}
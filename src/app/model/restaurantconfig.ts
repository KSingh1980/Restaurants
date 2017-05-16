
import {FoodMenu} from "./foodmenu";
import {Address} from "./address";
import {Observable} from "rxjs/Rx";




export class RestaurantConfig {

    constructor(
        public $key:string,
        public url:string,
        public description:string,
        public logoURL: string,
        public type:string,
        public domainName :string,
        public foodMenu:FoodMenu[],
        public address:Address
     ) {

    }

    static fromJson({$key, url, description, logoURL, type,domainName,foodMenu,address}) {
        return new RestaurantConfig($key, url, description, logoURL, type,domainName,foodMenu,address);
    }

    static fromJsonArray(json : any[]) : RestaurantConfig[] {
        return json.map(RestaurantConfig.fromJson);
    }


}


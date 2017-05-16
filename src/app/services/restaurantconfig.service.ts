import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Rx";
import {RestaurantConfig} from "../model/restaurantconfig";
import {FoodMenu} from "../model/FoodMenu";
import {FirebaseListFactoryOpts} from "angularfire2/interfaces";

@Injectable()
export class RestaurantConfigsService {


    constructor(private db:AngularFireDatabase) {
    }

    findAllRestaurantConfigs():Observable<RestaurantConfig[]> {
        return this.db.list('restaurantconfig').map(RestaurantConfig.fromJsonArray);
    }


    findRestaurantConfigByType(RestaurantConfigType:string): Observable<RestaurantConfig> {
        return this.db.list('restaurantconfig', {
            query: {
                orderByChild: 'type',
                equalTo: RestaurantConfigType
            }
        })
        .map(results => results[0]);
    }


}
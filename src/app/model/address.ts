export class Address {


    constructor(
        public $key:string,
        public line1: string,
        public line2: string,
        public city:number ,
        public state: string,
        public zipcode:string,
        public country:string,
        public lat:string,
        public lng:string
         ) {

    }
    static fromJsonList(array): Address[] {
        return array.map(Address.fromJson);
    }

    static fromJson({      $key,
         line1,
         line2,
         cityr ,
         state,
         zipcode,
         country,
         lat,
         lng}):Address {
        return new Address(
            $key,
         line1,
         line2,
         cityr ,
         state,
         zipcode,
          country,
         lat,
         lng);
    }


}

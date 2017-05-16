export class FoodMenu {


    constructor(
        public $key:string,
        public description: string,
        public imageURL: string,
        public price:number ,
        public longDescription: string,
        public restaurandID:string,
        public videoUrl:string) {

    }


 
 /*   get isBeginner() {
        return this.tags && this.tags.includes('BEGINNER');
    }
*/

    static fromJsonList(array): FoodMenu[] {
        return array.map(FoodMenu.fromJson);
    }

    static fromJson({  $key,
            description,
            imageURL,
            price,
            longDescription,
            restaurandID,
            videoUrl}):FoodMenu {
        return new FoodMenu(
            $key,
            description,
            imageURL,
            price,
            longDescription,
            restaurandID,
            videoUrl);
    }


}

import {RestaurantResults} from '../models/restaurantModel';

export class RestaurantPickerService {
  private _baseUrl: string =
    'https://us-restaurant-menus.p.rapidapi.com/restaurants';

  public async getRestaurantsByZip(
    zipcode: string,
    pageNumber: number,
  ): Promise<RestaurantResults> {
    return await fetch(
      `https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/${zipcode}?page=${pageNumber}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'us-restaurant-menus.p.rapidapi.com',
          'x-rapidapi-key':
            'a21a7ddb31msh819af8c0ed104e4p123910jsn333d525bc665',
        },
      },
    )
      .then(response => response.json())
      .then(jsonResponse => {
        return jsonResponse.result;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

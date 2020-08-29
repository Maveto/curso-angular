import { Injectable } from '@angular/core';

@Injectable()

export class ProductService {

  constructor() { }

  public getProducts(): any[]{
    return [
      {
        description: 'aaaa',
        imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'salteña'
      },
      {
        description: 'aaaa',
        imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'salteña'
      },
      {
        description: 'aaaa',
        imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'salteña'
      },
      {
        description: 'aaaa',
        imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'salteña'
      }
    ];
  }
}

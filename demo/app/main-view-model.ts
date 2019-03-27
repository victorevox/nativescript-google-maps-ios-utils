import { Observable } from 'tns-core-modules/data/observable';
import { GoogleMapsIosUtils } from 'nativescript-google-maps-ios-utils';

export class HelloWorldModel extends Observable {
  public message: string;
  private googleMapsIosUtils: GoogleMapsIosUtils;

  constructor() {
    super();

    this.googleMapsIosUtils = new GoogleMapsIosUtils();
    this.message = this.googleMapsIosUtils.message;
  }
}

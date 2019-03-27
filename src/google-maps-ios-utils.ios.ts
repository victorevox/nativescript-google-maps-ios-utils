import { Common } from './google-maps-ios-utils.common';
declare const GMSGeometryUtils: any;

export class GoogleMapsIosUtils extends Common {

    public static isUtilsAvailable(): boolean {
        try {
            if(GMSGeometryUtils) {
                return true
            }
        } catch (error) {
            
        }
        return false;
    }

    public static testMapsUtilsAvailability(): void {
        if(!GoogleMapsIosUtils.isUtilsAvailable()) {
            alert("GMSGeometry is not available");
        }
    }

}

interface GMSGeometryUtils {
    GMSProject(/* CLLocationCoordinate2D */ coordinate)
    /* Projects coordinate to the map. */
    GMSUnproject(/* GMSMapPoint */ point)
    /* Unprojects point from the map.  */
    GMSMapPointInterpolate(/* GMSMapPoint */ a, /* GMSMapPoint */ b, t: number)
    /* Returns a linearly interpolated point on the segment [a, b], at the fraction t from a.  */
    GMSMapPointDistance(/* GMSMapPoint */ a, /* GMSMapPoint */ b)
    /* Returns the length of the segment [a, b] in projected space.  */
    GMSGeometryContainsLocation(/* CLLocationCoordinate2D */ point, /* GMSPath */ path, geodesic: boolean)
    /* Returns whether point lies inside of path.  */
    GMSGeometryIsLocationOnPathTolerance(/* CLLocationCoordinate2D */ point, /* GMSPath */ path, geodesic: boolean, /* CLLocationDistance */ tolerance)
    /* Returns whether point lies on or near path, within the specified tolerance in meters.  */
    GMSGeometryIsLocationOnPath(/* CLLocationCoordinate2D */ point, /* GMSPath */ path, geodesic: boolean)
    /* Same as GMSGeometryIsLocationOnPath(point, path, geodesic, tolerance), with a default tolerance of 0.1 meters.  */
    GMSGeometryDistance(/* CLLocationCoordinate2D */ from, /* CLLocationCoordinate2D */ to)
    /* Returns the great circle distance between two coordinates, in meters, on Earth.  */
    GMSGeometryLength(/* GMSPath */ path)
    /* Returns the great circle length of path, in meters, on Earth.  */
    GMSGeometryArea(/* GMSPath */ path)
    /* Returns the area of a geodesic polygon defined by path on Earth.  */
    GMSGeometrySignedArea(/* GMSPath */ path)
    /* Returns the signed area of a geodesic polygon defined by path on Earth.  */
    GMSGeometryHeading(/* CLLocationCoordinate2D */ from, /* CLLocationCoordinate2D */ to)
    /* Returns the initial heading (degrees clockwise of North) at from of the shortest path to to.  */
    GMSGeometryOffset(/* CLLocationCoordinate2D */ from, /* CLLocationDistance */ distance, /* CLLocationDirection */ heading)
    /* Returns the destination coordinate, when starting at from with initial heading, travelling distance meters along a great circle arc, on Earth.  */
    GMSGeometryInterpolate(/* CLLocationCoordinate2D */ from, /* CLLocationCoordinate2D */ to, fraction: number)
    /* Returns the coordinate that lies the given fraction of the way between the from and to coordinates on the shortest path between the two.  */
    GMSStyleSpans(/* GMSPath */ path,/*  NSArray< GMSStrokeStyle * > */ styles: any[], /* NSArray< NSNumber * > */ lengths: any[], /* GMSLengthKind */ lengthKind)
    /* Returns an NSArray of GMSStyleSpan constructed by repeated application of style and length information from styles and lengths along path.  */
    GMSStyleSpansOffset(/* GMSPath */ path,/*  NSArray< GMSStrokeStyle * > */ styles: any[], /* NSArray< NSNumber * > */ lengths: any[], /* GMSLengthKind */ lengthKind, lengthOffset: number)
}
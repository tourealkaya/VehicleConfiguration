import { VehicleType } from "../data/vehicle-type";
import { VehicleTire } from "../data/vehicle-tire";
import { VehicleExtra } from "../data/vehicle-extra";

export abstract class TuneVehicleRepository {
    public abstract get vehicletypes():VehicleType[]
    public abstract get vehicletires():VehicleTire[]
    public abstract get vehicleextras():VehicleExtra[]
}

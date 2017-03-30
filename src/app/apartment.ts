export class Apartment {

    id: number;
    outbound:Object;
    inbound: Object;
    fare:Object;
    constructor(id,outbound,inbound, fare) {
        this.id = id;
        this.outbound = outbound;
        this.inbound = inbound;
        this.fare = fare;
    }

    toString() {
        
    }


}
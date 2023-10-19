class Uber{
    constructor(name,km,gst,uberPrice){
        this.name=name
        this.km=km
        this.gst=gst
        this.uberPrice=uberPrice
    }
    passengersName(name){
        return `passengersName=${name}`
    }
    totalDistance(km){
        return `total distance travelled in km is ${km}`
    }
    taxes(gst){
        return `the gst for travel is ${gst}`
    }
    uberprice(uberPrice){
        return `the total amount for travel is ${uberPrice}`
    }
    totalAmount(){
        return this.totalDistance(km)+this.taxes(gst)+this.uberprice(uberPrice)
    }
}
    const uber=new Uber()
    console.log(uber.passengersName("jeyachandran"))
    console.log(uber.totalDistance(5))
    console.log(uber.taxes(10))
    console.log(uber.uberprice(50))
    console.log("the total amount is",uber.totalAmount())
class person {
    constructor(name,age,gender,job,salary){
        this.name=name
        this.age=age
        this.gender=gender
        this.job=job
        this.salary=salary
    }
     myname(name) {
        console.log(`my name is ${name}`)
     
    }
     myage(age){
        console.log(`my age is ${age}`)
    }
    mygender(gender){
        console.log(`my gender is ${gender}`)
    }
     myjob(job){
        console.log(`my job is ${job}`)
    }
    mysalary(salary){
        
        console.log(`my salary is ${salary}`)
    }
}
const personDetails=new person()
personDetails.myname('jeyachandran')
personDetails.myage(18)
personDetails.mygender('male')
personDetails.myjob('fullstack developer')
personDetails.mysalary('20,000')

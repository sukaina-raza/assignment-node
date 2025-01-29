class Employee{
    constructor(name,salary){
        this.name=name;
        this._salary=salary;
    }
    getsalary(){
        return this._salary
    }
    setsalary(newSalary){
        if (newSalary>0){
            this._salary=newSalary;
    } else {
        console.log("salary must be positive")
    }

    const emp = new Employee("ali","2000")
    console.log(emp.salary)

}}
//UC-9
class EmployeePayrollData {

    //Getter and setter method

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw 'Name is Incorrect';
        }
    }

    get profilePic() {
        return this._profilePic;
    }

    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }

    get notes() {
        return this._notes;
    }
    set notes(notes) {
        this._notes = notes;
    }

    /* UC-10 setter method for date with validation no future date , should be within 30days of joining */
    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        let currentDate = new Date();
        if (startDate > currentDate) {
            throw "Start date is a future date";
        }

        var diff = Math.abs(currentDate.getTime() - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30) {
            throw "start date is beyond 30 days";
        }
        this._startDate = startDate;
    }

    //method
    toString() {

        return "id : " + this._id + ", name : " + this._name + ", salary : " + this._salary + ", gender : " + this._gender +
            ", date : " + this.startDate + ", profilepic : " + this._profilePic + ", department : " + this._department + ", notes : " + this._notes;

    }
}
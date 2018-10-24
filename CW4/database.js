class Course {
    constructor(pName="", pTime="00:00", pDate="1899-12-31", pRooms=[]) {
        this.name = pName;
        this.time = pTime;
        this.date = pDate;
        this.rooms=pRooms;

    }

    toString() {
        return this.name + " (" + this.date + ")";
    }
}

class Student {
    constructor(pId = 0, pName = "", pGpa = 0, pCourses = []) {
        this.id = pId;
        this.name = pName;
        this.gpa = pGpa;
        this.courses=pCourses;
    }
    toString() {
        return this.id + "- " + this.name;
    }
}
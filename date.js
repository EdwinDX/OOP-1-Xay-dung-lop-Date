class Date {
    day;
    month;
    year;
    constructor(d,m,y) {
        this.day = d;
        this.month = m;
        this.year = y;
    }
    getDay1() {
        return this.day;
    }
    getMonth1() {
        return this.month;

    }
    getYear1() {
        return this.year;
    }
    setDay1(ngay) {
        this.day = ngay;
        return this.day;
    }
    setMonth1(thang) {
        this.month = thang;
        return this.month;
    }
    setYear1(nam) {
        this.year = nam;
        return this.year;
    }
}
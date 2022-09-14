
class Interval {

    createInterval(func, time){
        this.id = setInterval(func, time);
    }

    clearIntevalId(){
        clearInterval(this.id);
    }

}

export default Interval;
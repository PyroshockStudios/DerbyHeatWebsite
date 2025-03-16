class SlideShow { 
    constructor(id_container, id_container_overflow, id_obj) {
        this.obj_container = document.getElementsByClassName(id_container)[0];
        this.obj_container_overflow = this.obj_container.getElementsByClassName(id_container_overflow)[0];
        this.objs = this.obj_container_overflow.getElementsByClassName(id_obj);
        this.num = 0;

        this.init();
    }

    getObjVisible() {
        if (innerWidth > 1400) return 3;
        if (innerWidth > 900) return 2;
        return 1;
    }

    getObjWidth() {
        return getComputedStyle(this.obj_container).width.replace('px', '') / this.getObjVisible() + 
               (getComputedStyle(this.objs[0]).marginLeft.replace('px', '') || 0) +
               (getComputedStyle(this.objs[0]).marginRight.replace('px', '') || 0);
    }

    setObjWidth() { 
        let obj_width = this.getObjWidth();
        for (let x = 0; x < this.objs.length; x++) 
            this.objs[x].style.width = `${obj_width}px`;
    }

    setContainerWidth() {
        this.obj_container_overflow.style.width = `${this.getObjWidth() * this.objs.length}px`;
    }

    moveLeft(times = 1) {
        for (let x = 0; x < times; x++)
            if (this.num < 0)
                this.obj_container_overflow.style.transform = `translateX(${++this.num * this.getObjWidth()}px)`;
            else 
                this.obj_container_overflow.style.transform = `translateX(${(this.num=(-(this.objs.length - this.getObjVisible()))) * this.getObjWidth()}px)`;
    }

    moveRight(times = 1) {
        for (let x = 0; x < times; x++)
            if (this.num > -(this.objs.length - this.getObjVisible()))
                this.obj_container_overflow.style.transform = `translateX(${--this.num * this.getObjWidth()}px)`;
            else
                this.obj_container_overflow.style.transform = `translateX(${(this.num=0) * this.getObjWidth()}px)`;
    }

    init() {
        //this.setContainerWidth();
        this.setObjWidth();
        addEventListener('resize', () => { this.setContainerWidth(); this.setObjWidth() });      
    }

    setArrowLeft(query_element) {
        document.querySelector(query_element).addEventListener('mouseup', () => this.moveLeft());
    }

    setArrowRight(query_element) {
        document.querySelector(query_element).addEventListener('mouseup', () => this.moveRight());
    }
}

export default SlideShow;
export function grab(slideshow) {

    let start = false

    let element = slideshow.obj_container_overflow

    let mouse_x = null

    let element_translateX = null

    let dx = null

    function handler_mousemove(event) {
        if (start) {
            dx = mouse_x - event.clientX
            element.style.transform = `translateX(${element_translateX - dx}px)`

            removeElementsSelect();
        }
    }

    function handler_mousedown(event) {
        mouse_x = event.clientX
        element_translateX = slideshow.num * slideshow.getObjWidth()
        element.style.transition = "0s"
        document.body.style.cursor = "grab"
        start = true
        document.addEventListener("mousemove", handler_mousemove)
    }  

    function handler_mouseup(event) {  
        if (start) {
            start = false

            element.style.transition = ".4s"
            document.body.style.cursor = "initial"
            document.removeEventListener("mousemove", handler_mousemove)

            let times = Math.ceil(Math.abs(dx) / slideshow.getObjWidth()) || 1

            if (event.clientX - mouse_x > 0) 
                slideshow.moveLeft(times)
            else
                slideshow.moveRight(times)

            addElementsSelect()
        }
    }

    function removeElementsSelect() {
        let elements = document.querySelectorAll("p");
        for (let num = 0; num < elements.length; num++) 
            elements[num].style.userSelect = "none"
    }

    function addElementsSelect() {
        let elements = document.querySelectorAll("p");
        for (let num = 0; num < elements.length; num++) 
            elements[num].style.userSelect = "text"
    }

    element.addEventListener("mousedown", handler_mousedown)
    document.addEventListener("mouseup", handler_mouseup)  
}

export default grab;
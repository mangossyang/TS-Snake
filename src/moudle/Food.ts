//定义食物food类

class Food{
    element:HTMLElement
    bodies:HTMLCollection
    constructor(){
        this.element = document.querySelector('.food') as HTMLElement
        this.bodies = document.querySelector('.snake')!.getElementsByTagName('div')
    }

    //获取食物x轴坐标
    get X(){
        return this.element.offsetLeft
    }
    get Y(){
        return this.element.offsetTop
    }

    change(){
        let left = Math.round(Math.random()*29)*10
        let top = Math.round(Math.random()*29)*10
        for(let i = 0; i<this.bodies.length; i++){
            let X = (this.bodies[i] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i] as HTMLElement).offsetTop;
            if(left ==X && top == Y){
                this.change()
                return
            }
        }
        this.element.style.left = left+'px'
        this.element.style.top = top+'px'
    }
}

export default Food
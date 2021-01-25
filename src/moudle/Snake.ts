class Snake{
    //蛇头元素
    head:HTMLElement
    bodies:HTMLCollection

    el:HTMLElement
    constructor(){
        this.head = document.querySelector('.snake>div') as HTMLElement
        this.bodies = document.querySelector('.snake')!.getElementsByTagName('div')
        this.el = document.querySelector('.snake') as HTMLElement
        
    }

    get X(){
        return this.head.offsetLeft
    }

    get Y(){
        return this.head.offsetTop
    }

    set X(value:number){
        if(this.X==value) return
        if(value<0 ||value >290){
            throw new Error('游戏结束')
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft==value){
            if(value > this.X){
               value = this.X - 10
            }else {
                value = this.X + 10 
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkSnakeBody()
    }
    set Y(value:number){
        if(this.Y==value) return
        if(value<0 ||value >290){
            throw new Error('游戏结束')
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop==value){
            if(value > this.Y){
               value = this.Y - 10
            }else {
                value = this.Y + 10 
            }
        }        
        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkSnakeBody()
    }

    addBody(){
        this.el.insertAdjacentHTML('beforeend',"<div></div>")
    }

    moveBody(){
        for(let i = this.bodies.length-1; i>0; i--){
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y +'px';

        }
    }
    //检查是否碰撞到身体
    checkSnakeBody(){
        for(let i = 1; i < this.bodies.length; i++){
            let bd = (this.bodies[i] as HTMLElement)
            if(this.X ==bd.offsetLeft && this.Y == bd.offsetTop){
                throw new Error('游戏结束')
            }
        }
    }
}

export default Snake
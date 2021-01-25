import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';
class GameControl{
   snake: Snake
   food:Food
   scorePanel:ScorePanel
    //方向
   direction:string = ''
   //是否存活
   isLive:boolean = true 
   constructor(){
       this.snake = new Snake()
       this.food = new Food()
       this.scorePanel = new ScorePanel(10,3)

       this.init()
   }

   //初始化游戏
   init(){
    document.addEventListener('keydown',this.keyDownHandle.bind(this))
    this.run()
   }
   
   keyDownHandle(e:KeyboardEvent){
       this.direction = e.key
   }

   //控制蛇的移动方向
   run(){
       let X = this.snake.X
       let Y = this.snake.Y

       switch (this.direction) {
           case 'ArrowUp':
           case 'Up':
               Y-=10
               break;
           case 'ArrowDown':
           case 'Down':
               Y+=10
               break;
           case 'ArrowLeft':
           case 'Left':
               X-=10
               break;
           case 'ArrowRight':
           case 'Right':
               X+=10
               break;
       
       }
       //检查是否吃到食物
       this.checkEat(X,Y)
       try {
           this.snake.X = X
           this.snake.Y = Y
       } catch (e) {
           alert(e.message)    
           this.isLive = false
       }
       this.isLive && setTimeout(this.run.bind(this),200-(this.scorePanel.level-1)*20)
   }

   checkEat(X:number,Y:number){
    if(this.food.X ===X && this.food.Y === Y){
        //改变食物位置
        this.food.change()
        //蛇加一节
        this.snake.addBody()
        
       
        //加分
        this.scorePanel.addScore()
   }
}
}
export default GameControl
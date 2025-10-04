class Editor{
    constructor(){
        this.redoStack=[]
        this.undoStack=[]
    }
    doSome(action){
        this.undoStack.push(action)
        this.redoStack=[]
        console.log(action)
    }
    undo(){
        if(this.undoStack.length===0){
            return 'nothing to undo'
        }
        let action=this.undoStack.pop()
        this.redoStack.push(action)
        console.log(action)
    }
    redo(){
        if(this.redoStack.length===0){
            return 'nothing to redo'
        }
        let action=this.redoStack.pop()
        this.undoStack.push(action)
        console.log(action)
    }
}
const e = new Editor();

e.doSome("Type A");     
e.doSome("Type B");    

e.undo();               
e.undo();               

e.redo();              
e.doSome("Type C");     

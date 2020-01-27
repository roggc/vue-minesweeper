import Vue from 'vue'
import s from 'vue-styled-components'
import Appx from '../store/appx'
import Cellx from '../store/cellx'
import Cell from './cell'

export default Vue.extend({
    name:'myApp',
    data(){
        return{
            x:new Appx()
        }
    },
    beforeMount(){
        this.x.commit({type:'init'})
        this.x.commit({type:'setState',val:{
            refs:this.$refs
        }})
        this.setCellsx()
    },
    methods:{
        setCellsx(){
            this.x.commit({type:'setState',val:{
                cellsx:new Array(this.x.s.dimension),
                numOfMines:0,
                cellsRemaining:this.x.s.dimension*this.x.s.dimension
            }})
            for(let i=0;i<this.x.s.dimension;i++){
                this.x.s.cellsx[i]=new Array(this.x.s.dimension)
            }
            for(let i=0;i<this.x.s.dimension;i++){
                for(let j=0;j<this.x.s.dimension;j++){
                    this.x.s.cellsx[i][j]=new Cellx()
                    this.x.s.cellsx[i][j].commit({type:'init'})
                    this.x.s.cellsx[i][j].commit({type:'setState',val:{
                        mined:Math.random()<this.x.s.level
                    }})
                    if(this.x.s.cellsx[i][j].s.mined){
                        this.x.s.numOfMines++
                    }
                }
            }
        }
    },
    render(){
        const Div=s.div`
        font-family:sans-serif;
        `
        const Button=s.button`
        cursor:pointer;
        `
        const cells=new Array(this.x.s.dimension)
        for(let i=0;i<this.x.s.dimension;i++){
            cells[i]=new Array(this.x.s.dimension)
        }
        for(let i=0;i<this.x.s.dimension;i++){
            for(let j=0;j<this.x.s.dimension;j++){
                cells[i][j]=<Cell x={this.x.s.cellsx[i][j]} 
                ref={i+'_'+j} appx={this.x} i={i} j={j}/>
            }
        }
        return(
            <Div>
                <div>
                    Set Dimension: 
                    <input ref='dim' style='border-radius:2px'/> 
                    <Button vOn:click={()=>{
                        this.x.commit({type:'setState',val:{
                            dimension:this.$refs.dim.value
                        }})
                        this.x.commit({type:'setState',val:{
                        message:undefined
                    }})
                        this.setCellsx()
                        }}>Set</Button>
                </div>
                {cells.map(row=><div style={'clear:both'}>{row}</div>)}
                <div style='clear:both'>{this.x.s.message}</div>
                <div><Button vOn:click={()=>{
                    this.x.commit({type:'setState',val:{
                        message:undefined
                    }})
                    this.setCellsx()
                    }}>Restart</Button></div>
            </Div>
        )
    }
})
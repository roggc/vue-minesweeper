import Vue from 'vue'
import s from 'vue-styled-components'

export default Vue.extend({
    name:'myCell',
    props:{
        x:Object,
        appx:Object,
        i:Number,
        j:Number
    },
    data(){
        return {
            mined:0
        }
    },
    updated(){
        if(this.mined===0&& !this.x.s.mined){
            this.appx.s.refs[(this.i-1)+'_'+(this.j-1)]&&
            this.appx.s.refs[(this.i-1)+'_'+(this.j-1)].x.s.covered&&
            this.appx.s.refs[(this.i-1)+'_'+(this.j-1)].$el.click()
            this.appx.s.refs[(this.i-1)+'_'+(this.j)]&&
            this.appx.s.refs[(this.i-1)+'_'+(this.j)].x.s.covered&&
            this.appx.s.refs[(this.i-1)+'_'+(this.j)].$el.click()
            this.appx.s.refs[(this.i-1)+'_'+(this.j+1)]&&
            this.appx.s.refs[(this.i-1)+'_'+(this.j+1)].x.s.covered&&
            this.appx.s.refs[(this.i-1)+'_'+(this.j+1)].$el.click()
            this.appx.s.refs[(this.i)+'_'+(this.j-1)]&&
            this.appx.s.refs[(this.i)+'_'+(this.j-1)].x.s.covered&&
            this.appx.s.refs[(this.i)+'_'+(this.j-1)].$el.click()
            this.appx.s.refs[(this.i)+'_'+(this.j+1)]&&
            this.appx.s.refs[(this.i)+'_'+(this.j+1)].x.s.covered&&
            this.appx.s.refs[(this.i)+'_'+(this.j+1)].$el.click()
            this.appx.s.refs[(this.i+1)+'_'+(this.j-1)]&&
            this.appx.s.refs[(this.i+1)+'_'+(this.j-1)].x.s.covered&&
            this.appx.s.refs[(this.i+1)+'_'+(this.j-1)].$el.click()
            this.appx.s.refs[(this.i+1)+'_'+(this.j)]&&
            this.appx.s.refs[(this.i+1)+'_'+(this.j)].x.s.covered&&
            this.appx.s.refs[(this.i+1)+'_'+(this.j)].$el.click()
            this.appx.s.refs[(this.i+1)+'_'+(this.j+1)]&&
            this.appx.s.refs[(this.i+1)+'_'+(this.j+1)].x.s.covered&&
            this.appx.s.refs[(this.i+1)+'_'+(this.j+1)].$el.click()
        }
    },
    render(){
        const Cell=s.div`
            border-radius:2px;
            width:20px;
            height:20px;
            background-color:${this.x.s.covered?'grey':'white'};
            cursor:pointer;
            float:left;
            margin:2px;
            color:red;
        `
        return (
            <Cell vOn:click={()=>{
                if(!this.appx.s.message){
                this.x.commit({type:'setState',val:{
                    covered:false
                }})
                this.appx.s.cellsRemaining--
                this.appx.s.refs[(this.i-1)+'_'+(this.j-1)]&&
                this.appx.s.refs[(this.i-1)+'_'+(this.j-1)].x.s.mined&&
                this.mined++
                this.appx.s.refs[(this.i-1)+'_'+this.j]&&
                this.appx.s.refs[(this.i-1)+'_'+this.j].x.s.mined&&
                this.mined++
                this.appx.s.refs[(this.i-1)+'_'+(this.j+1)]&&
                this.appx.s.refs[(this.i-1)+'_'+(this.j+1)].x.s.mined&&
                this.mined++
                this.appx.s.refs[this.i+'_'+(this.j-1)]&&
                this.appx.s.refs[this.i+'_'+(this.j-1)].x.s.mined&&
                this.mined++
                this.appx.s.refs[this.i+'_'+(this.j+1)]&&
                this.appx.s.refs[this.i+'_'+(this.j+1)].x.s.mined&&
                this.mined++
                this.appx.s.refs[(this.i+1)+'_'+(this.j-1)]&&
                this.appx.s.refs[(this.i+1)+'_'+(this.j-1)].x.s.mined&&
                this.mined++
                this.appx.s.refs[(this.i+1)+'_'+this.j]&&
                this.appx.s.refs[(this.i+1)+'_'+this.j].x.s.mined&&
                this.mined++
                this.appx.s.refs[(this.i+1)+'_'+(this.j+1)]&&
                this.appx.s.refs[(this.i+1)+'_'+(this.j+1)].x.s.mined&&
                this.mined++
                if(!this.x.s.covered&& this.x.s.mined){
                    this.appx.commit({type:'setState',val:{
                        message:'you loose!!!'
                    }})
                }
                if(this.appx.s.cellsRemaining===this.appx.s.numOfMines){
                    this.appx.commit({type:'setState',val:{
                        message:'you win!!!'
                    }})
                }
                }
                }}>
                {!this.x.s.covered&&
                this.x.s.mined&& '😁'}
                {!this.x.s.covered&&
                !this.x.s.mined&& this.mined>0&& this.mined}
            </Cell>    
        )
    }
})
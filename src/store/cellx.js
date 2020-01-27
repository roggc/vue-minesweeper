import withStore from './withStore'

export default withStore({
    init(data,this_){
        if(this_.s===null){
            this_.s={
                covered:true
            }
        }
    },
    setState(data,this_){
        this_.s={
            ...this_.s,
            ...data.val
        }
    }
})
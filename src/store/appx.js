import withStore from './withStore'

export default withStore({
    init(data,this_){
        if(this_.s===null){
            this_.s={
                dimension:15,
                level:0.08
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
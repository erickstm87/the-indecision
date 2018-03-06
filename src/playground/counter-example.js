class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount(){
        try{
            //const json = localStorage.getItem('count');
            //console.log('i ran', json)
            const count = parseInt(localStorage.getItem('count'), 10);
            console.log('stuff', count)
            if(!isNaN(count)){
                console.log('here', count);
                this.setState(() => ({ count }));
            }
        }
        catch(e){
            //nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState){
        console.log('getting called');
        if(prevState.count !== this.state.count){   
            //const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', this.state.count);
        }
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        }) 
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            }
        })
    }
    handleReset(){
        this.setState(() => {
            return{
                count: 0 
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter count={12}/>, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count += 1;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count -= 1;
//     renderCounterApp();
// }
// const resetCount = () => {
//     count = 0;
//     renderCounterApp();
// }

// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//         <h1>This is my count: {count}</h1>
//         <button onClick={addOne}> +1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={resetCount}>reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();
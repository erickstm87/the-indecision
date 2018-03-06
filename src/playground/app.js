class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleOptions = this.handleOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            //options: ['thing one', 'thing two', 'thing five']
            options: []
        }
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options}));            
            }
        }
        catch(e){
            //do nothing at all
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    handleDeleteOptions(){
        console.log('called');
        this.setState(() => ({options: []}));
    }
    handleDeleteOption(option){
        this.setState((prevState) => ({
            options: prevState.options.filter((word) => word !== option)
        }));
    }
    handleOptions(){
        console.log('called');
        const randomNum = Math.floor((Math.random() * this.state.options.length));
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option){
        if(!option){
            return 'enter a valid option';
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'entry already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    render(){
        const subtitle = 'Ask the machine';
        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handleOptions={this.handleOptions}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
};

Header.defaultProps = {
    title: 'The Indecision'
}

const Action = (props) => {
    return (
        <div>
        <button onClick={props.handleOptions} disabled={!props.hasOptions}>
            What should i do?
        </button>
        </div>
    )
}

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions} disabled={props.options.length < 1}>Remove Options</button>     
            {props.options.length === 0 && <p>Please add an option to get started</p>}    
            {
               props.options.map((element) => 
                <Option 
                    key={element} 
                    optionText={element}
                    handleDeleteOption={props.handleDeleteOption}
               />)
            }                     
        </div>
    )
}

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
                //{props.handleDeleteOption}
            >
             remove
            </button>
        </div>
    )
}

class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));

        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Submit Option</button>
                </form>   
            </div>        
        )
    }
}

// const User = (props) => { //these stateless functional components are faster than class based state components
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p> 
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 
//ReactDOM.render(<User name='tomas' age={30}/>, document.getElementById('app')); 
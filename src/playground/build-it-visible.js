const appRoot = document.getElementById('app');

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility 
            }
        }) 
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <p>Here are the deets</p>
                )}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, appRoot);
// const renderTemplate = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={VisibilityToggle}>
//                 {declared ? 'Hide Details' : 'Show Details'}
//             </button>
//             {declared && (
//                 <p>Here are the deets</p>
//             )}
//         </div>
//     )

//     ReactDOM.render(template, appRoot);
// }

// renderTemplate();
//comment
import React from 'react';

export default class AddOptions extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
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
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type='text' name='option' />
                    <button className='button'>Submit Option</button>
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
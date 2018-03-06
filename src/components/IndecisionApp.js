import React from 'react';
import AddOptions from './AddOptions';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
   
    handleDeleteOptions = () => {
        console.log('called');
        this.setState(() => ({options: []}));
    }
    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((word) => word !== option)
        }));
    }
    handleOptions = () => {
        console.log('called');
        const randomNum = Math.floor((Math.random() * this.state.options.length));
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }
    handleAddOption = (option) => {
        if(!option){
            return 'enter a valid option';
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'entry already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    handleClearModal = (option) => {
        this.setState(() => ({selectedOption: undefined}));
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

    render(){
        const subtitle = 'Ask the machine';
        return(
            <div>
                <Header subtitle={subtitle}/>
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handleOptions={this.handleOptions}
                    />
                    <div className='widget'>
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOptions
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    handleClearModal={this.handleClearModal}
                    selectedOption={this.state.selectedOption}
                />
            </div>
        )
    }
}

export default IndecisionApp;
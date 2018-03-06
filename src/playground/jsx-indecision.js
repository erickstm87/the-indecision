console.log('hello again');

const app = {
    title: 'Indecision App',
    subtitle: 'What Should I do Hal?',
    options: []
}
const appRoot = document.getElementById('app');

const onMakeDecision = () => {
    const randomNum = Math.floor((Math.random() * app.options.length));
    console.log(randomNum);
    const option = app.options[randomNum];
    console.log(option);
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){ //if string is empty that's falsey so this if statement won't run
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
    }
    renderTemplateApp();
};

const emptyArray = () => {
    app.options = [];
    renderTemplateApp();
}

const renderTemplateApp = () => 
{
    //JSX - Javascript XML
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={emptyArray}>Remove All Entries</button>
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add Option</button>
        </form>
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
        {
                app.options.map((option) => <li key={option + 1}>{option}</li> )
        }
        </ol>
        
    </div>
    );

    ReactDOM.render(template, appRoot);
}

renderTemplateApp();
// --------------------------------
// Object to Set up the App
// --------------------------------
const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};

// --------------------------------
// Function to add options to the App
// --------------------------------
const onFormSubmit = e => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp()
    }
};

// --------------------------------
// Function to get all the options on the App
// --------------------------------
const getOptions = option => option && option.length > 0 ? 'Here are your options:' : 'No options';

// --------------------------------
// Function to get a random option and alert it
// --------------------------------
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
};

// --------------------------------
// Function to remove all options on the App
// --------------------------------
const removeAll = () => {
    app.options = [];
    renderApp()
};

// --------------------------------
// Variable to target the element on the HTML page with ID = app
// --------------------------------
const appRoot = document.getElementById('app');

// --------------------------------
// Function to Render all JSX to the DOM
// --------------------------------
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{getOptions(app.options)}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?
            </button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {app.options.map(option => <li key={option}>Option: {option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

// --------------------------------
// Call to render the app on DOM
// --------------------------------
renderApp();

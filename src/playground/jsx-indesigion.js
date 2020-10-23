console.log('App.js is running');

const app = {
    title : 'Indecision App',
    subTitle : 'This is some info',
    options: []
};
// JSX - Javascript XML
const onFormSubmit = (e) => {
   e.preventDefault();
   console.log('on form submit');
   const option = e.target.elements.option.value;
   if(option) {
       app.options.push((app.options.length + 1) + ' ' +option);
       e.target.elements.option.value = '';
   }
   render();
};

const clearOptions = () => {
    app.options.length = 0;
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);
    const option = app.options[randomNum];
    alert(option);
};

const render = () =>{

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p> {app.subTitle} </p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should I do ?</button> 
            <button onClick ={clearOptions}>Remove All Option</button>
          
            <ol>
                {
                    app.options.map( (text) => <p key={text}>{text}</p>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        );
        ReactDOM.render(template, appRoot);    
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

render();




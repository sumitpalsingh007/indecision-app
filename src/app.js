class IndecisionApp extends React.Component {
    
    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer.";
        const options = ['One','Two','Three'];
        return (
        <div>
              <Header title={title} subTitle={subTitle}/>
              <Action/>
              <Options options={options}/>
              <AddOptions/>
        </div>
        );
    }
}

class Header extends React.Component{
    render() {
        console.log(this.props);
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
} 

class Action extends React.Component {

    handlePick() {
       alert('handlePick');
    }
    render() {
        return (
          <div>
              <button onClick={this.handlePick}>What should i do?</button>
          </div>
        );
    }
}

// add remove all button
// setup handle remove all ->

class Options extends React.Component {

    constructor(props) {
       super(props);
       this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        //alert('remove all');
        console.log(this.props.options);
    }
    render() {
        const optionsArray = this.props.options;
        return (
          <div>
              {optionsArray.map( (option) => <Option key ={option} optionText={option}/>)} 
              <button onClick={this.handleRemoveAll}>Remove All</button>
          </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
          <div>
             Option: {this.props.optionText}
          </div>
        );
    }
}

class AddOptions extends React.Component {

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option) {
            alert('handleAddOption called');
        }
    }
    render() {
        return (
          <div>
               <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
          </div>
        );
    }
}

// Options --> Options component here

// AddOptions --> Add Options componenet here

const jsx = (
    <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOptions/>
    </div>
);

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
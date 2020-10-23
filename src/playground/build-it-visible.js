class Visible extends React.component {
    
      render() {
        return (
          <div>
            <h1>Visiblity Toggle</h1>
            <button onClick={this.toggleNum}><p>{this.state.num === 1 ? 'Hide details' : 'Show details'}</p></button>
            <p>{this.state.num === 1 ? 'Hello World' : ''}</p>
          </div>
        );
      }
      toggleNum() { 
             if (this.state.num ===0) {
                 this.state.num =1;
             }
             else {
               this.state.num =0;
             }
        
     };
}

ReactDOM.render(<Visible/>, document.getElementById('app'));
// var num = 0;
// const toggleNum = () => { 
//     if (num ===0) {
//         num =1;
//     }
//     else {
//       num =0;
//     }
//     render();
// };

// const render = () => {
//     const c = (
//         <div>
//             <h1>Visiblity Toggle</h1>
//             <button onClick={toggleNum}><p>{num === 1 ? 'Hide details' : 'Show details'}</p></button>
//             <p>{num === 1 ? 'Hello World' : ''}</p>
//         </div>
//     );
//     ReactDOM.render(c, appRoot);    
// };
// const appRoot = document.getElementById('app');

// render();
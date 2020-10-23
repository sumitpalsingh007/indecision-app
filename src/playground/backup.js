const userName = 'SPS Tech';
const userAge = 19;
const userLocation = 'Now';
function getLocation(location) {
    if (location){
        return <p>Place: {location}</p>;
    }
}
const templateTwo = (
    <div>
        <h1>{userName ? userName.toUpperCase() : 'Anonymous'}</h1>
        {(userAge && userAge > 18) ? <p>Age: {userAge}</p> : undefined}
        {getLocation(userLocation)}
    </div>
);

//////////////////////////////////////////

const arrowFn = (x) => x.split(' ')[0];

console.log(arrowFn('SPS Tech'));

const multiplier = {
    numbers : [1, 6],
    multiplyBy : 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());


let count = 0;
const addOne = () => {
    count++;
    render();
    console.log('addOne');
}
const removeOne = () => {
    count--;
    render();
    console.log('removeOne');
}
const reset = () => {
    count=0;
    render();
    console.log('reset');
}

const render = () => {
const templateThree = (
    <div>
        <h1>Count is: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={removeOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

ReactDOM.render(templateThree, appRoot);
};
render();




// Excersize 1.1 - Create the component

// function GreetingComponent() {
// return (
// <div className="GreetingComponent componentBox">
// <h1>Hello World</h1>
// <p>My first React component!</p>
// </div>
// )
// }

// export default GreetingComponent;

//1.2 Passing a name Prop

function GreetingComponent(props) {
    return (
        <div className="GreetingComponent componentBox">
            <h1>Hello {props.nameProp}</h1>
            <div className="WelcomeMessage">
                <p>{props.children}</p>
            </div>
        </div>
    );
}

export default GreetingComponent
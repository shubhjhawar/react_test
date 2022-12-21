import './App.css';

function App() {
  const name = <h1>calling a variable</h1>
  const age = <h1>23</h1>
  const email = <h1>so.so@.so.com</h1>
  const user = (
    <div>
      {name}
      {age}
      {email}
    </div>
  )
  return (
// 1. calling a variable
// 2. calling a component    
    <div className="App">
      {user}                   
      <User />
      <User name='passing an argument=props' age={44} email="sdf.cc"/>

      <Job company='abc' salary={23455} position='gm'/>

      <Cond />
      <List />
    </div>
  );
}

export default App;

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
      <h1>Normal</h1>
    </div>
  );
}

//another component
const Job = (arg) => {
  return (
    <div>
    <h1>{arg.salary}</h1>
    <h1>{arg.position}</h1>
    <h1>{arg.company}</h1>
  </div>
  );
} 

// if else condition
const Cond = () => {
  const age = 19
  return (
    <div>
      {age >=18 ? <h1>OverAge</h1> : <h1>UnderAge</h1>}
    </div>
  );
}

// iterating through a list
const List = () => {
    const names = ['A','B','C'];
    return (
        <div>
            {names.map((name, key)=>{
            return <h1 key={key}>{name}</h1>;
            })}
        </div>
    );
}


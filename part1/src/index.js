import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
    <h1>{ props.course }</h1>
);

const Part = (props) => (
    <p>{ props.part } { props.exercises }</p>
);

const Content = (props) => (
    <>
        <Part 
            part={ props.part1 }
            exercises={ props.exercises1 }
        />
        <Part 
            part={ props.part2 }
            exercises={ props.exercises2 }
        />
        <Part 
            part={ props.part3 }
            exercises={ props.exercises3 }
        />
    </>
);

const Total = (props) => (
    <p>Number of exercises { props.exercises1 + props.exercises2 + props.exercises3 }</p>
);

const App = () => {
    const 
        course = 'Half Stack application development', 
        part1 = 'Fundamentals of React',
        exercises1 = 10,
        part2 = 'Using props to pass data',
        exercises2 = 7,
        part3 = 'State of a component', 
        exercises3 = 14;
    
    return (
        <div>
            <Header course={ course } />
            <Content 
                part1={ part1 }
                part2={ part2 }
                part3={ part3 }
                exercises1={ exercises1 }
                exercises2={ exercises2 }
                exercises3={ exercises3 }
            />
            <Total 
                exercises1={ exercises1 }
                exercises2={ exercises2 }
                exercises3={ exercises3 }
            />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

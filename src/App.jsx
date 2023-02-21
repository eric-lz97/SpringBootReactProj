import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './Form.jsx'
import Card from './Card.jsx'
import axios from 'axios'


function App() {

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState();

    const fetchStudents = () => {
        axios.get("http://localhost:8080/api/v1/students").then( res => {
            console.log(res);
            setStudents(res.data);
            // setLoading(false);
        })
    }

    useEffect(() => {
        fetchStudents();
        // setLoading(true);

        // fetch('http://localhost:8080/api/v1/students')
        //     .then(response => response.json())
        //     .then(data => {
        //         setStudents(data);
        //         // setLoading(false);
        //         console.log("data");
        //
        //     })
    }, []);
    console.log("data");
    //
    // if(loading) {
    //     return <p>Loading...</p>
    // }


    return (
    <div className="App">
      <div>
          <Form />
          {/*<Card*/}
          {/*name='xbox'*/}
          {/*description='video console'*/}
          {/*price={30}*/}
          {/*/>*/}
          {/*<Card*/}
          {/*    name='ps5'*/}
          {/*    description='video console'*/}
          {/*    price={13}*/}
          {/*/>*/}
          {/*<Card*/}
          {/*    name='pc'*/}
          {/*    description='video console'*/}
          {/*    price={330}*/}
          {/*/>*/}



          {students.map(student =>
            <div key={student.id}>
              {student.firstName}
                {" "}
              {student.lastName}
            </div>
          )}

      </div>
    </div>
  )
}

export default App

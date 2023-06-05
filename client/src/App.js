import './index.css'
import Landing  from './pages/Landing'
import styled from 'styled-components'

const Button = styled.button`
  background : red;
  color : white;
  font-size: 1rem; 
`


function App() {
  return (
    <>
      <dvi>
        
        <h1>Jobify</h1>
        <Landing />
      </dvi>
    </>
  );
}

export default App; 
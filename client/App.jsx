import {Routes, Route} from 'react-router-dom'



const App =() =>{
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
      </Route>
    </Routes>
  );
};

export default App
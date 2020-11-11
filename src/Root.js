import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home'

const Root = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default Root;

import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPhones } from './store/phones/phones-actions';
import data from './mockup/data.json';
import { Specifications } from './components/Specifications';
import { Quantity } from './components/Quantity';
import { selectHiddenPhones } from './store/controls/controls-selectors';
import { setHiddenPhones } from './store/controls/controls-actions';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPhones(data))
  }, [dispatch]);

  const hiddenFlag = useSelector(selectHiddenPhones);

  const clickVisiblePhones = () => {
    dispatch(setHiddenPhones(hiddenFlag));
    const container = document.querySelector('.container');
    const forModal = document.querySelector('.for_modal');
    forModal.classList.add('hiddenModal');
    container.append(forModal);    
  };

  return (
    <div>
      {!!hiddenFlag && <div className='behind_modal' onClick={clickVisiblePhones}></div>}
      <Quantity />
      <Specifications />
    </div>
  );
};

export default App;

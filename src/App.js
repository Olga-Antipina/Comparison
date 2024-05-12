import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPhones } from './store/phones/phones-actions';
import data from './mockup/data.json';
import { Specifications } from './components/Specifications';
import { Quantity } from './components/Quantity';
import { selectHiddenFlag } from './store/controls/controls-selectors';
import { setHiddenFlag } from './store/controls/controls-actions';

function App() {
  const dispatch = useDispatch();
  const hiddenFlag = useSelector(selectHiddenFlag);

  useEffect(() => {
    dispatch(addPhones(data));
  }, []);

  const clickVisiblePhones = () => {
    dispatch(setHiddenFlag(hiddenFlag));
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

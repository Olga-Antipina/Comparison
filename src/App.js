import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPhones } from './store/phones/phones-actions';
import data from './mockup/data.json';
import { Specifications } from './components/Specifications';
import { Quantity } from './components/Quantity';
import { selectHiddenFlag } from './store/controls/controls-selectors';
import { setHiddenFlag } from './store/controls/controls-actions';
import { Header } from './components/Header';

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
    forModal.classList.add('hidden_modal');
    container.append(forModal);
    let chevrons = document.querySelectorAll('.chevron');
    for (let elem of chevrons) {
      elem.id = 'rotate_none';
    };
  };

  return (
    <div>
      {!!hiddenFlag && <div className='behind_modal' onClick={clickVisiblePhones}></div>}
      <Header />
      <Quantity />
      <Specifications />
    </div>
  );
};

export default App;

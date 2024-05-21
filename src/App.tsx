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
import { selectQuantityAllPhones } from './store/phones/phones-selectors';
import React from 'react';

function App() {
  const dispatch = useDispatch();
  const hiddenFlag = useSelector(selectHiddenFlag);
  const quantityAllphones = useSelector(selectQuantityAllPhones)

  useEffect(() => {
    dispatch(addPhones(data));
  }, [dispatch]);

  const clickVisiblePhones = () => {
    dispatch(setHiddenFlag(hiddenFlag));
    const container = document.querySelector('.container') as HTMLElement;
    const forModal = document.querySelector('.for_modal') as HTMLElement;
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
      {!quantityAllphones
        ?
        <div className='nothing'><div>Товары отсутствуют</div></div>
        :
        <div>
          <Quantity />
          <Specifications />
        </div>
      }
    </div>
  );
};

export default App;

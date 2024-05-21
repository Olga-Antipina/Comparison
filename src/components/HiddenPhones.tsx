import { useSelector, useDispatch } from 'react-redux';
import { selectHiddenFlag, selectQuantity, selectVisibleValue } from '../store/controls/controls-selectors';
import { selectPhones } from '../store/phones/phones-selectors';
import { setHiddenFlag } from '../store/controls/controls-actions';
import { addPhones } from '../store/phones/phones-actions';
import { Search } from './Search';
import { ReactComponent as Change } from '../assets/change.svg';
import React from 'react';


export const HiddenPhones = () => {
    const dispatch = useDispatch();
    const quantity = useSelector((state) => selectQuantity(state));
    const phones = useSelector((state) => selectPhones(state, { quantity }));
    const hiddenFlag = useSelector(selectHiddenFlag);
    const visValue = useSelector((state) => selectVisibleValue(state));

    const changePhonesClick = (event: any) => {
        const changeVisiblePhones = phones.visiblePhones.map((el: any) => {
            if (el.name === visValue) {
                return phones.hiddenPhones.filter((i: any) => i.name === event.currentTarget.value)[0];
            } else {
                return el;
            };
        });
        const changeHiddenPhones = phones.hiddenPhones.map((el: any) => {
            if (el.name === event.currentTarget.value) {
                return phones.visiblePhones.filter((i: any) => i.name === visValue)[0];
            } else {
                return el;
            };
        });

        const newHidPhones = changeVisiblePhones.concat(changeHiddenPhones);

        dispatch(addPhones(newHidPhones));
        dispatch(setHiddenFlag(hiddenFlag));
        
        const container = document.querySelector('.container') as HTMLElement;
        const forModal = document.querySelector('.for_modal') as HTMLElement;
        forModal.classList.add('hidden_modal');
        container.append(forModal);
        
        const specifications = document.querySelectorAll('.specification');
        specifications.forEach((el) => el.classList.remove('hidden_specification'));
        const checkbox = document.querySelector('#comparison') as any;
        checkbox.checked = false;
    };

    const styles = () => {
        if (phones.hiddenPhones.length <= 3) {
            return { height: 100 + '%', marginTop: 20 + 'px' };
        };
    };

    return (
        <div className='modal'>
            <div className='in_modal' style={styles()}>
                {phones.hiddenPhones.length > 3 && <Search />}
                {phones.hiddenPhones.map((item: any) => {
                    return <div key={item.name} className='hidden_phone'>
                        <button onClick={changePhonesClick} value={item.name}><Change /></button>
                        <div className='phone_min'>
                            <div className='phone_min_container'>
                                <img src={item.img} alt={item.name} className='phone_img_min' />
                            </div>
                            <div>{item.name}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};
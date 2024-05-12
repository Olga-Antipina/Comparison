import { useSelector, useDispatch } from 'react-redux';
import { selectHiddenFlag, selectQuantity, selectVisibleValue } from '../store/controls/controls-selectors';
import { selectPhones } from '../store/phones/phones-selectors';
import { setHiddenFlag } from '../store/controls/controls-actions';
import { addPhones } from '../store/phones/phones-actions';
import { Search } from './Search';

export const HiddenPhones = () => {
    const dispatch = useDispatch();
    const quantity = useSelector((state) => selectQuantity(state));
    const phones = useSelector((state) => selectPhones(state, { quantity }));
    const hiddenFlag = useSelector(selectHiddenFlag);
    const visValue = useSelector((state) => selectVisibleValue(state));

    const changePhonesClick = (event) => {
        const changeVisiblePhones = phones.visiblePhones.map((el) => {
            if (el.name === visValue) {
                return phones.hiddenPhones.filter((i) => i.name === event.currentTarget.value)[0];
            } else {
                return el;
            };
        });
        const changeHiddenPhones = phones.hiddenPhones.map((el) => {
            if (el.name === event.currentTarget.value) {
                return phones.visiblePhones.filter((i) => i.name === visValue)[0];
            } else {
                return el;
            };
        });
        const newHidPhones = changeVisiblePhones.concat(changeHiddenPhones);
        dispatch(addPhones(newHidPhones));
        dispatch(setHiddenFlag(hiddenFlag));
        const container = document.querySelector('.container');
        const forModal = document.querySelector('.for_modal');
        forModal.classList.add('hidden_modal');
        container.append(forModal);
    };

    return (
        <div className='modal'>
            {quantity < 3 && <Search />}
            {phones.hiddenPhones.map((item) => {
                return <div key={item.name} className='hidden_phone'>
                    <button onClick={changePhonesClick} value={item.name}>тыц</button>
                    <span>
                        <img src={item.img} alt={item.name} />
                        {item.name}
                    </span>
                </div>
            })}
        </div>
    );
};
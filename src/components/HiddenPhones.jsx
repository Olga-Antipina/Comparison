import { useSelector, useDispatch } from 'react-redux';
import { selectHiddenFlag, selectQuantity, selectVisibleValue } from '../store/controls/controls-selectors';
import { selectPhones } from '../store/phones/phones-selectors';
import { setHiddenFlag } from '../store/controls/controls-actions';
import { addPhones } from '../store/phones/phones-actions';

export const HiddenPhones = () => {
    const dispatch = useDispatch();
    const quantity = useSelector((state) => selectQuantity(state));
    const phones = useSelector((state) => selectPhones(state, { quantity }));
    const hiddenFlag = useSelector(selectHiddenFlag);
    const visValue = useSelector((state) => selectVisibleValue(state));

    const lalala = (event) => {
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
        const ar = changeVisiblePhones.concat(changeHiddenPhones);
        dispatch(addPhones(ar));
        dispatch(setHiddenFlag(hiddenFlag));
        const container = document.querySelector('.container');
        const forModal = document.querySelector('.for_modal');
        forModal.classList.add('hiddenModal');
        container.append(forModal);
    };

    return (
        <div className='modal'>
            {phones.hiddenPhones.map((item) => {
                return <div key={item.name}>
                    <button onClick={lalala} value={item.name}>тыц</button>
                    <span>
                        <img src={item.img} alt={item.name} />
                        {item.name}
                    </span>
                </div>
            })}
        </div>
    )
};
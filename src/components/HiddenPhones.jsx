import { useSelector } from 'react-redux';
import { selectHiddenPhones, selectQuantity } from '../store/controls/controls-selectors';
import { selectPhones } from '../store/phones/phones-selectors';

export const HiddenPhones = () => {
    const quantity = useSelector((state) => selectQuantity(state));
    const phones = useSelector((state) => selectPhones(state, { quantity }));
    const hiddenFlag = useSelector(selectHiddenPhones);

    //тут функция с заменой телефона для кнопы
    const lalala = (event) => {

        console.log(event.target.value);

    }

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
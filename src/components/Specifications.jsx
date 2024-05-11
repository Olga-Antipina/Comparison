import { useSelector, useDispatch } from 'react-redux';
import { selectPhones, selectQuantityAllPhones } from '../store/phones/phones-selectors';
import { selectHiddenPhones, selectQuantity } from '../store/controls/controls-selectors';
import { setHiddenPhones } from '../store/controls/controls-actions';
import { HiddenPhones } from './HiddenPhones';


export const Specifications = () => {
    const dispatch = useDispatch();
    const quantity = useSelector((state) => selectQuantity(state));
    const phones = useSelector((state) => selectPhones(state, { quantity }));
    const hiddenFlag = useSelector(selectHiddenPhones);
    const quantityAllPhones = useSelector((state) => selectQuantityAllPhones(state));


    // ХАРДКОД ДЛЯ ЗАМЕТОК
    // const clickHiddenPhones = (event) => {
    //     dispatch(setHiddenPhones(hiddenFlag));
    //     const withComponent = document.querySelectorAll('.withComponent');
    //     withComponent.forEach((el) => {
    //         if (el.nextSibling !== event.currentTarget) {
    //             el.classList.add('hiddenModal')
    //         }
    //         event.currentTarget.previousSibling.classList.remove('hiddenModal');
    //     });
    //     console.log(event.target.value); // попробовать добавить в локал сторадж?
    // };

    const clickHiddenPhones = (event) => {
        dispatch(setHiddenPhones(hiddenFlag));
        const withComponent = document.querySelectorAll('.withComponent');
        const forModal = document.querySelector('.for_modal');        
        withComponent.forEach((el) => {
            if (el.nextSibling === event.currentTarget) {
                el.append(forModal);
                forModal.classList.remove('hiddenModal');
            };
        });        
    };


return (
    <div>
        <div className='container'>
            <div className='for_modal hiddenModal'>
                <HiddenPhones />
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>

                    </th>
                    {phones.visiblePhones.map((item) => {
                        return <th key={item.name}>
                            <img src={item.img} alt={item.name} />
                            {phones.visiblePhones.length !== quantityAllPhones
                                &&
                                <div>
                                    <div className='withComponent'></div>
                                    <button onClick={clickHiddenPhones} value={item.name}>V</button>
                                </div>
                            }
                            {item.name}
                        </th>
                    })}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ПРОИЗВОДИТЕЛЬ</td>
                    {phones.visiblePhones.map((item) => {
                        return <td key={item.name}>{item.company}</td>
                    })}
                </tr>
                <tr>
                    <td>ГОД РЕЛИЗА</td>
                    {phones.visiblePhones.map((item) => {
                        return <td key={item.name}>{item.release}</td>
                    })}
                </tr>
                <tr>
                    <td>ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)</td>
                    {phones.visiblePhones.map((item) => {
                        return <td key={item.name}>{item.diagonal}</td>
                    })}
                </tr>
                <tr>
                    <td>СТРАНА-ПРОИЗВОДИТЕЛЬ</td>
                    {phones.visiblePhones.map((item) => {
                        return <td key={item.name}>{item.country}</td>
                    })}
                </tr>
                <tr>
                    <td>ОБЪЁМ ПАМЯТИ</td>
                    {phones.visiblePhones.map((item) => {
                        return <td key={item.name}>{item.storage}</td>
                    })}
                </tr>
                <tr>
                    <td>ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА</td>
                    {phones.visiblePhones.map((item) => {
                        return <td key={item.name}>{item.refresh}</td>
                    })}
                </tr>
                <tr>
                    <td>NFC</td>
                    {phones.visiblePhones.map((item) => {
                        return <td key={item.name}>{String(item.NFC)}</td>
                    })}
                </tr>
                <tr>
                    <td>ПОДДЕРЖКА ESIM</td>
                    {phones.visiblePhones.map((item) => {
                        return <td key={item.name}>{String(item.ESIM)}</td>
                    })}
                </tr>
                <tr>
                    <td>ПОДДЕРЖКА БЕСПРОВОДНОЙ ЗАРЯДКИ</td>
                    {phones.visiblePhones.map((item) => {
                        return <td key={item.name}>{String(item.wirelessCharging)}</td>
                    })}
                </tr>
                <tr>
                    <td>СТОИМОСТЬ</td>
                    {phones.visiblePhones.map((item) => {
                        return <td key={item.name}>{item.cost}</td>
                    })}
                </tr>
            </tbody>
        </table>
    </div>
);
};
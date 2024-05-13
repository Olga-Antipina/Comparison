import { useSelector, useDispatch } from 'react-redux';
import { selectPhones, selectQuantityAllPhones } from '../store/phones/phones-selectors';
import { selectHiddenFlag, selectQuantity } from '../store/controls/controls-selectors';
import { setHiddenFlag, setVisibleValue } from '../store/controls/controls-actions';
import { HiddenPhones } from './HiddenPhones';


export const Specifications = () => {
    const dispatch = useDispatch();
    const quantity = useSelector((state) => selectQuantity(state));
    const phones = useSelector((state) => selectPhones(state, { quantity }));
    const hiddenFlag = useSelector(selectHiddenFlag);
    const quantityAllPhones = useSelector((state) => selectQuantityAllPhones(state));

    const clickHiddenPhones = (event) => {
        dispatch(setHiddenFlag(hiddenFlag));
        dispatch(setVisibleValue(event.currentTarget.value));
        const withComponent = document.querySelectorAll('.withComponent');
        const forModal = document.querySelector('.for_modal');
        withComponent.forEach((el) => {
            if (el.nextSibling === event.currentTarget) {
                el.append(forModal);
                forModal.classList.remove('hidden_modal');
            };
        });
    };

    const checkComparison = () => {
        const checkbox = document.querySelector('#comparison');
        const specifications = document.querySelectorAll('.specification');
        if (!!checkbox.checked) {
            specifications.forEach((el) => {
                const children = [];
                for (let i = 1; i < el.children.length; i++) {
                    children.push(el.children[i].textContent);
                };
                if (!!children.every((c) => c === el.children[1].textContent)) {
                    el.classList.add('hidden_specification');
                };
            });
        } else {
            specifications.forEach((el) => el.classList.remove('hidden_specification'));
        };
    };

    return (
        <div>
            <div className='container'>
                <div className='for_modal hidden_modal'>
                    <HiddenPhones />
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type='checkbox' id="comparison" onChange={checkComparison} />
                            <label htmlFor="comparison">Показать различия</label>
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
                    <tr className='specification'>
                        <td>ПРОИЗВОДИТЕЛЬ</td>
                        {phones.visiblePhones.map((item) => {
                            return <td key={item.name}>{item.company}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td>ГОД РЕЛИЗА</td>
                        {phones.visiblePhones.map((item) => {
                            return <td key={item.name}>{item.release}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td>ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)</td>
                        {phones.visiblePhones.map((item) => {
                            return <td key={item.name}>{item.diagonal}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td>СТРАНА-ПРОИЗВОДИТЕЛЬ</td>
                        {phones.visiblePhones.map((item) => {
                            return <td key={item.name}>{item.country}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td>ОБЪЁМ ПАМЯТИ</td>
                        {phones.visiblePhones.map((item) => {
                            return <td key={item.name}>{item.storage}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td>ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА</td>
                        {phones.visiblePhones.map((item) => {
                            return <td key={item.name}>{item.refresh}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td>NFC</td>
                        {phones.visiblePhones.map((item) => {
                            return <td key={item.name}>{String(item.NFC)}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td>ПОДДЕРЖКА ESIM</td>
                        {phones.visiblePhones.map((item) => {
                            return <td key={item.name}>{String(item.ESIM)}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td>ПОДДЕРЖКА БЕСПРОВОДНОЙ ЗАРЯДКИ</td>
                        {phones.visiblePhones.map((item) => {
                            return <td key={item.name}>{String(item.wirelessCharging)}</td>
                        })}
                    </tr>
                    <tr className='specification'>
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
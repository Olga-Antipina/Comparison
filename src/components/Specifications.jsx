import { useSelector, useDispatch } from 'react-redux';
import { selectPhones, selectQuantityAllPhones } from '../store/phones/phones-selectors';
import { selectHiddenFlag, selectQuantity } from '../store/controls/controls-selectors';
import { setHiddenFlag, setVisibleValue } from '../store/controls/controls-actions';
import { HiddenPhones } from './HiddenPhones';
import { ReactComponent as True } from '../assets/true.svg';
import { ReactComponent as False } from '../assets/false.svg';
import { ReactComponent as Chevron } from '../assets/chevron_small.svg';


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
        event.currentTarget.id = 'rotate';
    };

    const checkComparison = () => {
        const checkbox = document.querySelector('#comparison');
        const specifications = document.querySelectorAll('.specification');
        if (!!checkbox.checked) {
            specifications.forEach((el) => {
                const children = [];
                for (let i = 1; i < el.children.length; i++) {
                    children.push(el.children[i].getAttribute('abbr'));
                };
                if (!!children.every((c) => c === el.children[1].getAttribute('abbr'))) {
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
                        <th className='first_row'>
                            <input type='checkbox' id="comparison" onChange={checkComparison} />
                            <label htmlFor="comparison">Показать различия</label>
                        </th>
                        {phones.visiblePhones.map((item) => {
                            return <th className='col_phones' key={item.name}>
                                <img src={item.img} alt={item.name} className='phone_img' />
                                {phones.visiblePhones.length !== quantityAllPhones
                                    &&
                                    <div>
                                        <div className='withComponent'></div>
                                        <button onClick={clickHiddenPhones} value={item.name} className='chevron'><Chevron /></button>
                                    </div>}
                                <br />
                                {item.name}
                            </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr className='specification'>
                        <td className='row_name'>ПРОИЗВОДИТЕЛЬ</td>
                        {phones.visiblePhones.map((item) => {
                            return <td className='padding_td' key={item.name} abbr={item.company}>{item.company}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td className='row_name'>ГОД РЕЛИЗА</td>
                        {phones.visiblePhones.map((item) => {
                            return <td className='padding_td' key={item.name} abbr={item.release}>{item.release}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td className='row_name'>ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)</td>
                        {phones.visiblePhones.map((item) => {
                            return <td className='padding_td' key={item.name} abbr={item.diagonal}>{item.diagonal}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td className='row_name'>СТРАНА-ПРОИЗВОДИТЕЛЬ</td>
                        {phones.visiblePhones.map((item) => {
                            return <td className='padding_td' key={item.name} abbr={item.country}>{item.country}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td className='row_name'>ОБЪЁМ ПАМЯТИ</td>
                        {phones.visiblePhones.map((item) => {
                            return <td className='padding_td' key={item.name} abbr={item.storage}>{item.storage}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td className='row_name'>ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА</td>
                        {phones.visiblePhones.map((item) => {
                            return <td className='padding_td' key={item.name} abbr={item.refresh}>{item.refresh}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td className='row_name'>NFC</td>
                        {phones.visiblePhones.map((item) => {
                            return <td className='padding_td' key={item.name} abbr={String(item.NFC)}>{item.NFC ? <True /> : <False />}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td className='row_name'>ПОДДЕРЖКА ESIM</td>
                        {phones.visiblePhones.map((item) => {
                            return <td className='padding_td' key={item.name} abbr={String(item.ESIM)}>{item.ESIM ? <True /> : <False />}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td className='row_name'>ПОДДЕРЖКА БЕСПРОВОДНОЙ ЗАРЯДКИ</td>
                        {phones.visiblePhones.map((item) => {
                            return <td className='padding_td' key={item.name} abbr={String(item.wirelessCharging)}>{item.wirelessCharging ? <True /> : <False />}</td>
                        })}
                    </tr>
                    <tr className='specification'>
                        <td className='row_name'>СТОИМОСТЬ</td>
                        {phones.visiblePhones.map((item) => {
                            return <td className='padding_td' key={item.name} abbr={item.cost}>{item.cost}</td>
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
import { useDispatch, useSelector } from "react-redux";
import { setQuantity } from "../store/controls/controls-actions";
import { selectQuantityAllPhones } from "../store/phones/phones-selectors";


export const Quantity = () => {

    const dispatch = useDispatch();
    const quantityAllPhones = useSelector((state) => selectQuantityAllPhones(state));

    const handleClick = (event) => {
        dispatch(setQuantity(event.target.value));
        const specifications = document.querySelectorAll('.specification');
        specifications.forEach((el) => el.classList.remove('hidden_specification'));
        const checkbox = document.querySelector('#comparison');
        checkbox.checked = false;
    };

    const allButtonsArr = [];
    for (let i = 2; i <= quantityAllPhones; i++) {
        allButtonsArr.push(i);
    };

    return (
        <div>
            <span>Смартфоны</span>
            {quantityAllPhones > 2 &&
                <span>
                    Отобразить товары:
                    {allButtonsArr.map((item) => {
                        return <button onClick={handleClick} key={item} value={item}>{item}</button>
                    })}
                </span>
            }
        </div>
    )
};
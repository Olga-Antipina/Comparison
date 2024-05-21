import { useDispatch, useSelector } from "react-redux";
import { setQuantity } from "../store/controls/controls-actions";
import { selectQuantityAllPhones } from "../store/phones/phones-selectors";
import { selectQuantity } from "../store/controls/controls-selectors";
import React from 'react';


export const Quantity = () => {
    const dispatch = useDispatch();
    const quantityAllPhones = useSelector((state) => selectQuantityAllPhones(state));
    const quantity = useSelector((state) => selectQuantity(state));

    const handleClick = (event: any) => {
        dispatch(setQuantity(event.target.value));
        const specifications = document.querySelectorAll('.specification');
        specifications.forEach((el) => el.classList.remove('hidden_specification'));
        const checkbox = document.querySelector('#comparison') as any;
        checkbox.checked = false;
    };

    const allButtonsArr = [];
    for (let i = 2; i <= quantityAllPhones; i++) {
        allButtonsArr.push(i);
    };

    return (
        <div className="quantity">
            <div id="quantity_title">Смартфоны</div>
            {quantityAllPhones > 2 &&
                <div id="quantity_buttons">
                    Отобразить товары:
                    {allButtonsArr.map((item) => {
                        return <button onClick={handleClick} key={item} value={item} className={item.toString() === quantity.toString() ? "quantity_button select_button" : "quantity_button"}>{item}</button>
                    })}
                </div>
            }
        </div>
    )
};
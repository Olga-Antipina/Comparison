import { useDispatch, useSelector } from "react-redux";
import { selectHiddenFlag, selectSearch } from "../store/controls/controls-selectors";
import { setSearch } from "../store/controls/controls-actions";
import { useEffect } from "react";
import React from 'react';


export const Search = () => {
    const dispatch = useDispatch();
    const search = useSelector((state) => selectSearch(state));
    const hiddenFlag = useSelector(selectHiddenFlag);

    useEffect(() => {
        const hidPhones = document.querySelectorAll('.hidden_phone') as NodeList;
        const notFound = document.querySelector('#not_found') as HTMLElement;
        hidPhones.forEach((el: any) => {
            if (!el.firstChild.value.toLowerCase().includes(search.toLowerCase())) {
                el.classList.add('hidden_found_phone');
            } else {
                el.classList.remove('hidden_found_phone');
                notFound.textContent = ''
            };
        });
        const hidFoundPhones = document.querySelectorAll('.hidden_found_phone');
        if (!!search) {
            hidFoundPhones.length === hidPhones.length ? notFound.textContent = 'Товар не найден' : notFound.textContent = '';
        }
        if (!hiddenFlag) {
            dispatch(setSearch(''));
        };
    }, [search, hiddenFlag]);

    const handleSearch = (event: any) => {
        dispatch(setSearch(event.target.value));
        if (!event.target.value) {
            dispatch(setSearch(''));
        };
    };

    return (
        <div>
            <input type="search" placeholder="Поиск" value={search} onChange={handleSearch} />
            <div id="not_found"></div>
        </div>
    );
};
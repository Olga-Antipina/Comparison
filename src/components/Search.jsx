import { useDispatch, useSelector } from "react-redux";
import { selectHiddenFlag, selectSearch } from "../store/controls/controls-selectors";
import { setSearch } from "../store/controls/controls-actions";
import { useEffect } from "react";


export const Search = () => {
    const dispatch = useDispatch();
    const search = useSelector((state) => selectSearch(state));
    const hiddenFlag = useSelector(selectHiddenFlag);

    useEffect(() => {
        const hidFoundPhones = document.querySelectorAll('.hidden_phone');
        hidFoundPhones.forEach((el) => {
            if (!el.firstChild.value.toLowerCase().includes(search.toLowerCase())) {
                el.classList.add('hidden_found_phone');
            } else {
                el.classList.remove('hidden_found_phone');
            };
            if (!hiddenFlag) {
                dispatch(setSearch(''));
            };
        });
    }, [search, hiddenFlag]);

    const handleSearch = (event) => {
        dispatch(setSearch(event.target.value));
    };

    return (
        <div>
            <input type="search" placeholder="Поиск" value={search} onChange={handleSearch} />
        </div>
    );
};
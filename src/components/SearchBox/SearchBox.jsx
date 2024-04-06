import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { HiSearch } from "react-icons/hi";

export const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={searchId}>
        <HiSearch />
        Find contacts by name
      </label>
      <input
        id={searchId}
        type="text"
        value={filter}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};

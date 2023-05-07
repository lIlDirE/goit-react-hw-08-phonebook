import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/allSlice/filterSlice/filterSlice.js';
import {
  FilterDiv,
  FilterLabel,
  FilterInput,
  Label,
} from './SearchFilter.styled';

export default function SearchFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  
  return (
    <Label>
      <h2>Contacts</h2>
      <FilterDiv>
        <FilterLabel>
          Find contacts by name
          <FilterInput
            type="text"
            value={filter}
            onChange={e => dispatch(filterContact(e.target.value))}

          />
        </FilterLabel>
      </FilterDiv>
    </Label>
  );
}

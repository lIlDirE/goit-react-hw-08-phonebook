import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { createContactThunk } from 'redux/store/thunk';
import {
  FormContact,
  LabelContact,
  FormDiv,
  FormInput,
  Label,
} from './ContactForm.styled';
// import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contact.items);


  function resetForm() {
    setName('');
    setNumber('');
  }

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(createContactThunk(newContact));
      resetForm();
    }
  };


  return (
    <Label>
      <h3>Add new contact</h3>
      <FormContact onSubmit={handleSubmitForm}>
        <FormDiv>
          <LabelContact>
            Name
            <FormInput
              type="text"
              name="name"
              value={name}
              onInput={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelContact>

          <LabelContact>
            Phone
            <FormInput
              type="tel"
              name="number"
              value={number}
              onInput={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </LabelContact>

          <button name="submit" type="submit">
            Add contact
          </button>
        </FormDiv>
      </FormContact>
    </Label>
  );
}

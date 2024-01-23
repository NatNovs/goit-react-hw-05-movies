import { useState } from 'react';
import PropTypes from 'prop-types'; 
import { Input, SearchForm, Button } from './Form.styled'; 

const Form = ({setParams}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value.trim().toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    setParams(query);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        value={query} 
        placeholder={'Enter movies title ...'}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

export default Form;

Form.propTypes = {
	setParams: PropTypes.func.isRequired,
}

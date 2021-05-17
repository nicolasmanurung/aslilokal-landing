import { FormControl, Button, InputGroup } from "react-bootstrap";
// import Button from "../Button";

const Search = ({ onSubmit, queryText }) => {
  return (
    <div>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Cari Disini'
          aria-label='Cari Disini'
          aria-describedby='basic-addon2'
          onChange={(e) => queryText(e.target.value)}
        />
        <InputGroup.Append>
          <Button onClick={onSubmit} variant='outline-primary'>
            Cari
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Search;

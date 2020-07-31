import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function Categoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(eventsInfo) {
    setValue(
      eventsInfo.target.getAttribute('name'),
      eventsInfo.target.value
    );
  }

  function handleSubmit(eventsInfo) {
    eventsInfo.preventDefault();
    setCategories([
      ...categories,
      values
    ]);

    setValues(initialValues);
  }

  return(
    <PageDefault>
      <h1>Cadastro de categoria: {values.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type=""
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
              {category.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
          Ir para home
      </Link>
    </PageDefault>
  );
}

export default Categoria;
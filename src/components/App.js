import React, { useState } from 'react';
import Translate from './Translate';
import Dropdown from './Dropdown';
import Search from './Search';
import Accordion from './Accordion';
import Route from './Route';
import Header from './Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend Javascript frammework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite JS library among engineers',
  },
  {
    title: 'How do use React?',
    content: 'You use React by creatinf components',
  },
];

const options = [
  { label: 'The color red', value: 'red' },
  { label: 'The color green', value: 'green' },
  { label: 'Shades of blue', value: 'blue' },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;

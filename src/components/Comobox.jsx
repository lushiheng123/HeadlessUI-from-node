import { Combobox } from "@headlessui/react";
import { useState } from "react";

const people = [
    'Durward Reynolds',
    'Kenton Towne',
    'Therese Wunsch',
    'Benedict Kessler',
    'Katelyn Rohan',
];

export default function MyComobox() {

    const [selected, setSelected] = useState(people[0]);
    const [query, setQuery] = useState('');

    const filteredPeople = 
        query === ''
            ? people
            : people.filter(person => person.toLowerCase().includes(query.toLowerCase()));
    return (
        <Combobox value={selected} onChange={setSelected}>
            <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
            <Combobox.Options>
                {filteredPeople.map((person) => (
                    <Combobox.Option key={person} value={person}>
                        {person}
                    </Combobox.Option>
                
                ))}


            </Combobox.Options>
        
        
        </Combobox>
        
        
    );

}
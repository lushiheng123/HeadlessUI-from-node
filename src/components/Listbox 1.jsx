import { Listbox } from "@headlessui/react";
import { useState } from "react";


const people = [
  { id: 1,name:"lushiheng",unavailable: false },
  { id: 2, name: "dengziqi", unavailable: false },
  { id: 3, name: "mubingtao", unavailable: false },
  { id: 4, name: "nixiaomeng", unavailable: true },
  { id: 5, name: "lvjiantu", unavailable: false },

]
  

function MyListbox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button>{selectedPerson.name}</Listbox.Button>
      <Listbox.Options>
        {people.map((person) => (
          <Listbox.Option 
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Listbox.Option>
        
        ))}

      </Listbox.Options>



    </Listbox>
    
  );

}
export default MyListbox;
// import { useReducer } from "react";
import Headers from "./Components/Headers";
import AddContact from "./Components/AddContact";
import Contacts from "./Components/Contacts";
// import { PhoneBookContext } from "./Store/PhonebookItems";
import { PhoneBookContextProvider } from "./Store/PhonebookItems";

// making a reducer function, since this function is a pure function that's why not  making this function inside the component function
// note - Reducer ka work hai , current state ko leke, new state ko return karna

const App = () => {
  // declaring the initial state first

  // declaring a state with the name contactlist and setting up its current value as "empty array"

  // here we will be destructuring the state object to get the properties so defined as state, which is then passed as the value in the context provider

  // const [contactlist, setContactlist] = useState([]);
  //const [readOnly, setReadOnly] = useState(false);
  // const [contactCount, setContactCount] = useState(0);

  //let [newprop, setnewprop] = useState(true);

  // let [itemId, setItemId] = useState("");
  // let [editName, seteditname] = useState("");
  // let [editphonenumber, seteditphonenumber] = useState("");

  /*const createContact = (name, phone) => {
    setContactlist((currentValue) => [
      ...currentValue,
      { id: contactCount + 1, contactName: name, phonenumber: phone },
    ]);
    setContactCount(contactCount + 1);
  }; */

  /*const handleEdit = (id, name, number) => {
    seteditname(name);
    seteditphonenumber(number);
    setItemId(id);
    setnewprop(false);
  }; */

  /* const deleteContact = (ID) => {
    const refreshedContactList = contactlist.filter((items) => items.id !== ID);
    setContactlist(refreshedContactList);
    setContactCount(contactCount - 1);
  }; */

  /* const handleupdatecontact = (id, updatedName, updatedConatct) => {
    const updatedContactList = contactlist.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          contactName: updatedName,
          phonenumber: updatedConatct,
        };
      }
      //  here i am returning the original item if the condition is not met
      return item;
    });
    setContactlist(updatedContactList);
    setItemId("");
    seteditname("");
    seteditphonenumber("");
    setnewprop(true);
    toggleReadOnly(false);
  }; */

  return (
    //here i have wrapped the component inside the newly created -- component in the store, to keep the UI clean and business logic sepearte in a different folder
    <PhoneBookContextProvider>
      <div className="container">
        <Headers />
        <AddContact />
        <Contacts />
      </div>
    </PhoneBookContextProvider>
  );
};

export default App;

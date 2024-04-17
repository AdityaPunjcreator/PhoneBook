import { useState } from "react";
import Headers from "./Components/Headers";
import AddContact from "./Components/AddContact";
import Contacts from "./Components/Contacts";
import { PhoneBookContext } from "./Store/PhonebookItems";

const App = () => {
  const [contactlist, setContactlist] = useState([]);
  const [readOnly, setReadOnly] = useState(false);
  const [contactCount, setContactCount] = useState(0);

  let [newprop, setnewprop] = useState(true);

  let [itemId, setItemId] = useState("");
  let [editName, seteditname] = useState("");
  let [editphonenumber, seteditphonenumber] = useState("");

  const toggleReadOnly = (value) => {
    setReadOnly(value);
  };

  const createContact = (name, phone) => {
    setContactlist((currentValue) => [
      ...currentValue,
      { id: contactCount + 1, contactName: name, phonenumber: phone },
    ]);
    setContactCount(contactCount + 1);
  };

  const handleEdit = (id, name, number) => {
    seteditname(name);
    seteditphonenumber(number);
    setItemId(id);
    setnewprop(false);
  };

  const deleteContact = (ID) => {
    const refreshedContactList = contactlist.filter((items) => items.id !== ID);
    setContactlist(refreshedContactList);
    setContactCount(contactCount - 1);
  };

  const editname = (value) => {
    seteditname(value);
  };

  const editnumber = (value) => {
    seteditphonenumber(value);
  };

  const manageItemId = (value) => {
    setItemId(value);
  };

  const handleupdatecontact = (id, updatedName, updatedConatct) => {
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
  };

  return (
    <PhoneBookContext.Provider
      value={{
        contactlist,
        readOnly,
        itemId,
        editName,
        editphonenumber,
        newprop,
        editname,
        editnumber,
        createContact,
        handleEdit,
        handleupdatecontact,
        deleteContact,
        toggleReadOnly,
        manageItemId,
      }}
    >
      <div className="container">
        <Headers />
        <AddContact />
        <Contacts />
      </div>
    </PhoneBookContext.Provider>
  );
};

export default App;

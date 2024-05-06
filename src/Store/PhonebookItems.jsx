import { useReducer } from "react";
import { createContext } from "react";

let PhoneBookContext = createContext();

const Phonebookreducer = (currentPhonebookItems, action) => {
  switch (action.type) {
    case "ADD_Item":
      return {
        ...currentPhonebookItems,
        contactlist: [
          ...currentPhonebookItems.contactlist,
          {
            id: currentPhonebookItems.contactCount + 1,
            contactName: action.payload.name,
            phonenumber: action.payload.phone,
          },
        ],
        contactCount: currentPhonebookItems.contactCount + 1,
      };
    case "DELETE_ITEM":
      return {
        ...currentPhonebookItems,
        contactlist: currentPhonebookItems.contactlist.filter(
          (items) => items.id !== action.payload.id
        ), // here i am assigning a new filtered array to the contactlist property
        contactCount: currentPhonebookItems.contactCount - 1,
      };
    case "TOGGLE_READONLY":
      return {
        ...currentPhonebookItems,
        readOnly: action.payload.value,
      };

    case "EDIT_ITEM":
      return {
        ...currentPhonebookItems,
        editName: action.payload.name,
        itemId: action.payload.id,
        editphonenumber: action.payload.number,
        newprop: false,
      };
    case "EDIT_NAME":
      return {
        ...currentPhonebookItems,
        editName: action.payload.value,
      };

    case "EDIT_NUMBER":
      return {
        ...currentPhonebookItems,
        editphonenumber: action.payload.value,
      };

    case "EDIT_ID":
      return {
        ...currentPhonebookItems,
        itemId: action.payload.value,
      };

    case "UPDATE_CONTACTLIST":
      return {
        ...currentPhonebookItems,
        contactlist: currentPhonebookItems.contactlist.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              contactName: action.payload.updatedName,
              phonenumber: action.payload.updatedContact,
            };
          }
          //  here i am returning the original item if the condition is not met
          return item;
        }), // note contact list will be array only, don't get confused ki why we have not mentioned like this--- contactlsit : [], aisa karne se array of arrays milta kyuki , map funciton itself returns an array
        itemId: "",
        editName: "",
        editphonenumber: "",
        readOnly: false,
        newprop: true,
      };
  }
};

const PhoneBookContextProvider = ({ children }) => {
  const initialState = {
    contactlist: [],
    readOnly: false,
    contactCount: 0,
    newprop: true,
    itemId: "",
    editName: "",
    editphonenumber: "",
  };

  const [state, dispatchAction] = useReducer(Phonebookreducer, initialState);

  const {
    contactlist,
    readOnly,
    contactCount,
    newprop,
    itemId,
    editName,
    editphonenumber,
  } = state;

  const createContact = (name, phone) => {
    const addnewitemAction = {
      type: "ADD_Item", // caps mai with underscore is a standard of specifying the action
      payload: {
        name: name,
        phone: phone,
      },
    };
    dispatchAction(addnewitemAction);
  };

  const deleteContact = (id) => {
    const delteAction = {
      type: "DELETE_ITEM",
      payload: {
        id,
      },
    };
    dispatchAction(delteAction);
  };

  const handleEdit = (id, name, number) => {
    const editaction = {
      type: "EDIT_ITEM",
      payload: {
        id,
        name,
        number,
      },
    };
    dispatchAction(editaction);
  };

  const toggleReadOnly = (value) => {
    const readonlyaction = {
      type: "TOGGLE_READONLY",
      payload: {
        value,
      },
    };
    dispatchAction(readonlyaction);
  };
  const editname = (value) => {
    // note earlier we were simply setting the state like this - seteditname(value)
    const editnameaction = {
      type: "EDIT_NAME",
      payload: {
        value,
      },
    };
    dispatchAction(editnameaction);
  };

  const editnumber = (value) => {
    const editnumberaction = {
      type: "EDIT_NUMBER",
      payload: {
        value,
      },
    };
    dispatchAction(editnumberaction);
  };
  const manageItemId = (value) => {
    const editIdaction = {
      type: "EDIT_ID",
      payload: {
        value,
      },
    };
    dispatchAction(editIdaction);
  };

  const handleupdatecontact = (id, updatedName, updatedContact) => {
    const updatecontactaction = {
      type: "UPDATE_CONTACTLIST",
      payload: {
        id,
        updatedName,
        updatedContact,
      },
    };
    dispatchAction(updatecontactaction);
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
      {children}
    </PhoneBookContext.Provider>
  );
};

export { PhoneBookContext, PhoneBookContextProvider };

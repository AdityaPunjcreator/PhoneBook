import { useRef } from "react";
import { useContext } from "react";
import { PhoneBookContext } from "../Store/PhonebookItems";

const AddContact = () => {
  const contactName = useRef();
  const phoneNumber = useRef();
  const handleFormSubmission = (event) => {
    event.preventDefault();
    if (contactName.current.value === "" || phoneNumber.current.value === "") {
      return alert("one or the other fields are missing");
    }
    let contactInfo = contactName.current.value.trim();
    let phone = phoneNumber.current.value.trim();

    createContact(contactInfo, phone);
    contactName.current.value = "";
    phoneNumber.current.value = "";
  };

  let {
    createContact,
    readOnly,
    editName,
    editphonenumber,
    editname,
    editnumber,
    manageItemId,
    itemId,
    newprop,
    handleupdatecontact,
  } = useContext(PhoneBookContext);

  return (
    <div className="row" onSubmit={handleFormSubmission}>
      <div className="col-md-6 mt-3">
        <div className="card shadow-sm p-2">
          {/* basically this property of "user-select" to "none" does not allows the user to select the given text */}
          <h2 style={{ userSelect: "none" }}>Add Contact</h2>
          <form action="">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Name"
              ref={contactName}
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Phone"
              ref={phoneNumber}
            />
            <button type="submit" className="btn btn-primary">
              Save Contact
            </button>
          </form>
        </div>
      </div>

      <div className="col-md-6 mt-3">
        <div className="card shadow-sm p-2">
          <h2>View/Update</h2>
          <input
            className="form-control  mb-2 bg-body-secondary"
            type="text"
            readOnly
            value={itemId}
            onChange={(e) => manageItemId(e.target.value)}
          />
          <input
            className={`form-control mb-2 ${
              readOnly ? null : "bg-body-secondary"
            }`}
            value={editName}
            onChange={(e) => editname(e.target.value)}
            type="text"
            readOnly={readOnly ? false : true}
          />
          <input
            className={`form-control mb-2 ${
              readOnly ? null : "bg-body-secondary"
            }`}
            value={editphonenumber}
            onChange={(e) => editnumber(e.target.value)}
            type="number"
            readOnly={readOnly ? false : true}
          />
          <button
            className="btn btn-primary"
            disabled={newprop}
            onClick={() =>
              handleupdatecontact(itemId, editName, editphonenumber)
            }
          >
            Update Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContact;

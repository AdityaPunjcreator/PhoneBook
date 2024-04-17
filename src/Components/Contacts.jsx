import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { useContext } from "react";
import { PhoneBookContext } from "../Store/PhonebookItems";

const Contacts = () => {
  let { contactlist, deleteContact, toggleReadOnly, handleEdit } =
    useContext(PhoneBookContext);

  function manageEdit(items) {
    toggleReadOnly(true);
    handleEdit(items.id, items.contactName, items.phonenumber);
  }

  return (
    <div className="row mt-5">
      {console.log(contactlist)}
      <div className="col">
        <table className="table table-bordered  table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            {contactlist.map((items) => {
              return (
                <tr key={items.id}>
                  <th scope="row">{items.id}</th>
                  <td>{items.contactName}</td>
                  <td>{items.phonenumber}</td>

                  <td>
                    <span className="me-3">
                      <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="delete"
                        data-tooltip-place="bottom"
                      >
                        <AiFillDelete
                          className="fs-4"
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => deleteContact(items.id)}
                        />
                      </a>
                    </span>

                    <span>
                      <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="edit"
                        data-tooltip-place="bottom"
                      >
                        <AiFillEdit
                          className="fs-4 "
                          style={{ color: "darkgreen", cursor: "pointer" }}
                          onClick={() => manageEdit(items)}
                        />
                      </a>
                    </span>
                    <Tooltip id="my-tooltip" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;

import { HiUser, HiPhone } from "react-icons/hi";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p className={css.info}>
          <HiUser />
          {contact.name}
        </p>
        <p className={css.info}>
          <HiPhone />
          {contact.number}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </>
  );
};

import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (values: { search: string }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const notify = () => toast("Enter what you would like to find");

  return (
    <div className={styles.searchBar}>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, { resetForm }) => {
          if (!values.search.trim()) {
            notify();
            return;
          }
          onSubmit(values);
          resetForm();
        }}
      >
        <Form className={styles.form}>
          <Field
            type="text"
            name="search"
            className={styles.field}
            placeholder="Search images..."
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
};

export default SearchBar;

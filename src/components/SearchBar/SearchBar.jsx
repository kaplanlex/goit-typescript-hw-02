import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
    const notify = () => toast("Enter what you would like to find");

    const initialValues = { search: "" };

    return (
        <div className={styles.searchBar}>
            <Formik
                initialValues={initialValues}
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

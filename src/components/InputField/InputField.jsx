import styles from './InputField.module.scss';

function InputField(props) {

    return(
        <div className={styles.container}>
            <input type='text'/>
            <button>Add note</button>
        </div>
    );
}

export default InputField;

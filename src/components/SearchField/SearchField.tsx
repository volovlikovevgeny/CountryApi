import SearchRounded from '@material-ui/icons/SearchRounded'
import styles from './SearchField.module.css'

export default function SearchInput({ ...rest }) {
    return (
        <div className={styles.wrapper}>
            <SearchRounded />
            <input className={styles.input} {...rest}></input>
        </div >
    )
}
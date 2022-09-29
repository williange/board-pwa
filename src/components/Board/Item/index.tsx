import styles from './styles.module.scss';

interface IProps {
    id: string;
    description: string;
    title: string;
} 

export function BoardItem({id, description, title}: IProps) {
    return(
        <div className={styles.boardItem} data-testid={id}>
            <span className={styles.title}>{title}</span>
            <div className={styles.descriptionContainer}>
                <p>{description}</p>
            </div>
        </div>
    )
}
import styles from "./styles.module.scss";

interface IProps {
	className?: string;
	title: string;
	type?: "button" | "submit" | "reset";
	onClick: (value: any) => any;
}

export function Button({ title, className, type, onClick }: IProps) {
	return (
		<button
			type={type}
			className={`${styles.button} ${className}`}
			onClick={onClick}
		>
			{title}
		</button>
	);
}

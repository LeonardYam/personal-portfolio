import Link from "next/link";
import styles from './styles.module.css'

function NavLink({ href, name, id }: { href: string, name: string, id?: string }) {
	return (
		<Link className={styles.navLink} href={href} id={id}>
			{name}
		</Link>
	)
}

export default function NavBar() {
	return (
		<nav className={styles.navBar}>
			<NavLink href={"/"} name={"intro"} />
			<NavLink href={"/Leonard_Yam_resume.pdf"} name={"resume"} id={styles.resume} />
		</nav>
	)
}
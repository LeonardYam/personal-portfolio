import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import IconLink from "@/components/IconLink";
import styles from "./styles.module.css"

export default function Footer() {
	const githubURL = "https://github.com/LeonardYam"
	const linkedinURL = "https://linkedin.com/in/leonard-yam-1a645a250"
	const emailURL = "mailto:yamleonard@gmail.com"

	return (
		<footer className={styles.footer}>
			<p>Socials</p>
			<IconLink className={styles.footerLink} url={githubURL} faIcon={faGithub} />
			<IconLink className={styles.footerLink} url={linkedinURL} faIcon={faLinkedin} />
			<IconLink className={styles.footerLink} url={emailURL} faIcon={faEnvelope} />
		</footer>
	)
}
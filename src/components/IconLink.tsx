import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

export default function IconLink({className, url, faIcon}: {className:string, url: string, faIcon: IconDefinition}) {
	return (
		<a href={url}>
			<FontAwesomeIcon className={className} icon={faIcon} size="2x" />
		</a>
	)
}
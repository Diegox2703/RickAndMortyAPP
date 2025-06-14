import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";

export default function IconTextButton({ variant, size, children, icon, onClickFn, isDisabled }) {
  return (
    <Button variant={variant} size={size} onClickFn={onClickFn} isDisabled={isDisabled}>
        <FontAwesomeIcon icon={icon}/>
        {children}
    </Button>
  )
}

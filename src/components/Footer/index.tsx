import { useNavigate } from "react-router-dom";
import { useDrawLogic } from "../../state/hooks/useDrawLogic";
import { useListOfParticipants } from "../../state/hooks/useListOfParticipants";
import "./styles.scss";

const Footer = () => {

    const participants = useListOfParticipants();

    const navigateTo = useNavigate();

    const draw = useDrawLogic();

    const start = () => {
        draw();
        navigateTo('/draw');
    }

    return (
        <footer className="footer-configurations">
            <button className="button" disabled={participants.length < 3} onClick={start}>Start the draw</button>
            <img src="/images/bags.png" alt="Shopping bag" />
        </footer>
    )
};

export default Footer;
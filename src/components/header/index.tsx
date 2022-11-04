import "./styles.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="image-logo" role="img" aria-label="Application's logo"></div>
            <img src="/images/participant.png" className="participant" alt="Participant with a present in his hands" />
        </header>
    )
}

export default Header;
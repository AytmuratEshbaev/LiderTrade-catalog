
const Header = () => {
    return (
        <header className="header">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" className="logo" />
            <h1>LiderTrade</h1>
        </header>
    )
}

export default Header;
import './Header.css'
const Header = ({title}) => {
    return (
        <header>
            <div className="content-container">
                <h1>{title}</h1>
            </div>
        </header>
    );
  }
  
  export default Header;
  
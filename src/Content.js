import Pill from './Pill';
const Content = ({pills}) => {
    return (
      <main>
        <div className="content-container">
          {pills.length !== 0 ? pills.map((pill, index) => (
              <Pill key={index} pill = {pill} />))
            : (<p>No pills.</p>) }
        </div>
      </main>
    );
  }
  
  export default Content;
  
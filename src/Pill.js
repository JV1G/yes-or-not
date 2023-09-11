import './Pill.css';
const Pill = ({pill}) => {
    return (
        <div className="pill">
            <p>{pill.title}</p>
            <p>{pill.author}</p>
            <p>{pill.text}</p>
            <p>{pill.redpilled}</p>
            <p>{pill.bluepilled}</p>
        </div>
    );
  }
  
  export default Pill;
  
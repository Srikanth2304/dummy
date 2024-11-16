import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileCard({name, age, num,hobbies,onHobbyClick}) {
    // const name = "John Doe";
    const sum = num + 1;
    return (
        <div>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
        <h1>Sum:{sum}</h1>
        <h1>Hobbies</h1>
        <ul>
            {hobbies.map((hobby,index) => {
                return <li key={index} onClick={() => onHobbyClick(hobby)}>
                    <button type="button" class="btn btn-primary" >{hobby}</button>
                    </li>;
            })}
        </ul>
        </div>
    );
}

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string)
}
export default ProfileCard;
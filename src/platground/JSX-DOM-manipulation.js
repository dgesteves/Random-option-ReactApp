const user = {
    name: 'Diogo Esteves',
    age: 29,
    location: 'Lisbon'
};

const getName = name => name ? name.toUpperCase() : 'Anonymous';
const getLocation = location => location ? <p>Location:{location}</p> : undefined;

const templateTwo = (
    <div>
        <h1>{getName(user.name)}
        </h1>{(user.age && user.age >= 18) && <p>Age:{user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

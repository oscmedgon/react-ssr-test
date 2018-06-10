import React from 'react';

const Home = () => {
    return (
      <div>
        <div>
            Hola mundo soy la home más molona
        </div>
        <button onClick={() => console.log('Why did you press that button')}>
          Don't Press Me!!!
        </button>
      </div>
    );
}

export default Home;
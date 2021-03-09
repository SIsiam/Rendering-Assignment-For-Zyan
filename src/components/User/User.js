import React from 'react';

const User = (props) => {
    const familier = props.familier;
    let greetings;
    if (familier) {
        greetings = <p>welcome My Friend</p>
    }
    else {

        greetings = <p>who the Hell Are You?</p>
    }
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greetings}
            </div>
            <div>
                <h2>Food</h2>
                {
                    familier ? <p>I Will Buy Food For You</p> : <p>Lets eat Food his Whoos whoss</p>
                }
            </div>
            <div>
                <h2>Friend</h2>
                {
                    familier ? <p>Thanks Dust</p> : <p>Let's Join Us Facebook</p>

                }
            </div>
        </div>
    );
};

export default User;
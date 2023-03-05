import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Baraa Alsher personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="https://github.com/Baraasher">Github Profile</Link></h2>
          <p>
        View my github profile to see my repository
          </p>
        </div>
      </header>

      <header
       
      >
        <div className="title">
          <h2 data-testid="heading"><Link to="https://github.com/Baraasher">Youtube Chanel</Link></h2>
          <p>
My Youtube Channel for coding explanation

          </p>
        </div>
      </header>

    </article>
  </Main>
);

export default Index;

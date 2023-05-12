import { LinkPage } from 'components/SharedLayout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
const List = styled.ul`
  /* list-style: none; */
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const About = () => {
  return (
    <main>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        laborum amet ab cumque sit nihil dolore modi error repudiandae
        perspiciatis atque voluptas corrupti, doloribus ex maiores quam magni
        mollitia illum dolor quis alias in sequi quod. Sunt ex numquam hic
        asperiores facere natus sapiente cum neque laudantium quam, expedita
        voluptates atque quia aspernatur saepe illo, rem quasi praesentium
        aliquid sed inventore obcaecati veniam? Nisi magnam vero, dolore
        praesentium totam ducimus similique asperiores culpa, eius amet
        repudiandae quam ut. Architecto commodi, tempore ut nostrum voluptas
        dolorum illum voluptatum dolores! Quas perferendis quis alias excepturi
        eaque voluptatibus eveniet error, nulla rem iusto?
      </p>
      <List>
        <li>
          <LinkPage to="mission">Read about our mission</LinkPage>
        </li>
        <li>
          <LinkPage to="team">Get to know the team</LinkPage>
        </li>
        <li>
          <LinkPage to="reviews">Go through the reviews</LinkPage>
        </li>
      </List>

      <Suspense fallback={<div>Loading subpage...</div>}>
        {/* вказати де саме в компоненті батьківського маршруту <About> ми хочемо рендерувати дочірні маршрути. Для цього у React Router є компонент <Outlet>. */}
        <Outlet />
      </Suspense>
    </main>
  );
};

export default About;
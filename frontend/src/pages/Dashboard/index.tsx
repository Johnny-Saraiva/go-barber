import React, { useState } from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 23</span>
            <span>Sábado</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/61694500?s=460&u=569ca31df3fdba24b547eb9afd836d72ae2f30ae&v=4"
                alt="Johnny Saraiva"
              />

              <strong>Johnny Saraiva</strong>
              <span>
                <FiClock />
                14:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/61694500?s=460&u=569ca31df3fdba24b547eb9afd836d72ae2f30ae&v=4"
                  alt="Johnny Saraiva"
                />

                <strong>Johnny Saraiva</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/61694500?s=460&u=569ca31df3fdba24b547eb9afd836d72ae2f30ae&v=4"
                  alt="Johnny Saraiva"
                />

                <strong>Johnny Saraiva</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/61694500?s=460&u=569ca31df3fdba24b547eb9afd836d72ae2f30ae&v=4"
                  alt="Johnny Saraiva"
                />

                <strong>Johnny Saraiva</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/61694500?s=460&u=569ca31df3fdba24b547eb9afd836d72ae2f30ae&v=4"
                  alt="Johnny Saraiva"
                />

                <strong>Johnny Saraiva</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;

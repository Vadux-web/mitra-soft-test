import React from "react";
import { Accordion, Container } from "react-bootstrap";
import Styles from "./Styles";

let About = () => {
  return (
    <div>
      <Container>
        <h1>Обо мне</h1>
        <h4>Лунёв Вадим Васильевич (39 лет)</h4>
        <p>
          Тел.: +7 (926) 453-13-94{" "}
          <span style={{ marginLeft: "20px" }}>E-mail: lunev82@gmail.com</span>{" "}
        </p>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Путь в IT</Accordion.Header>
            <Accordion.Body>
              Занимался дизайном полиграфии, в какой-то момент понял, что пора
              смещаться в сторону веба, изучая UX/UI познакомился с HTML/СSS/JS
              и решил развиваться в сторону Frontend.
              <ul>
                <li> Желание расти и изучать новые технологии.</li>
                <li>Стремление писать чистый и красивый код.</li>
                <li>Умею самостоятельно изучать материал.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Образование</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li> Яндекс.Практикум Веб Разработка (2021)</li>
                <li> Contented.ru UX/UI дизайнер (2019)</li>
                <li>
                  {" "}
                  Ташкентский Государственный Технический Университет
                  Электроники, Автоматизация производственных процессов (2008)
                </li>
                <li>
                  {" "}
                  Рязанская Государственная Радиотехническая Академия
                  Электроники, Электронные приборы и устройства (2003)
                </li>
              </ul>
              Английский язык на уровне чтения технической документации.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Дополнительно</Accordion.Header>
            <Accordion.Body>
              Увлекаюсь бегом и велоспортом, участвую в ультрамарафонах и
              соревнованиях по треилраннингу. Люблю походы и горные лыжи.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default About;

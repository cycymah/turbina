import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <section className="main__container-text">
        <h2 className="main__title">О&nbsp;ПРОЕКТЕ.</h2>
        <ul className="main__list">
          <li className="main__text">
            <p className="main__description">
              Мы&nbsp;знаем, что наши дети постоянно существуют в&nbsp;режиме
              непрекращающегося творческого процесса. Мы&nbsp;видим это, когда
              ребёнок что-то напевает, когда он&nbsp;бесконечно рисует, когда
              придумывает истории, когда разговаривает с&nbsp;едой
              и&nbsp;игрушками&nbsp;&mdash; дети постоянно включены
              и&nbsp;что-то изобретают. Родители часто недооценивают это
              спонтанное творчество ребёнка. Это не&nbsp;плохо, просто
              мы&nbsp;привыкаем к&nbsp;этому. Давайте попробуем внимательнее
              присмотреться к&nbsp;нашим детям.
            </p>
          </li>
          <li className="main__text main__text_margin_indent">
            <p className="main__description">
              Мы&nbsp;запускаем проект &laquo;ТУРБИНА&raquo;, который открывает
              работу настоящего музыкального лейбла на&nbsp;базе
              &laquo;Маршака&raquo;. В&nbsp;рамках &laquo;ТУРБИНЫ&raquo; лучшие
              современные инди-музыканты пишут свои песни на&nbsp;стихи,
              написанные детьми. Здесь важно&nbsp;&mdash;
              мы&nbsp;не&nbsp;заставляем наших детей садиться и&nbsp;писать
              поэзию, мы&nbsp;говорим о&nbsp;том, что родителям стоит быть более
              внимательными и&nbsp;чуткими к&nbsp;своим детям. Именно так
              мы&nbsp;сможем получить тексты, которые перестанут быть детскими,
              не&nbsp;будут осмыслены как взрослые&nbsp;&mdash; поэзия, которая
              сокращает дистанцию между взрослостью и&nbsp;детством, где
              спонтанное детское творчество и&nbsp;бессознательное, замеченное
              родителем, становится общественным культурным достоянием.
            </p>
          </li>
        </ul>
        <h2 className="main__title">КАК ЭТО РАБОТАЕТ?</h2>
        <p className="main__description">
          Вы&nbsp;можете прислать нам тексты, родившиеся у&nbsp;ваших детей,
          которые вы&nbsp;записали и&nbsp;считаете, что это сильное
          высказывание. Мы&nbsp;собираем пул таких текстов и&nbsp;передаём
          их&nbsp;музыкантам. Артисты создают музыку на&nbsp;эти стихи.
          Мы&nbsp;продюсируем выпуск трека, возможно съёмки клипа и&nbsp;так
          далее. Мы&nbsp;всегда указываем автора стихотворений внутри релиза:
          Хадн Дадн feat. Варя Карпова и&nbsp;Федя Быстров&nbsp;&mdash; Контур.
        </p>
        <h2 className="main__title">ТЕЗИСЫ.</h2>
        <ul className="main__list">
          <li className="main__text">
            <p className="main__description">
            &bull;&nbsp;Дети никогда не&nbsp;прекращают творить и&nbsp;круто
              стараться быть на&nbsp;них похожими в&nbsp;этом
            </p>
          </li>
          <li className="main__text">
            <p className="main__description">
            &bull;&nbsp;Детское бессознательное помогает родителям понять,
              что происходит внутри семьи
            </p>
          </li>
          <li className="main__text">
            <p className="main__description">
            &bull;&nbsp;Не&nbsp;существует детской и&nbsp;взрослой поэзии.
              Существует мысль и&nbsp;чувство, зафиксированное в&nbsp;ней
            </p>
          </li>
          <li className="main__text">
            <p className="main__description">
            &bull;&nbsp;Дети получают невероятное удовольствие
              и&nbsp;мотивацию от&nbsp;того, что их&nbsp;творчество востребовано
              сверстниками и&nbsp;взрослыми.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
};
export default Main;

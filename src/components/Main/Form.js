import './Form.css';
import React from 'react';
import { useForm } from "react-hook-form";

function Form({ onUpdateUser }) {
  const [formSubmitState, setFormSubmitState] = React.useState(false);
  const { register, handleSubmit, errors } = useForm({mode: 'onChange'});

  const onSubmit = data => {
    setFormSubmitState(true)
    onUpdateUser(data);
  };

  return (
    <>
      <form action="#" name="user-form" className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className="form__title">Форма.</h2>
        <p className="form__text">Заполняя эту форму, вы становитесь частью проекта.</p>

        <input
          id="name-input"
          name="name"
          type="text"
          className={errors.name ? "form__input form__input_type_error" : "form__input"}
          defaultValue=""
          ref={register({
            required: {value: true, message: 'Заполните это поле'},
            minLength: {value: 2, message: 'Текст должен содержать не менее 2 симв.'},
            maxLength: 40,
          })}
          placeholder="Имя и фамилия автора"
          autoComplete="off"
        />

        <span
          id="input-error"
          className={errors.name ? "form__input-error form__input-error_active" : "form__input-error"}
        >
          {errors.name && errors.name.message}
        </span>

        <input
          id="email-input"
          name="email"
          type="email"
          className={errors.email ? "form__input form__input_type_error" : "form__input"}
          defaultValue=""
          ref={register({
            required: {value: true, message: 'Заполните это поле'},
            minLength: {value: 2, message: 'Текст должен содержать не менее 2 симв.'},
            maxLength: 200,
          })}
          placeholder="Почта"
          autoComplete="off"
        />

        <span
          id="input-error"
          className={errors.email ? "form__input-error form__input-error_active" : "form__input-error"}
        >
          {errors.email && errors.email.message}
        </span>

        <input
          id="phone-number-input"
          name="phone"
          type="tel"
          className={errors.phone ? "form__input form__input_type_error" : "form__input"}
          defaultValue=""
          ref={register({
            required: {value: true, message: 'Заполните это поле'},
            minLength: {value: 2, message: 'Текст должен содержать не менее 2 симв.'},
            maxLength: 200,
          })}
          placeholder="Телефон"
          autoComplete="off"
        />

        <span
          id="input-error"
          className={errors.phone ? "form__input-error form__input-error_active" : "form__input-error"}
        >
          {errors.phone && errors.phone.message}
        </span>

        <input
          id="verse-input"
          name="verse"
          type="text"
          className={errors.verse ? "form__input form__input_type_verse form__input_type_error" : "form__input form__input_type_verse"}
          defaultValue=""
          ref={register({
            required: {value: true, message: 'Заполните это поле'},
            minLength: {value: 2, message: 'Текст должен содержать не менее 2 симв.'},
            maxLength: 200,
          })}
          placeholder="Стихи"
          autoComplete="off"
        />

        <span
          id="input-error"
          className={errors.verse ? "form__input-error form__input-error_active" : "form__input-error"}
        >
          {errors.verse && errors.verse.message}
        </span>

        <div className="form__container">
          <input type="checkbox" className="form__checkbox" id="form-checkbox" ></input>
          <label htmlFor="form-checkbox" className="form__label"></label>
          <div className="form__checkbox-text">Согласен с&nbsp;<a className="form__link" target="_blank" rel="noreferrer" href="#">офертой</a></div>
        </div>

        <button
          type="submit"
          className={(errors.name || errors.email) ? "form__save-button form__save-button_inactive" : "form__save-button"}
          disabled={(errors.name || errors.email) && true}
        >
          {formSubmitState.state ? 'Отправление...' : 'Отправить форму'}
        </button>
      </form>
    </>
  );
}

export default Form;

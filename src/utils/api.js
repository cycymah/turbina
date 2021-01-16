export class Api {
  constructor(config) {
    this._url = config.url;
    this._token = config.token;
  }

  // метод для запроса массива песен
  getSongs() {
    return fetch(`${this._url}/songs`, { // скорее всего, адрес запроса будет другим
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  // метод для отправки данных формы
  saveUserInfo(formData) {
    return fetch(`${this._url}/users`, { // скорее всего, адрес запроса будет другим
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}

// создаём экземпляр класса с запросом к серверу
const apiRequest = new Api({
  url: '', // здесь будет URL сервера
  token: '' // здесь токен для доступа к серверу подаётся в класс
})

export default apiRequest;

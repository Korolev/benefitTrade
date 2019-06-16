import React, { Component } from 'react'
import './client-map.css'

class ClientMap extends Component {
  static propTypes = {}

  componentDidMount() {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.innerHTML = 'ymaps.ready(init)'
    this.instance.appendChild(s)
  }

  render() {
    return (
      <div className="client-map" ref={(el) => (this.instance = el)}>
        <div id="header">
          <input
            type="text"
            id="suggest"
            className="input"
            placeholder="Введите адрес"
          />
          <button type="submit" id="button" className="button">
            Проверить
          </button>
        </div>
        <p id="notice">Адрес не найден</p>
        <div id="map"></div>
        <div id="footer">
          <div id="messageHeader"></div>
          <div id="message"></div>
        </div>
      </div>
    )
  }
}

export default ClientMap

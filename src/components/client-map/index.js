import React, { Component } from 'react'
import './client-map.css'

class ClientMap extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="client-map">
        <div id="header">
          <input
            type="text"
            id="suggest"
            className="input"
            placeholder="Введите адрес"
          />
          <button type="submit" id="button">
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

import React, { Component } from 'react'
import './brands.css'

class Brands extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="brands">
        <p>Специализация магазина:</p>
        <ul>
          <li>
            <label className="typo_size_l">
              <input type="checkbox" /> Сыры
            </label>
            <ul>
              <li>
                <label>
                  <input type="checkbox" /> Российский
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Российский
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Российский
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Российский
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Российский
                </label>
              </li>
            </ul>
          </li>
          <li>
            <label className="typo_size_l">
              <input type="checkbox" /> Колбаса
            </label>

            <ul>
              <li>
                <label>
                  <input type="checkbox" /> Докторская
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Докторская
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Докторская
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Докторская
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Докторская
                </label>
              </li>
            </ul>
          </li>
          <li>
            <label className="typo_size_l">
              <input type="checkbox" /> Молочная продукция
            </label>

            <ul>
              <li>
                <label>
                  <input type="checkbox" /> Молоко 1л
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Молоко 1л
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Молоко 1л
                </label>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default Brands

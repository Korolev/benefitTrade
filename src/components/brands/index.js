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
            <input type="checkbox" id="check" name="check" />
            <label for="check" className="typo_size_l">
              Продукты
            </label>

            <ul>
              <li>
                <input type="checkbox" id="check2" name="check2" />
                <label for="check2">Сыры</label>
              </li>
              <li>
                <input type="checkbox" id="check3" name="check3" />
                <label for="check3">Колбаса</label>
              </li>
              <li>
                <input type="checkbox" id="check4" name="check4" />
                <label for="check4">Молоко</label>
              </li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="check5" name="check5" />
            <label for="check5" className="typo_size_l">
              Бытовая химия
            </label>

            <ul>
              <li>
                <input type="checkbox" id="check6" name="check6" />
                <label for="check6">Порошки</label>
              </li>
              <li>
                <input type="checkbox" id="check7" name="check7" />
                <label for="check7">Салфетки</label>
              </li>
              <li>
                <input type="checkbox" id="check8" name="check8" />
                <label for="check8">Моющее</label>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default Brands

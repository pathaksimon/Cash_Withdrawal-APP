import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  pressing = () => {
    const {vichit, nooby} = this.props
    const {value} = vichit
    nooby(value)
  }

  render() {
    const {vichit} = this.props
    const {value} = vichit

    return (
      <li className="lie">
        <button className="bitta" type="button" onClick={this.pressing}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem

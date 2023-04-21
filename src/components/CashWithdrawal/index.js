import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  nooby = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  mama = () => {
    const {count} = this.state
    if (count > 0) {
      return count
    }
    return 0
  }

  render() {
    const {denominationsList} = this.props

    const kaka = this.mama()
    return (
      <div className="bg-container">
        <div className="card1">
          <div className="firstCard">
            <p className="para1">S</p>
            <p className="para2">Sarah Williams</p>
          </div>

          <div className="secondCard">
            <p className="secondpara">Your Balance</p>
            <div>
              <p className="chalu">{kaka}</p>
              <p className="secondpara">In Rupees</p>
            </div>
          </div>

          <div className="thirdCard">
            <p className="chalu">Withdraw</p>
            <p className="secondpara">CHOOSE SUM (IN RUPEES)</p>
            <ul className="uli">
              {denominationsList.map(each => (
                <DenominationItem
                  vichit={each}
                  nooby={this.nooby}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

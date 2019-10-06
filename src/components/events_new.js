import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { postEvents } from '../actions'


class EventsNew extends Component{

  render(){
    // const props = this.props

    return(
      <React.Fragment>
        <h1>jfie</h1>
      </React.Fragment>
    )
  }
}

// const mapStateToProps = state => ({ events: state.events })

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

// const mapDispatchToProps = ({ postEvents })

export default connect(null, null)(EventsNew)


// export default App;

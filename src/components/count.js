import React from 'react'
import {connect} from 'react-redux'
import {addCount} from '../store/actions'

class Count extends React.Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return(
            <React.Fragment>
                count
                {this.props.count}
                <button onClick={()=>{this.props.addCount()}}>ajouter 1</button>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return{
        count : state.CountReducer.count
    }
}


export default connect(mapStateToProps,{ addCount })(Count)
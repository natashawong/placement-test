import React, {Component} from 'react';
import { connect } from 'react-redux';

const axios = require("axios");

export class NativePage extends Component {
    nativeResults = {
        easyCorrect: 0,
        easyTotal: 0,
        mediumCorrect: 0,
        mediumTotal: 0,
        advanceCorrect: 0,
        advanceTotal: 0,
        nativeCorrect: 0,
        nativeTotal: 0,
        result: "native",
    }

    componentDidMount() {
        const finalRes = Object.assign(this.props.userData.data, {Results: this.nativeResults});
        
        console.log(finalRes)
        // post data to db
        axios.post('http://localhost:9000/submit', finalRes, {withCredentials: true})
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }
    render() {
        return(
            <div>
                You are a native speaker. Please contact Professor Xiao at "email".
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.userData,
});

export default connect(mapStateToProps)(NativePage)
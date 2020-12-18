import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const _ = require("lodash");

export default class QuestionBlock extends Component {
  render() {
    return(
      <div>
        <h4>{this.props.numbering}. {this.props.prompt}</h4>
        {this.props.options.map((option, i) => {
          return(
          <div key={i}>
            <label>{_.get(option, ["prompt_" + this.props.langSettings])}</label>
            <Field type="radio" name={this.props.questionNumber} value={option.letter}/>
          </div>
        )})}
      </div>
    )
  }
}

QuestionBlock.propTypes = {
  questionNumber: PropTypes.number,
  numbering: PropTypes.number,
  prompt: PropTypes.string,
  options: PropTypes.array,
  langSettings: PropTypes.string,
}

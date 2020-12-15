import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

export default class QuestionBlock extends Component {
  render() {
    return(
      <div>
        <h4>{this.props.numbering}. {this.props.prompt}</h4>
        {this.props.options.map((option) => {
          return(
          <div>
          <label>{option.prompt}</label>
          <Field type="radio" name={this.props.questionNumber} value={option.letter}/>
          </div>
        )})}
      </div>
    )
  }
}

QuestionBlock.propTypes = {
  questionNumber: PropTypes.string,
  numbering: PropTypes.number,
  prompt: PropTypes.string,
  options: PropTypes.shape({
    letter: PropTypes.string,
    prompt: PropTypes.string
  })
}
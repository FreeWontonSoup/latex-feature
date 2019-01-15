import React, { Fragment } from "react";
import TextField from '@material-ui/core/TextField';
import { InlineMath, BlockMath } from 'react-katex';
import Button from '@material-ui/core/Button';
import 'katex/dist/katex.min.css';

class InputField extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            data: {
                text: ''
            }
          };

          this.handleChange = this.handleChange.bind(this);
    }

    handleChange = name => ({target: {value}}) => {
    this.setState({
        data: {
            ...this.state.data,
            [name]: value
        } 
    });
    };
    

    render () {
        const {data: { text } } = this.state;
        console.log({text});
        return (
            <Fragment>
                <form>
                    <TextField
                        id="standard-name"
                        label="Problem"
                        style={{ margin: 8 }}
                        fullWidth
                        multiline
                        value={text}
                        onChange={this.handleChange('text')}
                        margin="normal"
                        variant="outlined"
                    />
                    
                </form>

                <BlockMath>
                    {this.state.data.text}
                </BlockMath>
            </Fragment>
        )
    }
}

export default InputField;
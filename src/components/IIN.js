import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const IIN = () => {
    const [IIN, SetIIN] = React.useState('');
    const [errorExists, SetError] = React.useState(false);
    const numbers = /^[0-9]+$/;

    const validateIIN = React.useCallback((IIN) => {
        if (
            IIN.match(numbers) !== null &&
            IIN.length === 12
        ) {
            SetError(false)
        } else {
            SetError(true)
        }
    }, [SetError, IIN])

    const handleOnClick = React.useCallback((event) => {
        event.preventDefault();
        validateIIN(IIN);
    }, [IIN, validateIIN])

    const handleOnChange = React.useCallback((e) => {
        SetIIN(e.target.value);
    }, [SetIIN])

    return (
        <form onSubmit={handleOnClick}>
            <TextField
                error={errorExists}
                id="standard-error-helper-text"
                label="Error"
                onChange={handleOnChange}
                defaultValue={IIN}
                helperText={errorExists ? "Incorrect entry.": ''}
            />
            <Button onClick={handleOnClick} variant="contained" color="primary">
                Primary
            </Button>
        </form>
    )
}

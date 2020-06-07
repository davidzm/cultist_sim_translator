import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1'
})``

const Wrapper = styled.div.attrs({
    className: 'form-group'
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control'
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`
})`
    margin: 15px 15px 15px 5px;
`

class LanguagesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            code: '',
            name: ''
        }
    }

    handleChangeInputCode = async event => {
        const code = event.target.value
        this.setState({ code })
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleIncludeLanguage = async () => {
        const {code, name} = this.state
        const payload = {code, name}

        await api.insertLanguage(payload).then(res => {
            window.alert(`Language inserted successfully`)
            this.setState({
                code: '',
                name: ''
            })
        })
    }

    render() {
        const {code, name} = this.state
        return (
            <Wrapper>
                <Title>Create Language</Title>

                <Label>Code: </Label>
                <InputText
                    type="text"
                    value={code}
                    onChange={this.handleChangeInputCode}
                />

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Button onClick={this.handleIncludeLanguage}>Add Language</Button>
                <CancelButton href={'/languages/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default LanguagesInsert
import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class LanguagesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            languages: [],
            columns: [],
            isLoading: false
        }
    }

    componentDidMount = async () => {
        this.setState({isLoading: true})

        await api.getAllLanguages().then(languages => {
            this.setState({
                languages: languages.data.data,
                isLoading: false
            })
        })
    }

    render() {
        const {languages, isLoading} = this.state
        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true
            },
            {
                Header: 'Code',
                accessor: 'code',
                filterable: true
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true
            }
        ]

        let showTable = true
        if(!languages.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={languages} 
                        columns={columns} 
                        loading={isLoading} 
                        defaultPageSize={10} 
                        showPageSizeOptions={true} 
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default LanguagesList
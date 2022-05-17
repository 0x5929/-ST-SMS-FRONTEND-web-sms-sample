import React from 'react'
import Styles from './styles'

export function QueryTblContainer(props) {

    const { children, ...others } = props

    return (
        <Styles.TableContainer component={Styles.Paper}>
            <Styles.Table
                { ...others }
            >
                { children }
            </Styles.Table>
        </Styles.TableContainer>
    )
}

export function QueryTblHead(props) {

    const { tableData, order, orderBy, handleSortRequest } = props
    return (
        <Styles.TableHead>
            <Styles.TableRow>
                { 
                    tableData.mainQueryResultHeadCells.map( headCell => (

                        <Styles.TableCell 
                            key={ headCell.id }
                            sortDirection={orderBy === headCell.id ? order : false}
                        >
                            { headCell.disableSorting? headCell.label : 
                                <Styles.TableSortLabel
                                    active={ orderBy === headCell.id }
                                    direction={ orderBy === headCell.id ? order: 'asc' }
                                    onClick={ ()=>{handleSortRequest(headCell.id)} }
                                >
                                    { headCell.label }
                                </Styles.TableSortLabel>
                            }
                        </Styles.TableCell>
                    ))
                }
            </Styles.TableRow>
        </Styles.TableHead>
    )
}

export function QueryTblBody(props) {

    const { 
        records, 
        openInModal,
        handleDeletePress,
        openInDetail,
     } = props

    return (
    <Styles.TableBody>
        {records.map(record => (
                <Styles.TableRow key={ record.pk }>
                    <Styles.TableCell>{ record.studentId }</Styles.TableCell>
                    <Styles.TableCell>{ record.firstName }</Styles.TableCell>
                    <Styles.TableCell>{ record.lastName }</Styles.TableCell>
                    <Styles.TableCell>{ record.phoneNumber }</Styles.TableCell>
                    <Styles.TableCell>{ record.email }</Styles.TableCell>
                    <Styles.TableCell>{ record.course }</Styles.TableCell>
                    <Styles.TableCell>
                        <Styles.ActionButton 
                            variant="text"
                            onClick={()=> openInDetail(record)}
                            size="small"
                            color="primary"
                        >
                            <Styles.VisibilityRoundedIcon 
                                fontSize="small"
                                color="primary"
                            />
                        </Styles.ActionButton>
                        <Styles.ActionButton 
                            variant="text"
                            onClick={() =>openInModal(record)}
                            size="small"
                            color="secondary"
                        >
                            <Styles.EditOutlinedIcon 
                                fontSize="small"
                                color="secondary"
                            />
                        </Styles.ActionButton>
                        <Styles.ActionButton 
                            variant="text"
                            onClick={()=> handleDeletePress(record)}
                            size="small"
                            color="error"
                        >
                            <Styles.CloseOutlinedIcon 
                                fontSize="small"
                                color="error"
                            />
                        </Styles.ActionButton>
                    </Styles.TableCell>
                </Styles.TableRow>
        ))}
    </Styles.TableBody>
    )
}

export function QueryTblPagination(props) {

    return (
    <Styles.TablePagination 
        component="div"
        { ...props}
    />
    )
}


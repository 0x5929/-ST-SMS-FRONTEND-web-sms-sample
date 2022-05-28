import React from 'react'

import { useQueryResultTable, useDetailedViewTable, useNotification, useConfirmDialog } from '../../../hooks'
import Styles from './styles'

export default function QueryResults(props) {

    const { handleBacktoQuery, results } = props;

    const {

        notify,
        setNotify,
        closeNotification,

    } = useNotification(Styles.NotificationSlide)
    

    const {
        confirmDialog,
        setConfirmDialog,
        handleUnconfirmed
    } = useConfirmDialog()


    const {
        
        // table
        records,
        tableData,
        getFinalDisplayRecords,


        // paging
        pages,
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage,


        //filtering
        filterLabel,
        textInput,
        handleClear,

        // sorting
        orderBy,
        order,
        handleSortRequest,
        handleFilter,

        // modals
        modalTitle, 
        openModal, 
        openInModal,
        closeModal,

        // modal handling for view
        recordForView,
        setRecordForView,

        // delete operations
        handleDeletePress,

        // edit forms
        values, 
        errors,
        handleInputChange,
        handleEditSubmit,
        handleEditCancel,
        getCourseOptions,
        getRotationOptions,
        hoursWorkedRadioItems,
        convertToDefaultEventParam,
        success,
        loading,

        addRotModalOpen,
        addRotModalTitle,
        handleAddRot,
        handleCloseAddRot,
        handleAddRotInputChange,
        handleAddRotSubmit,
        handleAddRotClear,
        rotationValues,
        rotationErrors,
        

    } = useQueryResultTable({
        setNotify,
        notify,
        confirmDialog,
        setConfirmDialog
    }, results)

    const {
        detailedViewModalTitle,
        detailedViewOpen,
        detailedViewClose,
        openInDetail,
        getDetailedRecord,
    } = useDetailedViewTable(recordForView, setRecordForView)
    
    return (
        <>
            <Styles.Box>
                <Styles.SearchBar 
                    onChange={handleFilter}
                    textInput={textInput}
                    handleClear={handleClear}
                    label={filterLabel}
                    style={{flexGrow: 0}}

                />
                <Styles.BaseButton
                    text="Back to query"
                    size="small"
                    color="secondary"
                    variant="outlined"
                    onClick={handleBacktoQuery}
                />
            </Styles.Box>
            <Styles.QueryTblContainer>
                <Styles.QueryTblHead 
                    tableData={tableData} 
                    handleSortRequest={handleSortRequest}
                    orderBy={orderBy}
                    order={order}
                />
                <Styles.QueryTblBody 
                    records={getFinalDisplayRecords()}
                    openInModal={openInModal}
                    openInDetail={openInDetail}
                    handleDeletePress={handleDeletePress}
                />
            </Styles.QueryTblContainer>
            <Styles.QueryTblPagination 
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={pages}
                count={records.length}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Styles.Modal
                modalTitle={modalTitle}
                openModal={openModal}
                closeModal={closeModal}
            >
                <Styles.StudentForm
                    values={values}
                    errors={errors}
                    handleInputChange={handleInputChange}
                    handleCancel={handleEditCancel}
                    handleAddRot={handleAddRot}
                    handleCloseAddRot={handleCloseAddRot}
                    getCourseOptions={getCourseOptions}
                    getRotationOptions={getRotationOptions}
                    hoursWorkedRadioItems={hoursWorkedRadioItems}
                    convertToDefaultEventParam={convertToDefaultEventParam}
                    handleSubmit={handleEditSubmit}
                    success={success}
                    loading={loading}
                    addRotModalOpen={addRotModalOpen}
                    addRotModalTitle={addRotModalTitle}
                    handleAddRotInputChange={handleAddRotInputChange}
                    handleAddRotSubmit={handleAddRotSubmit}
                    handleAddRotClear={handleAddRotClear}
                    rotationValues={rotationValues}
                    rotationErrors={rotationErrors}
                />
            </Styles.Modal>
            <Styles.Modal
                modalTitle={detailedViewModalTitle}
                openModal={detailedViewOpen}
                closeModal={detailedViewClose}
                onBackdropClick={detailedViewClose}
            >
                <Styles.DetailedTblContainer>
                    <Styles.DetailedTblHead 
                        tableData={tableData} 
                    />
                    <Styles.DetailedTblBody 
                        record={getDetailedRecord()}
                        tableData={tableData}
                    />
                </Styles.DetailedTblContainer>
            </Styles.Modal>
            <Styles.Notification 
                notify={notify}
                closeNotification={closeNotification}
            />
            <Styles.ConfirmDialog 
                confirmDialog={confirmDialog}
                handleUnconfirmed={handleUnconfirmed}
            />
        </>
    )
}

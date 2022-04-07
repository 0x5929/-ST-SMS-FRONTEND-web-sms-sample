import React from 'react'
import useTable from '../../controllers/query/tableController'
import Controls from '../../components'


export default function QueryResults() {


    
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
        recordForEdit,

        // edit forms
        values, 
        setValues,
        errors,
        handleInputChange,
        handleSubmit,
        handleCancel,
        getCourseOptions,
        hoursWorkedRadioItems,
        populateFormFieldsForEdit,

    } = useTable()


    
    return (
        <>
            <Controls.FilterBar 
                handleFilter={handleFilter}
            />
            <Controls.TblContainer>
                <Controls.TblHead 
                    tableData={tableData} 
                    handleSortRequest={handleSortRequest}
                    orderBy={orderBy}
                    order={order}
                />
                <Controls.TblBody 
                    records={getFinalDisplayRecords()}
                    openInModal={openInModal}
                />
            </Controls.TblContainer>
            <Controls.TblPagination 
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={pages}
                count={records.length}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Controls.Modal
                modalTitle={modalTitle}
                openModal={openModal}
                closeModal={closeModal}
            >
                <Controls.Form onSubmit={handleSubmit}>
                    <Controls.StudentFormGrid
                        recordForEdit={recordForEdit}
                        setValues={setValues}
                        values={values}
                        errors={errors}
                        handleInputChange={handleInputChange}
                        handleCancel={handleCancel}
                        getCourseOptions={getCourseOptions}
                        hoursWorkedRadioItems={hoursWorkedRadioItems}
                        populateFormFieldsForEdit={populateFormFieldsForEdit}
                    />
                </Controls.Form>
            </Controls.Modal>
            
        </>
    )
}

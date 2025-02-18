import { CircularProgress } from '@material-ui/core'
import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

import CenteredContainer from '../../../../../../components/CenteredContainer'
import Table from '../../../../../../components/Table'
import { useGetBrandShowsLazyQuery } from '../../../../../../generated/graphql'

export default function ShowsPage() {
  const router = useRouter()
  const { brandId }: { brandId?: string } = router.query
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)

  const [getMyShows, { data, loading }] = useGetBrandShowsLazyQuery()

  useEffect(() => {
    if (limit !== undefined && offset !== undefined)
      getMyShows({
        variables: { limit, offset, brandId },
      })
  }, [limit, offset])

  const onChangePage = (page) => {
    setOffset(page * limit)
  }
  const onChangeRowsPerPage = (rowsPerPage) => {
    setOffset(0)
    setLimit(rowsPerPage)
  }

  return (
    <CenteredContainer>
      {loading ? (
        <CircularProgress />
      ) : (
        <Table
          rows={data?.brandShows || []}
          columns={[
            {
              title: 'Title',
              field: 'title',
            },
            {
              title: 'Show Segments',
              field: 'showSegments',
              renderField: (row) =>
                row.showSegments?.map(({ title }) => title).join(', '),
            },
            {
              title: 'Actions',
              renderField: (row) => (
                <FaPencilAlt
                  onClick={(e) => {
                    e.stopPropagation()
                    Router.push(
                      `/seller/store/details/${brandId}/shows/${row.id}`,
                    )
                  }}
                  size={20}
                />
              ),
              field: 'actions',
            },
          ]}
          bottomActions={[
            {
              handleClick: () =>
                Router.push(`/seller/store/details/${brandId}/shows/new`),
              name: 'Add Show',
            },
          ]}
          rowId="id"
          tableTitle="My Shows"
          tableWidth="75%"
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
        />
      )}
    </CenteredContainer>
  )
}

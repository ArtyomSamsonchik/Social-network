import React, {FC, memo} from 'react';
import s from "./PaginationBar.module.css"

type PaginationBarProps = {
    totalPagesCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
}

const PaginationBar: FC<PaginationBarProps> = (props) => {
    const {currentPage, setCurrentPage} = props
    const FIRST_PAGE = 1
    const LAST_PAGE = props.totalPagesCount
    const BAR_LENGTH = 9    //  10 items - 1 item

    let startBarPage = Math.max(FIRST_PAGE, currentPage - 5)
    const endBarPage = Math.min(startBarPage + 9, LAST_PAGE)
    const currentBarLength = endBarPage - startBarPage

    if (currentBarLength < BAR_LENGTH) {
        startBarPage = Math.max(endBarPage - BAR_LENGTH, FIRST_PAGE)
    }

    const mappedPages: JSX.Element[] = []

    for (let i = startBarPage; i <= endBarPage; i++) {
        const onSetPageClickHandler = () => {
            if (currentPage !== i) setCurrentPage(i)
        }

        mappedPages.push(
            <div key={"page" + i}
                 className={i === currentPage ? s.selected_page : ""}
                 onClick={onSetPageClickHandler}>
                {i}
            </div>
        )
    }

    const firstPageIsReached = currentPage === FIRST_PAGE
    const lastPageIsReached = currentPage === LAST_PAGE

    const onBoundaryPageClickHandler = (page: number) => {
        const reopeningFirstPage = currentPage === FIRST_PAGE && page === FIRST_PAGE
        const reopeningLastPage = currentPage === LAST_PAGE && page === LAST_PAGE

        if (reopeningFirstPage || reopeningLastPage) return

        return () => setCurrentPage(page)
    }

    const onSiblingPageClickHandler = (direction: "next" | "prev") => {
        let nextPage: number | null = null

        if (direction === "next" && !lastPageIsReached) {
            nextPage = Math.min(LAST_PAGE, currentPage + 10)
        }
        if (direction === "prev" && !firstPageIsReached) {
            nextPage = Math.max(FIRST_PAGE, currentPage - 10)
        }

        if (nextPage) return () => setCurrentPage(nextPage as number)
    }

    return (
        <div className={s.pagination_bar}>
            <div onClick={onBoundaryPageClickHandler(FIRST_PAGE)}>{"<< To start"}</div>
            <div onClick={onSiblingPageClickHandler("prev")}>{"<"}</div>
            {mappedPages}
            <div onClick={onSiblingPageClickHandler("next")}>{">"}</div>
            <div onClick={onBoundaryPageClickHandler(LAST_PAGE)}>{"To end >>"}</div>
        </div>
    )
}

export const MemoPaginationBar = memo(PaginationBar)
export default PaginationBar
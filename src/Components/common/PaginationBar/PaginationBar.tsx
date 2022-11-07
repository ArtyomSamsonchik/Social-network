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

    const renderedPages: JSX.Element[] = []

    for (let i = startBarPage; i <= endBarPage; i++) {
        const onSetPageClickHandler = () => {
            if (currentPage !== i) setCurrentPage(i)
        }

        renderedPages.push(
            <div key={"page" + i}
                 className={i === currentPage ? s.selected_page : ""}
                 onClick={onSetPageClickHandler}
            >{i}</div>
        )
    }

    const firstPageIsReached = currentPage === FIRST_PAGE
    const lastPageIsReached = currentPage === LAST_PAGE

    const getOnBoundaryPageClickHandler = (page: number) => {
        const reopeningFirstPage = firstPageIsReached && page === FIRST_PAGE
        const reopeningLastPage = lastPageIsReached && page === LAST_PAGE

        return () => {
            if (reopeningFirstPage || reopeningLastPage) return
            setCurrentPage(page)
        }
    }

    const getOnSiblingPageClickHandler = (direction: "nextTen" | "prevTen") => {
        let nextPage: number | null = null

        if (direction === "nextTen" && !lastPageIsReached) {
            nextPage = Math.min(LAST_PAGE, currentPage + 10)
        }
        if (direction === "prevTen" && !firstPageIsReached) {
            nextPage = Math.max(FIRST_PAGE, currentPage - 10)
        }

        return () => {
            if (nextPage) setCurrentPage(nextPage)
        }
    }

    return (
        <div className={s.pagination_bar}>
            <div onClick={getOnBoundaryPageClickHandler(FIRST_PAGE)}>{"<< To start"}</div>
            <div onClick={getOnSiblingPageClickHandler("prevTen")}>{"<"}</div>
            {renderedPages}
            <div onClick={getOnSiblingPageClickHandler("nextTen")}>{">"}</div>
            <div onClick={getOnBoundaryPageClickHandler(LAST_PAGE)}>{"To end >>"}</div>
        </div>
    )
}

export const MemoPaginationBar = memo(PaginationBar)
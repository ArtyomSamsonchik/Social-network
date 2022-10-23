import React, {Component, memo} from 'react';
import s from "./PaginationBar.module.css"

type PaginationBarProps = {
    totalPagesCount: number
    currentPage: number
    goToPage: (page: number) => void
}

class PaginationBar extends Component<PaginationBarProps> {
    render() {
        const {currentPage, totalPagesCount, goToPage} = this.props
        const FIRST_PAGE = 1
        const LAST_PAGE = totalPagesCount

        const startBarPage = Math.max(1, currentPage - 5)
        const endBarPage = Math.min(startBarPage + 9, totalPagesCount)
        const mappedPages = []

        for (let i = startBarPage; i <= endBarPage; i++) {
            const onGoToPageClickHandler = () => {
                goToPage(i)
            }

            mappedPages.push(
                <div key={"page" + i}
                     className={i === currentPage ? s.selected_page : ""}
                     onClick={onGoToPageClickHandler}>
                    {i}
                </div>
            )
        }

        const onBoundaryPageClickHandler = (page: number) => {
            return () => goToPage(page)
        }

        return (
            <div className={s.pagination_bar}>
                <div onClick={onBoundaryPageClickHandler(FIRST_PAGE)}>{"<< To start"}</div>
                {mappedPages}
                <div onClick={onBoundaryPageClickHandler(LAST_PAGE)}>{"To end >>"}</div>
            </div>
        )
    }
}

export const MemoPaginationBar = memo(PaginationBar)
export default PaginationBar
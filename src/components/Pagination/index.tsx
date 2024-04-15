

import React, { FC } from 'react';

type Prop = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: FC<Prop> = ({ currentPage, totalPages, onPageChange }) => {

    if (totalPages<2) {
        return <></>
    }

    return (
        <nav className="flex flex-col items-center justify-center">
            <ul className="flex gap-x-2">
                {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber: number = index + 1;
                    return (
                        <li
                            onClick={() => onPageChange(pageNumber)}
                            key={index}
                            className={`text-white py-2 px-3 ${pageNumber === parseInt(currentPage.toString()) ? "bg-primary" : "bg-gray-500"}`}
                        >
                            <button
                            >
                                {pageNumber}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
export default Pagination;
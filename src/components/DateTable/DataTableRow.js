import React from 'react';
import PropTypes from 'prop-types';

const DataTableRow = (props) => {
    const { results } = props;

    const listItems = results.map((item, index) => {
        const key = `item_${index}`;
        return (
            <tr className="data-table__row" key={key}>
                <td className="data-table__cell data-table__cell--date">
                    {item.Date}
                </td>
                <td className="data-table__cell data-table__cell--company">
                    {item.Company}
                </td>
                <td className="data-table__cell data-table__cell--account">
                    {item.Ledger}
                </td>
                <td className="data-table__cell data-table__cell--amount">
                    ${item.Amount}
                </td>
            </tr>
        );
    });

    return listItems;
};

DataTableRow.propTypes = { results: PropTypes.array };
DataTableRow.defaultProps = { results: [] };

export default DataTableRow;

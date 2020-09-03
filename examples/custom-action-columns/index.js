import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "../../src/";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          index: 1,
          data: ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
          checked: false,
          isTreeExpanded: false,
          markedForTreeRemove: false,
          childRows: [],
          path: [],
        },
        {
          index: 2,
          data: ["Aiden Lloyd", "Business Consultant", "Dallas",  55, "$200,000"],
          parentIndex: 1,
          isTreeExpanded: false,
        },
        {
          index: 3,
          data: ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
          parentIndex: 1,
          isTreeExpanded: false,
        },
        {
          index: 4,
          data: ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
          parentIndex: 1,
          isTreeExpanded: false,
        },
        {
          index: 5,
          data: ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
          isTreeExpanded: false,
        },
        {
          index: 6,
          data: ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
          parentIndex: 5,
          isTreeExpanded: false,
        },
        {
          index: 7,
          data: ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
          parentIndex: 5,
          isTreeExpanded: false,
        },
        {
          index: 8,
          data: ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
          parentIndex: 7,
          isTreeExpanded: false,
        },
        {
          index: 9,
          data: ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
          parentIndex: 7,
          isTreeExpanded: false,
        },
        {
          index: 10,
          data: ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
          parentIndex: 9,
          isTreeExpanded: false,
        },
        {
          index: 11,
          data: ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
          parentIndex: 9,
          isTreeExpanded: false,
        },
        {
          index: 12,
          data: ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
          parentIndex: 9,
          isTreeExpanded: false,
        },
        {
          index: 13,
          data: ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
          parentIndex: 9,
          isTreeExpanded: false,
        },
        {
          index: 13,
          data: ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
          parentIndex: 9,
          isTreeExpanded: false,
        },
        {
          index: 15,
          data: ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
          parentIndex: 9,
          isTreeExpanded: false,
        },
        {
          index: 16,
          data: ["Addison Navarro", "Business Management Analyst", "New York", 50, "$295,000"],
          isTreeExpanded: false,
        },
        {
          index: 17,
          data: ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
          parentIndex: 16,
          isTreeExpanded: false,
        },
        {
          index: 18,
          data: ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
          parentIndex: 16,
          isTreeExpanded: false,
        },
        {
          index: 19,
          data: ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
          parentIndex: 16,
          isTreeExpanded: false,
        },
        {
          index: 20,
          data: ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
          parentIndex: 16,
          isTreeExpanded: false,
        },
        {
          index: 21,
          data: ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
          isTreeExpanded: false,
        },
        {
          index: 22,
          data: ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
          parentIndex: 21,
          isTreeExpanded: false,
        },
        {
          index: 23,
          data: ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
          parentIndex: 21,
          isTreeExpanded: false,
        },
        {
          index: 24,
          data: ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
          parentIndex: 21,
          isTreeExpanded: false,
        },
        {
          index: 25,
          data: ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
          parentIndex: 24,
          isTreeExpanded: false,
        },
        {
          index: 26,
          data: ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000" ],
          parentIndex: 24,
          isTreeExpanded: false,
        },
        {
          index: 27,
          data: ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
          parentIndex: 24,
          isTreeExpanded: false,
        },
        {
          index: 28,
          data: ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
          isTreeExpanded: false,
        },
        {
          index: 29,
          data: ["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, "$45,000"],
          parentIndex: 28,
          isTreeExpanded: false,
        },
        {
          index: 30,
          data: ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"],
          parentIndex: 28,
          isTreeExpanded: false,
        },
      ],
      columns: [
        {
          name: "Name",
          options: {
            filter: true,
          }
        },
        {
          label: "Modified Title Label",
          name: "Title",
          options: {
            filter: true,
          }
        },
        {
          name: "Location",
          options: {
            filter: false,
          }
        },
        {
          name: "Age",
          options: {
            filter: true,
          }
        },
        {
          name: "Salary",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Add",
          options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex) => {
              return (
                  <button onClick={() => {
                    const { data } = this.state;
                    data.unshift(["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]);
                    this.setState({ data });
                  }}>
                    Add
                  </button>
              );
            }
          }
        },
        {
          name: "Delete",
          options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex) => {
              return (
                  <button onClick={() => {
                    const { data } = this.state;
                    data.shift();
                    this.setState({ data });
                  }}>
                    Delete
                  </button>
              );
            }
          }
        },
        {
          name: "Edit",
          options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex, rowIndex) => {
              return (
                  <button onClick={() => window.alert(`Clicked "Edit" for row ${rowIndex} with dataIndex of ${dataIndex}`)}>
                    Edit
                  </button>
              );
            }
          }
        },
      ],
    };
  }

  onUpdateColumns = columns => this.setState({
    columns: columns.map(col => {
      const { name, ...options } = col;
      return { name, options };
    }),
  });

  render() {
    const { data, columns } = this.state;

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'vertical',
      onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
      onChangeRowsPerPage: numberOfRows => console.log('numberOfRows: ', numberOfRows),
      onChangePage: currentPage => console.log('currentPage: ', currentPage),
      // onTableChange: (action, tableState) => {
      //   console.log(action, tableState);
      // },
      // onViewColumnsChange: _ => {},
      // onColumnViewChange: _ => {},
      expandableRows: true,
      expandableRowsHeader: true,
      expandableRowsOnClick: false,
      isRowExpandable: (dataIndex, expandedRows) => {
        // TODO: remove console log
        // console.log(dataIndex, expandedRows);
        if (dataIndex === 3 || dataIndex === 4) return false;

        // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
        if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0) return false;
        return true;
      },
      rowsExpanded: [0, 1],
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        return (
            <TableRow>
              <TableCell colSpan={colSpan}>
                Custom expandable row option. Data: {JSON.stringify(rowData)}
              </TableCell>
            </TableRow>
        );
      },
      onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => console.log(curExpanded, allExpanded, rowsExpanded)
    };

    return (
      <MUIDataTable
        title={"ACME Employee list"}
        data={data}
        findParentFn={(row, rows) => rows.find(a => a.index === row.parentIndex)}
        columns={columns}
        onUpdateColumns={this.onUpdateColumns}
        options={options}
      />
    );

  }
}

export default Example;

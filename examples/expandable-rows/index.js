 import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable, {ExpandButton} from "../../src/";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

class Example extends React.Component {

  render() {

    const columns = [
      {
        name: "Name",
        options: {
          filter: true,
        }
      },
      {
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
          sort: false
        }
      }
    ];


    const data = [
      {
        index: 1,
        data: ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
      },
      {
        index: 2,
        data: ["Aiden Lloyd", "Business Consultant", "Dallas",  55, "$200,000"],
        parentIndex: 1
      },
      {
        index: 3,
        data: ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
        parentIndex: 1
      },
      {
        index: 4,
        data: ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
        parentIndex: 1
      },
      { index: 5,
        data: ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
      },
      { index: 6,
        data: ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
        parentIndex: 5
      },
      { index: 7,
        data: ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
        parentIndex: 5
      },
      { index: 8,
        data: ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
        parentIndex: 7
      },
      { index: 9,
        data: ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
        parentIndex: 7
      },
      { index: 10,
        data: ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
        parentIndex: 9
      },
      { index: 11,
        data: ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
        parentIndex: 9
      },
      { index: 12,
        data: ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
        parentIndex: 9
      },
      { index: 13,
        data: ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
        parentIndex: 9
      },
      { index: 13,
        data: ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
        parentIndex: 9
      },
      { index: 15,
        data: ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
        parentIndex: 9
      },
      { index: 16,
        data: ["Addison Navarro", "Business Management Analyst", "New York", 50, "$295,000"],
      },
      { index: 17,
        data: ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
        parentIndex: 16
      },
      { index: 18,
        data: ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
        parentIndex: 16
      },
      { index: 19,
        data: ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
        parentIndex: 16
      },
      { index: 20,
        data: ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
        parentIndex: 16
      },
      { index: 21,
        data: ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
      },
      { index: 22,
        data: ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
        parentIndex: 21
      },
      { index: 23,
        data: ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
        parentIndex: 21
      },
      { index: 24,
        data: ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
        parentIndex: 21
      },
      { index: 25,
        data: ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
        parentIndex: 24
      },
      { index: 26,
        data: ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000" ],
        parentIndex: 24
      },
      { index: 27,
        data: ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
        parentIndex: 24
      },
      { index: 28,
        data: ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
      },
      { index: 29,
        data: ["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, "$45,000"],
        parentIndex: 28
      },
      { index: 30,
        data: ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"],
        parentIndex: 28
      },
    ];

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'standard',
      expandableRows: true,
      expandableRowsHeader: false,
      expandableRowsOnClick: true,
      isRowExpandable: (dataIndex, expandedRows) => {
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

    const theme = createMuiTheme({
      overrides: {
        MUIDataTableSelectCell: {
          expandDisabled: {
            // Soft hide the button.
            visibility: 'hidden',
          },
        },
      },
    });

    const components = {
      ExpandButton: function(props) {
        if (props.dataIndex === 3 || props.dataIndex === 4) return <div style={{width:'24px'}} />;
        return <ExpandButton {...props} />;
      }
    };

    return (
      <MuiThemeProvider theme={theme}>
        <MUIDataTable title={"ACME Employee list"} data={data} columns={columns} options={options} components={components} />
      </MuiThemeProvider>
    );

  }
}

export default Example;

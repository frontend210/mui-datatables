import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles(
  theme => ({
    root: {
      padding: '16px 24px 16px 24px',
      fontFamily: 'Roboto',
    },
    title: {
      marginLeft: '-7px',
      marginRight: '24px',
      fontSize: '14px',
      color: theme.palette.text.secondary,
      textAlign: 'left',
      fontWeight: 500,
    },
    formGroup: {
      marginTop: '8px',
    },
    formControl: {},
    checkbox: {
      padding: '0px',
      width: '32px',
      height: '32px',
    },
    checkboxRoot: {},
    checked: {},
    label: {
      fontSize: '15px',
      marginLeft: '8px',
      color: theme.palette.text.primary,
    },
    showColumns: {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-between'
    },
    editButton: {
      float: 'right',
    }
  }),
  { name: 'MUIDataTableViewCol' },
);

const TableViewCol = ({ columns, options, components = {}, addColumn, editColumn, onColumnUpdate, updateColumns }) => {
  const classes = useStyles();
  const textLabels = options.textLabels.viewColumns;
  const CheckboxComponent = components.Checkbox || Checkbox;

  const handleColChange = index => {
    onColumnUpdate(index);
  };

  return (
    <FormControl component={'fieldset'} className={classes.root} aria-label={textLabels.titleAria}>
      <Typography variant="caption" className={classes.title}>
        {textLabels.title}
      </Typography>
      <FormGroup className={classes.formGroup}>
        {columns.map((column, index) => {
          return (
            column.display !== 'excluded' &&
            column.viewColumns !== false && (
              <div key={index} className={classes.showColumns}>
                <FormControlLabel
                  classes={{
                    root: classes.formControl,
                    label: classes.label,
                  }}
                  control={
                    <CheckboxComponent
                      color="primary"
                      data-description="table-view-col"
                      className={classes.checkbox}
                      classes={{
                        root: classes.checkboxRoot,
                        checked: classes.checked,
                      }}
                      onChange={() => handleColChange(index)}
                      checked={column.display === 'true'}
                      value={column.name}
                    />
                  }
                  label={column.label}
                />
                <IconButton
                  data-testid={textLabels.editColumn}
                  aria-label={textLabels.editColumn}
                  className={classes.editButton}
                  onClick={() => editColumn(index)}
                >
                  <CreateIcon color="primary" fontSize="small"/>
                </IconButton>
              </div>
            )
          );
        })}
      </FormGroup>
      <Button color="primary" onClick={() => addColumn()}>
        {textLabels.addColumn}
      </Button>
    </FormControl>
  );
};

TableViewCol.propTypes = {
  /** Columns used to describe table */
  columns: PropTypes.array.isRequired,
  /** Options used to describe table */
  options: PropTypes.object.isRequired,
  /** Callback to trigger View column update */
  onColumnUpdate: PropTypes.func,
  /** Extend the style applied to components */
  classes: PropTypes.object,
};

export default TableViewCol;

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';

export default function ExpandButton(props) {
  return (
    <React.Fragment>
      {props.isHeaderCell && !props.areAllRowsExpanded() && props.expandedRows && props.expandedRows.data.length > 0
      ? (
        <IconButton
          onClick={props.onExpand}
          style={{ padding: 0 }}
          disabled={props.expandableRowsHeader === false}
          className={props.buttonClass}
        >
          <UnfoldLessIcon id="expandable-button" fontSize="small" className={props.iconIndeterminateClass}/>
        </IconButton>
      ) : (
        <IconButton
          onClick={props.onExpand}
          style={{ padding: 0 }}
          disabled={props.expandableRowsHeader === false}
          className={props.buttonClass}>
          <UnfoldMoreIcon id="expandable-button" fontSize="small" className={props.iconClass}/>
        </IconButton>
      )}
    </React.Fragment>
  );
}
